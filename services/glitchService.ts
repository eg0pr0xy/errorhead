
import { GlitchParams } from '../types';
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
import { applyMotionSculptureWebGL, resetWebGLMosh, getWebGLMoshDebug } from './glitchEngine/webgl/applyMotionSculptureWebGL';
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
  applyAudioFrameEvents,
  getChaosModulatedSeed,
  resetAudioEvents
} from './glitchEngine/coreEffects';

// Temporary debug overlay toggle: enable by setting window.__ERRORHEAD_DEBUG__ = true in console
const DEBUG_OVERLAY = (typeof window !== 'undefined' && (window as any).__ERRORHEAD_DEBUG__ === true);

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
  engOpt?: EngineContext
) => {
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
  } catch {}
  // 1. Sync Buffer Sizes
  const eng = engOpt ?? getGlobalEngineContext();
  const B = engOpt ? eng.buffers : globalBuffers;
  const S = engOpt ? eng.state : globalState;
  const { inCtx, compCtx, moshCtx, swapCtx } = engOpt ? getContextsFromEng(eng) : getGlobalContexts();
  Object.values(B as any).forEach((c: HTMLCanvasElement) => {
    if (c.width !== width || c.height !== height) {
      c.width = width;
      c.height = height;
    }
  });

  // 2. Audio Modulation Pass — CONTROL VOLTAGE SYSTEM
  let params = { ...baseParams };
  if (params.audioEnabled) {
    const { audioService } = await import('./audioService');
    const features = audioService.getFeatures();
    
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
    
    // Apply modulation to targets (depth controls intensity)
    if (params.audioTargetRgb > 0) {
      const depth = params.audioTargetRgb / 100;
      params.rgbShift = Math.max(0, params.rgbShift + cv * depth * 50);
    }
    
    if (params.audioTargetAmount > 0) {
      const depth = params.audioTargetAmount / 100;
      params.amount = Math.max(0, params.amount + cv * depth * 40);
    }
    
    if (params.audioTargetWarp > 0) {
      const depth = params.audioTargetWarp / 100;
      params.moshWarp = Math.max(0, params.moshWarp + cv * depth * 60);
    }
    
    if (params.audioTargetFeedback && params.audioTargetFeedback > 0) {
      const depth = params.audioTargetFeedback / 100;
      params.feedback = Math.max(0, Math.min(100, params.feedback + cv * depth * 20));
    }
    
    if (params.audioTargetBlocks && params.audioTargetBlocks > 0) {
      const depth = params.audioTargetBlocks / 100;
      params.blockList = Math.max(0, Math.min(100, params.blockList + cv * depth * 60));
    }
    
    if (params.audioTargetMelt && params.audioTargetMelt > 0) {
      const depth = params.audioTargetMelt / 100;
      params.melt = Math.max(0, Math.min(100, params.melt + cv * depth * 50));
    }
    
    if (params.audioTargetShake && params.audioTargetShake > 0) {
      const depth = params.audioTargetShake / 100;
      params.shake = Math.max(0, Math.min(100, params.shake + cv * depth * 80));
    }
    
    if (params.audioTargetNoise && params.audioTargetNoise > 0) {
      const depth = params.audioTargetNoise / 100;
      params.noise = Math.max(0, Math.min(100, params.noise + cv * depth * 60));
    }
    
    // CRT pulse on transients
    if (params.scanlines && features.transient > 0.5) {
       params.scanlineIntensity = Math.min(100, params.scanlineIntensity + features.transient * 30);
    }
  }

  // 3. Input Processing
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
    S.historyFrames.length = 0;
  }

  // 5. Destruction Pipeline
  compCtx.clearRect(0, 0, width, height);
  compCtx.drawImage(moshedSource, 0, 0, width, height);

  if (params.pixelation > 0) {
    const f = Math.max(0.01, 1 - (params.pixelation / 20));
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
  
  // Audio-Triggered Frame Events (CRITICAL: Discrete events, can hijack frame)
  let audioEventHijack = false;
  if (params.audioEnabled && params.audioEventEnable) {
    const { audioService } = await import('./audioService');
    const features = audioService.getFeatures();
    
    audioEventHijack = applyAudioFrameEvents(
      eng,
      ctx,
      features,
      params.audioEventThreshold || 70,
      params.audioEventAction || 'freeze',
      params.audioEventDuration || 10,
      width,
      height,
      S.frameCounter
    );
  }
  
  // 7.5. TEMPORAL EFFECTS LAYER (Time-based glitches)
  // Check for frame-hijacking effects first (reverse burst, stutter lock)
  let temporalHijack = audioEventHijack; // Audio events take priority
  
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
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(glCanvas, 0, 0, width, height);
        dbg.overlayOk = true;
      }
    } catch (e) {
      // Guard against GPU failures – skip overlay this frame
      dbg.overlayOk = false;
    }
  } else {
    S.prevShaderMoshEnabled = false;
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
    } catch {}
  }
};

