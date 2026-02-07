import type { EngineContext } from '../engine/engineTypes';
import type { GlitchParams } from '../types';

export type AudioEventType = 'freeze' | 'reverseBurst' | 'noiseHit' | 'syncKick' | 'swap';

export interface AudioFeatures {
  amplitude: number;
  envelope: number;
  low: number;
  mid: number;
  high: number;
  transient: number;
  beat: number;
}

export interface AudioEvent {
  type: AudioEventType;
  startFrame: number;
  duration: number;
  intensity: number;
  data?: {
    frozenFrame?: HTMLCanvasElement | null;
    swapIndex?: number;
  };
}

interface AudioEventBusState {
  activeAudioEvents: AudioEvent[];
  lastTrigger: Record<AudioEventType, number>;
  prevEnvelope: number;
}

const COOLDOWN: Record<AudioEventType, number> = {
  freeze: 18,
  reverseBurst: 24,
  swap: 18,
  noiseHit: 6,
  syncKick: 6
};

const getState = (eng: EngineContext): AudioEventBusState => {
  if (!(eng.state as any).audioEventBus) {
    (eng.state as any).audioEventBus = {
      activeAudioEvents: [],
      lastTrigger: {
        freeze: -9999,
        reverseBurst: -9999,
        swap: -9999,
        noiseHit: -9999,
        syncKick: -9999
      },
      prevEnvelope: 0
    } as AudioEventBusState;
  }
  return (eng.state as any).audioEventBus as AudioEventBusState;
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export interface AudioEventDispatchResult {
  events: AudioEvent[];
  overrides: Partial<GlitchParams>;
  snowPeak: number;
}

const pushEvent = (state: AudioEventBusState, frameCount: number, type: AudioEventType, duration: number, intensity: number) => {
  const activeSame = state.activeAudioEvents.some(e => e.type === type);
  if (activeSame) return;
  const last = state.lastTrigger[type];
  if ((frameCount - last) < COOLDOWN[type]) return;
  const evt: AudioEvent = { type, startFrame: frameCount, duration, intensity, data: {} };
  state.activeAudioEvents.push(evt);
  state.lastTrigger[type] = frameCount;
  try { console.log(`[AudioEvent] ${type} @${frameCount} (dur:${duration}, i:${intensity.toFixed(2)})`); } catch {}
};

/**
 * Dispatches audio-triggered events and computes additive overrides.
 * Events are time-bound and decay automatically.
 */
export const audioEventDispatch = (
  eng: EngineContext,
  params: GlitchParams,
  features: AudioFeatures,
  frameCount: number
): AudioEventDispatchResult => {
  const state = getState(eng);

  const thresh = clamp((params.audioEventThreshold ?? 70) / 100, 0, 1);
  const baseDur = Math.max(1, Math.floor(params.audioEventDuration ?? 10));

  const peak = features.transient;
  const rms = features.envelope;
  const beat = features.beat;
  const onset = (peak > thresh) && ((rms - state.prevEnvelope) > 0.05);

  const peakHit = peak > thresh;
  const rmsHit = rms > (thresh * 0.7);
  const beatHit = beat > thresh;

  state.prevEnvelope = rms;

  if (peakHit) {
    pushEvent(state, frameCount, 'noiseHit', Math.max(3, Math.floor(baseDur * 0.6)), clamp(peak, 0, 1));
    pushEvent(state, frameCount, 'swap', Math.max(3, Math.floor(baseDur * 0.6)), clamp(peak, 0, 1));
  }
  if (beatHit) {
    pushEvent(state, frameCount, 'syncKick', Math.max(3, Math.floor(baseDur * 0.5)), clamp(beat, 0, 1));
  }
  if (rmsHit && !onset) {
    pushEvent(state, frameCount, 'freeze', baseDur, clamp(rms, 0, 1));
  }
  if (onset) {
    pushEvent(state, frameCount, 'reverseBurst', Math.max(4, Math.floor(baseDur * 0.8)), clamp(peak, 0, 1));
  }

  // Remove expired
  state.activeAudioEvents = state.activeAudioEvents.filter(ev => (frameCount - ev.startFrame) < ev.duration);

  // Build additive overrides from active events
  const overrides: Partial<GlitchParams> = {};
  const addNum = (key: keyof GlitchParams, value: number) => {
    const cur = (overrides as any)[key] ?? 0;
    (overrides as any)[key] = cur + value;
  };

  for (const ev of state.activeAudioEvents) {
    const amp = clamp(ev.intensity, 0, 1);
    if (ev.type === 'noiseHit') {
      addNum('noise', 30 * amp);
      addNum('scanlineIntensity', 20 * amp);
    }
    if (ev.type === 'syncKick') {
      overrides.phaseEnabled = true;
      overrides.vSyncEnabled = true;
      addNum('phaseOffset', 6 * amp);
      addNum('phaseOffsetX', 4 * amp);
      addNum('vSyncBandVariance', 1.2 * amp);
    }
  }

  const snowPeak = peakHit || beatHit ? 1 : 0;

  return { events: state.activeAudioEvents, overrides, snowPeak };
};

/**
 * Applies frame-hijack events (freeze/reverse/swap) using existing buffers.
 * Returns true if the frame was hijacked.
 */
export const applyAudioEventHijack = (
  eng: EngineContext,
  ctx: CanvasRenderingContext2D,
  events: AudioEvent[],
  width: number,
  height: number,
  frameCount: number
): boolean => {
  // Priority: freeze -> reverse -> swap
  const freeze = events.find(e => e.type === 'freeze');
  if (freeze) {
    if (!freeze.data?.frozenFrame) {
      const frozen = document.createElement('canvas');
      frozen.width = width;
      frozen.height = height;
      const fctx = frozen.getContext('2d');
      if (fctx) fctx.drawImage(ctx.canvas, 0, 0, width, height);
      freeze.data = { ...(freeze.data || {}), frozenFrame: frozen };
    }
    if (freeze.data?.frozenFrame) {
      ctx.drawImage(freeze.data.frozenFrame, 0, 0, width, height);
      return true;
    }
  }

  const reverse = events.find(e => e.type === 'reverseBurst');
  if (reverse) {
    const offset = frameCount - reverse.startFrame;
    const idx = eng.state.historyFrames.length - 1 - offset;
    if (idx >= 0 && idx < eng.state.historyFrames.length) {
      const frame = eng.state.historyFrames[idx];
      if (frame) {
        ctx.drawImage(frame, 0, 0, width, height);
        return true;
      }
    }
  }

  const swap = events.find(e => e.type === 'swap');
  if (swap && eng.state.historyFrames.length > 0) {
    if (typeof swap.data?.swapIndex !== 'number') {
      const idx = Math.floor(Math.random() * eng.state.historyFrames.length);
      swap.data = { ...(swap.data || {}), swapIndex: idx };
    }
    const frame = eng.state.historyFrames[swap.data!.swapIndex!];
    if (frame) {
      ctx.drawImage(frame, 0, 0, width, height);
      return true;
    }
  }

  return false;
};
