
import { GlitchParams } from '../types';

/*
 * EFFECTS/ENGINE BOUNDARY (LOCKED)
 * ---------------------------------
 * Where effects may operate:
 * - Only on the provided Canvas contexts and buffers (B.*, inCtx, compCtx, moshCtx, swapCtx).
 * - Effects consume the CanvasImageSource passed by the renderer; they DO NOT create media elements.
 *
 * Where audio modulation may hook in:
 * - Via audioService feature extraction to modulate GlitchParams (see the audio modulation block below).
 * - Audio may change parameters; it MUST NOT create or load media elements.
 *
 * Where temporal buffers may read frames:
 * - From the current frame and history buffers (B.input/B.mosh/B.compose and S.historyFrames).
 * - Temporal effects MAY read/draw between canvases; they DO NOT create <img>/<video> or load files.
 *
 * DO NOT:
 * - Create <img> or <video> elements here.
 * - Call URL.createObjectURL or load files from effects.
 * - Split the media pipelines. Effects only consume frames.
 */
import { webglMoshService } from './webglService';
import { 
  state as globalState, 
  buffers as globalBuffers, 
  getContexts as getGlobalContexts, 
  resetEngine, 
  MAX_HISTORY 
} from './glitchEngine/state';
import { getGlobalEngineContext } from '../engine/globalEngineBridge';
import type { EngineContext } from '../engine/engineTypes';
import { getContextsFrom as getContextsFromEng, resetEngineContext } from '../engine/createEngineContext';
import { applyIFrameDestructionS, applyMotionVectorS, applyFeedbackS, applyMacroblockCorruptionS } from '../datamosh_ops/stateless';
import { applyMotionVectorAbuseS } from '../datamosh_ops/mvAbuse';
import { applyMeltS, applyShredS, applyScatterS, applyPixelSort, applyChannelSeparation } from '../glitch_ops/stateless';
import { applyCompressionGlitch, getCompressionDebug, resetCompressionCaches } from './glitchEngine/compression';
import { applyPostProcessing } from './glitchEngine/post';
import { applyAnalogPhaseSlip } from './glitchEngine/phaseSlip';
import { applyVerticalSyncCollapse } from './glitchEngine/verticalSyncCollapse';
import { applyVhsTrackingNoiseBand } from './glitchEngine/trackingBand';
import { applySnowBurst } from './glitchEngine/snowBurst';
import { applyChromaDrift } from './glitchEngine/chromaDrift';
import { applySliceStripe } from './glitchEngine/sliceStripe';
import { applyMotionSculptureWebGL, resetWebGLMosh, getWebGLMoshDebug } from './glitchEngine/webgl/applyMotionSculptureWebGL';
import { applyEffectStack, setEffectStack } from './effects/stack';
import { buildEffectsFromParams } from './effects/bind';
import { 
  applyTemporalEcho,
  applyTimeSmear,
  applyReverseBurst,
  applyStutterLock,
  applyTemporalDisplacement,
  enforceTemporalSafety,
  resetTemporalEffects
} from './glitchEngine/temporal';
import {
  applyPartialFrameReplace,
  getChaosModulatedSeed
} from './glitchEngine/coreEffects';
import { audioEventDispatch, applyAudioEventHijack } from './audioEventBus';

// Temporary debug overlay toggle: enable by setting window.__ERRORHEAD_DEBUG__ = true in console
const DEBUG_OVERLAY = (typeof window !== 'undefined' && (window as any).__ERRORHEAD_DEBUG__ === true);
let audioCvSmooth = 0;

/**
 * Main Orchestrator for the Glitch Engine.
 */

export const resetGlitchState = (eng?: EngineContext) => {
  const context = eng ?? getGlobalEngineContext();
  if (eng) resetEngineContext(eng); else resetEngine();
  resetWebGLMosh();
  resetCompressionCaches();
  resetTemporalEffects(context);
};

export const renderGlitch = async (
  ctx: CanvasRenderingContext2D,
  source: CanvasImageSource,
  baseParams: GlitchParams,
  width: number,
  height: number,
  tGlobal: number,
  audioLevel: number = 0,
  engOpt?: EngineContext,
  isPlaying: boolean = true
) => {
  const playing = isPlaying !== false;
  // Debug: collect simple per-frame diagnostics
  const dbg: { media: string; mw: number; mh: number; overlayOk: boolean; pipeline: string } = {
    media: 'unknown', mw: width, mh: height, overlayOk: false, pipeline: '2d'
  };
  // Identify source type & intrinsic dims when possible
  try {
    if ((source as any) instanceof HTMLVideoElement) {
      const v = source as HTMLVideoElement;
      dbg.media = `video${v.paused ? '(paused)' : ''}`;
      dbg.mw = v.videoWidth; dbg.mh = v.videoHeight;
    } else if ((source as any) instanceof HTMLImageElement) {
      const i = source as HTMLImageElement;
      dbg.media = 'image'; dbg.mw = (i as any).naturalWidth || (i as any).width; dbg.mh = (i as any).naturalHeight || (i as any).height;
    } else if ((source as any) instanceof HTMLCanvasElement) {
      const c = source as HTMLCanvasElement;
      dbg.media = 'canvas'; dbg.mw = c.width; dbg.mh = c.height;
    }
  } catch (e) {}
  // 1. Sync Buffer Sizes
  const eng = engOpt ?? getGlobalEngineContext();
  const B = engOpt ? eng.buffers : globalBuffers;
  const S = engOpt ? eng.state : globalState;
  const stateAny = S as any;
  const prevT = typeof stateAny.lastTGlobal === 'number' ? stateAny.lastTGlobal : tGlobal;
  const dtSec = Math.max(0, (typeof window !== 'undefined' && (window as any).__ERRORHEAD_FIXED_DT) ? (window as any).__ERRORHEAD_FIXED_DT : (tGlobal - prevT));
  stateAny.lastTGlobal = tGlobal;
  const eventFrame = typeof stateAny.audioEventFrame === 'number' ? (stateAny.audioEventFrame + 1) : 0;
  stateAny.audioEventFrame = eventFrame;
  const { inCtx, compCtx, moshCtx, swapCtx } = engOpt ? getContextsFromEng(eng) : getGlobalContexts();
  Object.values(B as any).forEach((c: HTMLCanvasElement) => {
    if (c.width !== width || c.height !== height) {
      c.width = width;
      c.height = height;
    }
  });

  // 2. Audio Modulation Pass — CONTROL VOLTAGE SYSTEM
  let params = { ...baseParams };
  let audioFeatures: { amplitude: number; envelope: number; low: number; mid: number; high: number; transient: number; beat: number } | null = null;
  if (params.audioEnabled) {
    const { audioService } = await import('./audioService');
    audioFeatures = audioService.getFeatures();
  }
  if (params.audioEnabled && !params.audioModulationBypass && audioFeatures) {
    const features = audioFeatures;
    
    // Select feature based on user preference
    const featureMap = {
      amplitude: features.amplitude,
      envelope: features.envelope,
      low: features.low,
      mid: features.mid,
      high: features.high,
      transient: features.transient,
      beat: features.beat
    };
    let rawCV = featureMap[params.audioFeature] || features.envelope;
    
    // Apply gate threshold
    const gate = params.audioGate / 100;
    if (rawCV < gate) rawCV = 0;
    else rawCV = (rawCV - gate) / (1 - gate); // Normalize above gate
    
    // Apply inversion if enabled
    if (params.audioInvert) rawCV = 1 - rawCV;
    
    // Apply quantization if enabled
    if (params.audioQuantize && params.audioQuantize > 0) {
      const steps = Math.floor(params.audioQuantize);
      rawCV = Math.floor(rawCV * steps) / steps;
    }
    
    // Apply gain (normalized to useful range)
    const cv = Math.min(1.0, rawCV * (params.audioGain / 50));
    // Apply smoothing (0 = none, 100 = heavy)
    const smooth = Math.max(0, Math.min(1, (params.audioSmooth ?? 0) / 100));
    const alpha = 1 - smooth;
    audioCvSmooth = audioCvSmooth + (cv - audioCvSmooth) * alpha;
    const cvVis = Math.min(1.0, audioCvSmooth * 1.4);

    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
    const addMod = (base: number, add: number, min: number, max: number) => {
      const baseVal = Number.isFinite(base) ? base : 0;
      const next = baseVal + add;
      return clamp(next, min, max);
    };

    // Audio frequency mapping for Analog Sync Distortion
    const applyCV = (v: number) => {
      let out = Math.max(0, Math.min(1, v));
      if (out < gate) out = 0;
      else out = (out - gate) / (1 - gate);
      if (params.audioInvert) out = 1 - out;
      if (params.audioQuantize && params.audioQuantize > 0) {
        const steps = Math.floor(params.audioQuantize);
        out = Math.floor(out * steps) / steps;
      }
      out = Math.min(1.0, out * (params.audioGain / 50));
      return out;
    };

    if (params.phaseEnabled) {
      const bassCv = applyCV((features.low * 0.7) + (features.envelope * 0.3));
      const highCv = applyCV(features.high);
      params.phaseSpeed = addMod(baseParams.phaseSpeed ?? 0, bassCv * 0.6, 0, 10);
      params.phaseSpeedX = addMod(baseParams.phaseSpeedX ?? 0, highCv * 0.9, 0, 10);
    }

    if (params.vSyncEnabled) {
      const peakCv = applyCV(features.transient);
      params.vSyncBandVariance = addMod(baseParams.vSyncBandVariance ?? 0, peakCv * 2.5, 0, 10);
    }
    
    // Apply modulation to targets (depth controls intensity)
    if (params.audioTargetRgb > 0) {
      const depth = params.audioTargetRgb / 100;
      params.rgbShift = addMod(baseParams.rgbShift ?? 0, cvVis * depth * 50, 0, 50);
    }
    
    if (params.audioTargetAmount > 0) {
      const depth = params.audioTargetAmount / 100;
      params.amount = addMod(baseParams.amount ?? 0, cvVis * depth * 40, 0, 100);
    }
    
    if (params.audioTargetWarp > 0) {
      const depth = params.audioTargetWarp / 100;
      params.moshWarp = addMod(baseParams.moshWarp ?? 0, cvVis * depth * 60, 0, 200);
    }
    
    if (params.audioTargetFeedback && params.audioTargetFeedback > 0) {
      const depth = params.audioTargetFeedback / 100;
      params.feedback = addMod(baseParams.feedback ?? 0, cvVis * depth * 20, 0, 100);
    }
    
    if (params.audioTargetBlocks && params.audioTargetBlocks > 0) {
      const depth = params.audioTargetBlocks / 100;
      params.blockList = addMod(baseParams.blockList ?? 0, cvVis * depth * 60, 0, 100);
    }
    
    if (params.audioTargetMelt && params.audioTargetMelt > 0) {
      const depth = params.audioTargetMelt / 100;
      params.melt = addMod(baseParams.melt ?? 0, cvVis * depth * 50, 0, 100);
    }
    
    if (params.audioTargetShake && params.audioTargetShake > 0) {
      const depth = params.audioTargetShake / 100;
      params.shake = addMod(baseParams.shake ?? 0, cvVis * depth * 80, 0, 100);
    }
    
    if (params.audioTargetNoise && params.audioTargetNoise > 0) {
      const depth = params.audioTargetNoise / 100;
      params.noise = addMod(baseParams.noise ?? 0, cvVis * depth * 60, 0, 100);
    }
    
    // CRT pulse on transients
    if (params.scanlines && features.transient > 0.5) {
       params.scanlineIntensity = addMod(baseParams.scanlineIntensity ?? 0, features.transient * 30, 0, 100);
    }
  }
  else {
    audioCvSmooth = 0;
  }

  // 2.5 Audio Events (parameter overrides only; time-bound, additive)
  let snowPeak = 0;
  let activeAudioEvents: any[] = [];
  if (params.audioEnabled && params.audioEventEnable && audioFeatures) {
    const dispatch = audioEventDispatch(eng, params, audioFeatures, eventFrame);
    snowPeak = dispatch.snowPeak;
    activeAudioEvents = dispatch.events || [];
    const overrides = dispatch.overrides;
    if (overrides && Object.keys(overrides).length > 0) {
      const next: GlitchParams = { ...params };
      for (const [k, v] of Object.entries(overrides)) {
        if (typeof v === 'number') {
          const cur = (next as any)[k];
          const base = Number.isFinite(cur) ? cur : 0;
          (next as any)[k] = base + v;
        } else if (typeof v === 'boolean') {
          const cur = (next as any)[k];
          (next as any)[k] = !!cur || v;
        } else if (typeof v === 'string') {
          (next as any)[k] = v;
        }
      }
      params = next;
    }
  }

  // 3. Input Processing
  // Effects operate on canvases only. The source is a CanvasImageSource supplied
  // by the renderer; DO NOT create media elements here. DO NOT load files here.
  inCtx.clearRect(0, 0, width, height);
  if (params.holdMode) {
    const timeSinceInject = tGlobal - S.lastInjectTime;
    if (!S.isInjecting && timeSinceInject > params.injectIntervalSec) {
      S.isInjecting = true;
      S.lastInjectTime = tGlobal;
      S.injectFrameCount = 0;
    }

    if (S.isInjecting) {
      B.hold.getContext('2d')!.drawImage(source, 0, 0, width, height);
      inCtx.drawImage(source, 0, 0, width, height);
      S.injectFrameCount++;
      if (S.injectFrameCount >= params.injectFrames) S.isInjecting = false;
    } else {
      inCtx.drawImage(B.hold, 0, 0, width, height);
    }
  } else {
    inCtx.drawImage(source, 0, 0, width, height);
  }

  // 4. Mosh Pipeline
  let moshedSource: CanvasImageSource = B.input;
  if (params.moshEnabled) {
    if (params.moshMode === 'webgl') {
      moshedSource = applyMotionSculptureWebGL(params, width, height, tGlobal * params.timeScaleMosh, B.input);
      dbg.pipeline = 'webgl-mosh';
    } else {
      S.frameCounter++;
      const isIFrame = S.frameCounter === 1 || (params.iframeInterval > 0 && S.frameCounter % params.iframeInterval === 0);

      if (isIFrame) {
        applyIFrameDestructionS(eng, moshCtx, params.iframeBloom, params.iframeSoftReset, width, height);
      } else {
        const tMosh = tGlobal * params.timeScaleMosh;
        if ((params as any).mvAbuse) {
          const bs = Math.max(8, (params as any).mvBlockSize || 32);
          const rad = Math.max(0, (params as any).mvSearchRadius || 2);
          applyMotionVectorAbuseS(eng, swapCtx, width, height, bs, rad);
        } else {
          applyMotionVectorS(eng, swapCtx, params, width, height, tMosh);
        }
        applyFeedbackS(eng, moshCtx, params.feedback, width, height);

        if (params.blockList > 0) {
          const tBlocks = Math.floor(tGlobal * 12) * params.timeScaleBlocks;
          applyMacroblockCorruptionS(eng, moshCtx, params, width, height, tBlocks);
        }

        moshCtx.save();
        moshCtx.globalAlpha = 0.05;
        moshCtx.globalCompositeOperation = 'difference';
        moshCtx.drawImage(B.input, 0, 0, width, height);
        moshCtx.restore();
      }

      // Capture frame history at configurable interval (default: every frame)
      const captureInterval = params.historyCaptureInterval ?? 1;
      if (S.frameCounter % captureInterval === 0) {
        const snapshot = document.createElement('canvas');
        snapshot.width = width;
        snapshot.height = height;
        snapshot.getContext('2d')?.drawImage(B.mosh, 0, 0, width, height);
        S.historyFrames.push(snapshot);
        if (S.historyFrames.length > MAX_HISTORY) S.historyFrames.shift();
      }
      moshedSource = B.mosh;
    }
  } else {
    S.frameCounter = 0;
    const needsHistory = (
      (params.temporalEcho && params.temporalEcho > 0) ||
      (params.timeSmear && params.timeSmear > 0) ||
      (params.temporalDisplace && params.temporalDisplace > 0) ||
      (params.reverseBurst && params.reverseBurst > 0) ||
      (params.stutterLock && params.stutterLock > 0) ||
      (params.partialReplace && params.partialReplace > 0) ||
      (params.audioEnabled && params.audioEventEnable)
    );
    if (!needsHistory) {
      S.historyFrames.length = 0;
    }
  }

  // 5. Destruction Pipeline
  compCtx.clearRect(0, 0, width, height);
  compCtx.drawImage(moshedSource, 0, 0, width, height);

  if (params.pixelation > 0) {
    const t = Math.max(0, Math.min(1, params.pixelation / 20));
    const f = Math.max(0.02, 1 - Math.pow(t, 0.65));
    const w = Math.floor(width * f);
    const h = Math.floor(height * f);
    swapCtx.save();
    swapCtx.clearRect(0, 0, width, height);
    swapCtx.drawImage(B.compose, 0, 0, w, h);
    compCtx.imageSmoothingEnabled = false;
    compCtx.clearRect(0, 0, width, height);
    compCtx.drawImage(B.swap, 0, 0, w, h, 0, 0, width, height);
    compCtx.imageSmoothingEnabled = true;
    swapCtx.restore();
  }

  if (params.melt > 0) applyMeltS(eng, compCtx, swapCtx, params, width, height, tGlobal);
  if (params.shred > 0) applyShredS(eng, compCtx, swapCtx, params.shred, width, height, Math.floor(tGlobal * 12));
  if (params.scatter > 0) applyScatterS(eng, compCtx, B.compose, params, width, height, Math.floor(tGlobal * 12));

  // 6. Compression Pipeline (Async)
  const compressedSource = await applyCompressionGlitch(
    B.compose, 
    B.jpeg, 
    B.swap, 
    params, 
    tGlobal, 
    width, 
    height
  );

  // 7. Post Processing
  applyPostProcessing(ctx, compressedSource, params, width, height, tGlobal);

  // 7.1. Shake (optional)
  if (params.shake > 0) {
    const amp = Math.max(0, Math.min(100, params.shake)) / 100;
    const dx = Math.sin(tGlobal * 40.0) * (width * 0.02 * amp);
    const dy = Math.cos(tGlobal * 33.0) * (height * 0.02 * amp);
    swapCtx.save();
    swapCtx.clearRect(0, 0, width, height);
    swapCtx.drawImage(ctx.canvas, 0, 0, width, height);
    ctx.save();
    ctx.clearRect(0, 0, width, height);
    for (const ox of [dx, dx - width, dx + width]) {
      for (const oy of [dy, dy - height, dy + height]) {
        ctx.drawImage(swapCtx.canvas, ox, oy, width, height);
      }
    }
    ctx.restore();
    swapCtx.restore();
  }

  // 7.2. Analog Phase Slip (optional)
  applyAnalogPhaseSlip(ctx, swapCtx, params, width, height, tGlobal, playing);

  // 7.2.1. Vertical Sync Collapse (optional)
  applyVerticalSyncCollapse(ctx, swapCtx, params, width, height, playing);

  // 7.2.2. VHS Tracking Noise Band (optional)
  applyVhsTrackingNoiseBand(ctx, swapCtx, params, width, height, tGlobal, playing);

  // 7.2.3. Chroma Drift / Delay (optional)
  applyChromaDrift(ctx, params, width, height, tGlobal, playing);

  // 7.2.4. Slice / Stripe Displacement (optional)
  applySliceStripe(ctx, swapCtx, params, width, height, playing);

  // 7.3. PROFESSIONAL GLITCH EFFECTS (Pixel-level operations)
  // Pixel Sorting - professional glitch aesthetic
  if (params.pixelSort && params.pixelSort > 0) {
    applyPixelSort(
      ctx,
      params.pixelSort,
      width,
      height,
      Math.floor(tGlobal * 100),
      params.pixelSortMode || 'brightness'
    );
  }
  
  // Advanced Channel Separation - chromatic displacement
  if (params.channelSep && params.channelSep > 0) {
    applyChannelSeparation(
      ctx,
      ctx.canvas,
      params.channelSepX || 10,
      params.channelSepY || 0,
      params.channelSep
    );
  }

  // 7.4. PHASE 1 CORE EFFECTS

  // Audio Events Layer (trigger-based; frame hijack)
  let audioEventHijack = false;
  if (params.audioEnabled && params.audioEventEnable && activeAudioEvents.length > 0) {
    audioEventHijack = applyAudioEventHijack(eng, ctx, activeAudioEvents, width, height, eventFrame);
  }

  // 7.4.1. No-Signal Snow Burst (event)
  let snowHijack = false;
  if (params.snowBurstEnabled) {
    let peak = snowPeak;
    if (peak === 0 && params.audioEnabled && audioFeatures) {
      peak = Math.max(audioFeatures.transient, audioFeatures.beat);
    }
    snowHijack = applySnowBurst(eng, ctx, params, width, height, dtSec, peak);
  }
  
  // 7.5. TEMPORAL EFFECTS LAYER (Time-based glitches)
  // Check for frame-hijacking effects first (reverse burst, stutter lock)
  let temporalHijack = audioEventHijack || snowHijack; // events take priority
  
  if (params.reverseBurst && params.reverseBurst > 0) {
    temporalHijack = applyReverseBurst(
      eng,
      ctx,
      params.reverseBurst,
      params.reverseBurstDuration || 10,
      width,
      height,
      Math.floor(tGlobal * 100)
    );
  }
  
  if (!temporalHijack && params.stutterLock && params.stutterLock > 0) {
    temporalHijack = applyStutterLock(
      eng,
      ctx,
      params.stutterLock,
      params.stutterLockMin || 2,
      params.stutterLockMax || 10,
      width,
      height,
      Math.floor(tGlobal * 100)
    );
  }
  
  // Apply non-hijacking temporal effects (if not hijacked)
  if (!temporalHijack) {
    // Partial Frame Replacement (CORE: Temporal collage)
    if (params.partialReplace && params.partialReplace > 0) {
      const chaosSeed = params.chaosAmount 
        ? getChaosModulatedSeed(params.seed, params.chaosAmount, params.chaosEvolve || false, S.frameCounter)
        : params.seed;
      
      applyPartialFrameReplace(
        eng,
        ctx,
        swapCtx,
        params.partialReplace,
        params.partialReplacePattern || 'random',
        params.partialReplaceOffset || 10,
        width,
        height,
        Math.floor(chaosSeed + tGlobal * 100)
      );
    }
    
    // Temporal displacement
    if (params.temporalDisplace && params.temporalDisplace > 0) {
      applyTemporalDisplacement(
        eng,
        ctx,
        swapCtx,
        params.temporalDisplace,
        params.temporalDisplaceRegions || 8,
        params.temporalDisplaceOffset || 15,
        width,
        height,
        Math.floor(tGlobal * 100)
      );
    }
    
    // Time smear
    if (params.timeSmear && params.timeSmear > 0) {
      applyTimeSmear(
        eng,
        ctx,
        params.timeSmear,
        params.timeSmearFrames || 5,
        params.timeSmearNonLinear || 50,
        width,
        height,
        Math.floor(tGlobal * 100)
      );
    }
    
    // Temporal echo
    if (params.temporalEcho && params.temporalEcho > 0) {
      applyTemporalEcho(
        eng,
        ctx,
        params.temporalEcho,
        params.temporalEchoDecay || 50,
        params.temporalEchoOffset || 10,
        width,
        height,
        Math.floor(tGlobal * 100)
      );
    }
  }
  
  // Enforce temporal safety (prevent unbounded memory growth)
  enforceTemporalSafety(eng);

  // 8. Final WebGL Layer
  if (params.shaderMoshEnabled) {
    if (!S.prevShaderMoshEnabled) webglMoshService.clear();
    S.prevShaderMoshEnabled = true;
    try {
      const glCanvas = webglMoshService.render(ctx.canvas, params, tGlobal * params.timeScaleDisp);
      if (glCanvas && glCanvas.width > 0 && glCanvas.height > 0) {
        ctx.save();
        ctx.globalCompositeOperation = 'copy';
        ctx.drawImage(glCanvas, 0, 0, width, height);
        ctx.restore();
        dbg.overlayOk = true;
      }
    } catch (e) {
      // Guard against GPU failures – skip overlay this frame
      dbg.overlayOk = false;
    }
  } else {
    S.prevShaderMoshEnabled = false;
  }

  // 8.5. Optional Strict Effects Layer (post-processing only)
  const strictFxEnabled = !!params.strictEffectsEnabled || (typeof window !== 'undefined' && (window as any).__ERRORHEAD_STRICT_FX__ === true);
  if (strictFxEnabled) {
    try {
      const sourceType = (source instanceof HTMLVideoElement) ? 'video' : 'image';
      setEffectStack(buildEffectsFromParams(params));
      await applyEffectStack(ctx, { width, height, time: tGlobal, sourceType });
    } catch (e) {
      // Non-fatal: strict layer must never break base rendering
      try { console.warn('[Effects] strict layer failed; continuing', e); } catch {}
    }
  }

  // 8.7. History capture for temporal effects (when not already captured in 2D mosh path)
  if (!params.moshEnabled || params.moshMode === 'webgl') {
    const captureInterval = params.historyCaptureInterval ?? 1;
    if (captureInterval > 0 && (eventFrame % captureInterval === 0)) {
      const snapshot = document.createElement('canvas');
      snapshot.width = width;
      snapshot.height = height;
      snapshot.getContext('2d')?.drawImage(ctx.canvas, 0, 0, width, height);
      S.historyFrames.push(snapshot);
      if (S.historyFrames.length > MAX_HISTORY) S.historyFrames.shift();
    }
  }

  // 9. Debug Overlay (temporary)
  if (DEBUG_OVERLAY) {
    try {
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      const comp = getCompressionDebug();
      const gl = getWebGLMoshDebug();
      const lines = [
        `DBG frame: ${dbg.pipeline}${params.shaderMoshEnabled ? '+shader' : ''}`,
        `media:${dbg.media} src:${dbg.mw}x${dbg.mh} out:${width}x${height}`,
        `gl2 upload:${gl.lastUploadOk ? 'ok' : 'fail'} ${gl.width}x${gl.height} err:${gl.lastError} overlay:${dbg.overlayOk ? 'on' : 'off'}`,
        `jpeg worker: ${comp.hasBitmap ? 'bitmap' : 'passthru'} inflight:${comp.inFlight ? 'yes' : 'no'}`,
      ];
      const pad = 6; const lh = 12; const boxW = 280; const boxH = pad * 2 + lines.length * lh;
      ctx.fillRect(8, 8, boxW, boxH);
      ctx.font = '10px monospace';
      ctx.fillStyle = '#00FFFF';
      for (let i = 0; i < lines.length; i++) ctx.fillText(lines[i], 12, 12 + (i + 1) * lh - 4);
      ctx.restore();
    } catch (e) {}
  }
};


