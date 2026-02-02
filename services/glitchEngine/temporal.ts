/**
 * ERRORHEAD — TEMPORAL GLITCH EFFECTS
 * 
 * Time-based effects that operate on frame history, not just spatial pixels.
 * These effects make TIME ITSELF unstable and expressive.
 */

import type { EngineContext } from '../../engine/engineTypes';
import { MAX_HISTORY } from './state';
import { randInt, noise } from './state';

/**
 * TEMPORAL ECHO
 * Past frames reappear with decay, creating ghosting trails
 * 
 * @param eng - Engine context
 * @param ctx - Target canvas context
 * @param intensity - Echo strength (0-100)
 * @param decay - Echo decay rate (0-100, higher = faster fade)
 * @param frameOffset - Frames back to echo from (1-60)
 * @param width - Canvas width
 * @param height - Canvas height
 * @param t - Current time
 */
export const applyTemporalEcho = (
  eng: EngineContext,
  ctx: CanvasRenderingContext2D,
  intensity: number,
  decay: number,
  frameOffset: number,
  width: number,
  height: number,
  t: number
) => {
  if (intensity <= 0 || eng.state.historyFrames.length === 0) return;
  
  const int = Math.max(0, Math.min(100, intensity)) / 100;
  const dec = Math.max(0, Math.min(100, decay)) / 100;
  const offset = Math.floor(Math.max(1, Math.min(60, frameOffset)));
  
  // Guard: Need sufficient history
  if (eng.state.historyFrames.length < offset) return;
  
  // Get echo frame from history
  const echoIdx = eng.state.historyFrames.length - offset;
  const echoFrame = eng.state.historyFrames[echoIdx];
  
  if (!echoFrame) return;
  
  // Calculate echo alpha based on decay
  const echoAlpha = int * (1 - dec * 0.5);
  
  // Composite echo frame
  ctx.save();
  ctx.globalAlpha = echoAlpha;
  ctx.globalCompositeOperation = 'screen'; // Additive ghosting
  ctx.drawImage(echoFrame, 0, 0, width, height);
  ctx.restore();
};

/**
 * TIME SMEAR
 * Non-linear blending of multiple past frames
 * Creates temporal motion blur and time-slice effects
 * 
 * @param eng - Engine context
 * @param ctx - Target canvas context
 * @param intensity - Smear strength (0-100)
 * @param frameCount - Number of frames to blend (2-10)
 * @param nonLinear - Non-linear weight distribution (0-100)
 * @param width - Canvas width
 * @param height - Canvas height
 * @param t - Current time
 */
export const applyTimeSmear = (
  eng: EngineContext,
  ctx: CanvasRenderingContext2D,
  intensity: number,
  frameCount: number,
  nonLinear: number,
  width: number,
  height: number,
  t: number
) => {
  if (intensity <= 0 || eng.state.historyFrames.length < 2) return;
  
  const int = Math.max(0, Math.min(100, intensity)) / 100;
  const count = Math.floor(Math.max(2, Math.min(10, frameCount)));
  const nonLin = Math.max(0, Math.min(100, nonLinear)) / 100;
  
  // Guard: Need sufficient history
  const available = Math.min(count, eng.state.historyFrames.length);
  if (available < 2) return;
  
  // Calculate weights (exponential decay for non-linear)
  const weights: number[] = [];
  let totalWeight = 0;
  
  for (let i = 0; i < available; i++) {
    // Linear: equal weights, Non-linear: exponential decay
    const linear = 1.0;
    const exponential = Math.exp(-i * 0.5);
    const weight = linear * (1 - nonLin) + exponential * nonLin;
    weights.push(weight);
    totalWeight += weight;
  }
  
  // Normalize weights
  for (let i = 0; i < weights.length; i++) {
    weights[i] /= totalWeight;
  }
  
  // Blend frames
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  
  for (let i = 0; i < available; i++) {
    const frameIdx = eng.state.historyFrames.length - 1 - i;
    const frame = eng.state.historyFrames[frameIdx];
    
    if (!frame) continue;
    
    const alpha = weights[i] * int;
    ctx.globalAlpha = alpha;
    ctx.drawImage(frame, 0, 0, width, height);
  }
  
  ctx.restore();
};

/**
 * REVERSE BURST
 * Short backward loops that create temporal rewind effects
 * 
 * @param eng - Engine context
 * @param ctx - Target canvas context
 * @param probability - Burst trigger probability (0-100)
 * @param duration - Burst duration in frames (2-30)
 * @param width - Canvas width
 * @param height - Canvas height
 * @param t - Current time
 */
export const applyReverseBurst = (
  eng: EngineContext,
  ctx: CanvasRenderingContext2D,
  probability: number,
  duration: number,
  width: number,
  height: number,
  t: number
): boolean => {
  if (probability <= 0 || eng.state.historyFrames.length < 3) return false;
  
  const prob = Math.max(0, Math.min(100, probability));
  const dur = Math.floor(Math.max(2, Math.min(30, duration)));
  
  // Initialize burst state if not exists
  if (!(eng.state as any).reverseBurst) {
    (eng.state as any).reverseBurst = {
      active: false,
      frameIndex: 0,
      totalFrames: 0,
      startHistorySize: 0
    };
  }
  
  const burst = (eng.state as any).reverseBurst;
  
  // Check if burst is active
  if (burst.active) {
    // Play backward through history
    const historyIdx = burst.startHistorySize - 1 - burst.frameIndex;
    
    if (historyIdx >= 0 && historyIdx < eng.state.historyFrames.length) {
      const frame = eng.state.historyFrames[historyIdx];
      if (frame) {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(frame, 0, 0, width, height);
      }
    }
    
    burst.frameIndex++;
    
    // End burst when duration reached
    if (burst.frameIndex >= burst.totalFrames) {
      burst.active = false;
      burst.frameIndex = 0;
    }
    
    return true; // Burst is hijacking the frame
  }
  
  // Randomly trigger new burst
  if (randInt(0, 100, t) < prob && eng.state.historyFrames.length >= dur) {
    burst.active = true;
    burst.frameIndex = 0;
    burst.totalFrames = Math.min(dur, eng.state.historyFrames.length);
    burst.startHistorySize = eng.state.historyFrames.length;
    return true;
  }
  
  return false;
};

/**
 * STUTTER LOCK
 * Micro-freezes that hold frames for irregular durations
 * Creates rhythmic temporal glitching
 * 
 * @param eng - Engine context
 * @param ctx - Target canvas context
 * @param probability - Stutter trigger probability (0-100)
 * @param minDuration - Minimum freeze duration in frames (1-10)
 * @param maxDuration - Maximum freeze duration in frames (2-30)
 * @param width - Canvas width
 * @param height - Canvas height
 * @param t - Current time
 */
export const applyStutterLock = (
  eng: EngineContext,
  ctx: CanvasRenderingContext2D,
  probability: number,
  minDuration: number,
  maxDuration: number,
  width: number,
  height: number,
  t: number
): boolean => {
  if (probability <= 0) return false;
  
  const prob = Math.max(0, Math.min(100, probability));
  const minDur = Math.floor(Math.max(1, Math.min(10, minDuration)));
  const maxDur = Math.floor(Math.max(minDur, Math.min(30, maxDuration)));
  
  // Initialize stutter state if not exists
  if (!(eng.state as any).stutterLock) {
    (eng.state as any).stutterLock = {
      active: false,
      frameIndex: 0,
      totalFrames: 0,
      frozenFrame: null as HTMLCanvasElement | null
    };
  }
  
  const stutter = (eng.state as any).stutterLock;
  
  // Check if stutter is active
  if (stutter.active && stutter.frozenFrame) {
    // Hold the frozen frame
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(stutter.frozenFrame, 0, 0, width, height);
    
    stutter.frameIndex++;
    
    // End stutter when duration reached
    if (stutter.frameIndex >= stutter.totalFrames) {
      stutter.active = false;
      stutter.frameIndex = 0;
      stutter.frozenFrame = null;
    }
    
    return true; // Stutter is hijacking the frame
  }
  
  // Randomly trigger new stutter
  if (randInt(0, 100, t) < prob) {
    // Capture current frame
    const frozenCanvas = document.createElement('canvas');
    frozenCanvas.width = width;
    frozenCanvas.height = height;
    const frozenCtx = frozenCanvas.getContext('2d');
    
    if (frozenCtx) {
      frozenCtx.drawImage(ctx.canvas, 0, 0, width, height);
      
      stutter.active = true;
      stutter.frameIndex = 0;
      stutter.totalFrames = randInt(minDur, maxDur, t + 123);
      stutter.frozenFrame = frozenCanvas;
      
      return true;
    }
  }
  
  return false;
};

/**
 * TEMPORAL DISPLACEMENT
 * Displaces regions using historical frame data
 * Creates time-torn effects where different areas show different time slices
 * 
 * @param eng - Engine context
 * @param ctx - Target canvas context
 * @param swapCtx - Swap buffer context
 * @param intensity - Displacement strength (0-100)
 * @param regionCount - Number of displaced regions (1-20)
 * @param maxFrameOffset - Maximum frame offset (1-30)
 * @param width - Canvas width
 * @param height - Canvas height
 * @param t - Current time
 */
export const applyTemporalDisplacement = (
  eng: EngineContext,
  ctx: CanvasRenderingContext2D,
  swapCtx: CanvasRenderingContext2D,
  intensity: number,
  regionCount: number,
  maxFrameOffset: number,
  width: number,
  height: number,
  t: number
) => {
  if (intensity <= 0 || eng.state.historyFrames.length < 2) return;
  
  const int = Math.max(0, Math.min(100, intensity)) / 100;
  const regions = Math.floor(Math.max(1, Math.min(20, regionCount)));
  const maxOffset = Math.floor(Math.max(1, Math.min(30, maxFrameOffset)));
  
  // Guard: Need sufficient history
  const availableHistory = Math.min(maxOffset, eng.state.historyFrames.length);
  if (availableHistory < 2) return;
  
  // Copy current frame to swap
  swapCtx.clearRect(0, 0, width, height);
  swapCtx.drawImage(ctx.canvas, 0, 0, width, height);
  
  // Apply random temporal displacements
  for (let i = 0; i < regions; i++) {
    const seed = t + i * 137;
    
    // Random region
    const rx = randInt(0, width - 1, seed);
    const ry = randInt(0, height - 1, seed + 1);
    const rw = randInt(width * 0.05, width * 0.3, seed + 2);
    const rh = randInt(height * 0.05, height * 0.3, seed + 3);
    
    // Random frame offset
    const frameOffset = randInt(1, availableHistory, seed + 4);
    const historyIdx = eng.state.historyFrames.length - frameOffset;
    const oldFrame = eng.state.historyFrames[historyIdx];
    
    if (!oldFrame) continue;
    
    // Apply displacement with intensity
    ctx.save();
    ctx.globalAlpha = int;
    ctx.drawImage(
      oldFrame,
      rx, ry, rw, rh,
      rx, ry, rw, rh
    );
    ctx.restore();
  }
};

/**
 * RESET TEMPORAL STATE
 * Clears all temporal effect state
 */
export const resetTemporalEffects = (eng: EngineContext) => {
  if ((eng.state as any).reverseBurst) {
    (eng.state as any).reverseBurst.active = false;
    (eng.state as any).reverseBurst.frameIndex = 0;
  }
  
  if ((eng.state as any).stutterLock) {
    (eng.state as any).stutterLock.active = false;
    (eng.state as any).stutterLock.frameIndex = 0;
    (eng.state as any).stutterLock.frozenFrame = null;
  }
};

/**
 * TEMPORAL SAFETY CHECK
 * Ensures history doesn't grow unbounded
 */
export const enforceTemporalSafety = (eng: EngineContext) => {
  // Enforce maximum history size
  while (eng.state.historyFrames.length > MAX_HISTORY) {
    eng.state.historyFrames.shift();
  }
  
  // Clean up old frozen frames in stutter
  if ((eng.state as any).stutterLock?.frozenFrame && !(eng.state as any).stutterLock.active) {
    (eng.state as any).stutterLock.frozenFrame = null;
  }
};
