/**
 * ERRORHEAD — Core Effects (Phase 1)
 * 
 * Missing essential effects that make ERRORHEAD best-in-class:
 * - Partial Frame Replacement (temporal collage)
 * - Audio-Triggered Frame Events (discrete event system)
 * - Enhanced deterministic chaos
 */

import type { EngineContext } from '../../engine/engineTypes';
import { randInt } from '../glitchEngine/state';

// ═══════════════════════════════════════════════════════════════════════════
// PARTIAL FRAME REPLACEMENT (Temporal Collage)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Replaces regions of current frame with historical frame data
 * KEY DATAMOSH TECHNIQUE: Temporal collage where different areas show different times
 * 
 * @param eng - Engine context
 * @param ctx - Target canvas context
 * @param swapCtx - Swap buffer context
 * @param intensity - Replacement intensity (0-100)
 * @param pattern - Replacement pattern type
 * @param frameOffset - Frames back to source from (1-60)
 * @param width - Canvas width
 * @param height - Canvas height
 * @param seed - Random seed
 */
export const applyPartialFrameReplace = (
  eng: EngineContext,
  ctx: CanvasRenderingContext2D,
  swapCtx: CanvasRenderingContext2D,
  intensity: number,
  pattern: 'random' | 'bands' | 'blocks' | 'gradient',
  frameOffset: number,
  width: number,
  height: number,
  seed: number
) => {
  if (intensity <= 0 || eng.state.historyFrames.length === 0) return;
  
  const int = Math.max(0, Math.min(100, intensity)) / 100;
  const offset = Math.floor(Math.max(1, Math.min(60, frameOffset)));
  
  // Guard: Need sufficient history
  if (eng.state.historyFrames.length < offset) return;
  
  // Get historical frame
  const historyIdx = eng.state.historyFrames.length - offset;
  const oldFrame = eng.state.historyFrames[historyIdx];
  
  if (!oldFrame) return;
  
  // Copy current to swap
  swapCtx.clearRect(0, 0, width, height);
  swapCtx.drawImage(ctx.canvas, 0, 0, width, height);
  
  ctx.save();
  
  switch (pattern) {
    case 'random':
      applyRandomReplace(ctx, oldFrame, int, width, height, seed);
      break;
    case 'bands':
      applyBandReplace(ctx, oldFrame, swapCtx.canvas, int, width, height, seed);
      break;
    case 'blocks':
      applyBlockReplace(ctx, oldFrame, int, width, height, seed);
      break;
    case 'gradient':
      applyGradientReplace(ctx, oldFrame, swapCtx.canvas, int, width, height);
      break;
  }
  
  ctx.restore();
};

/**
 * Random region replacement
 */
const applyRandomReplace = (
  ctx: CanvasRenderingContext2D,
  oldFrame: HTMLCanvasElement,
  intensity: number,
  width: number,
  height: number,
  seed: number
) => {
  const regionCount = Math.floor(intensity * 20) + 5;
  
  for (let i = 0; i < regionCount; i++) {
    const s = seed + i * 137;
    
    // Random rectangle
    const rw = randInt(width * 0.05, width * 0.3, s);
    const rh = randInt(height * 0.05, height * 0.3, s + 1);
    const rx = randInt(0, width - rw, s + 2);
    const ry = randInt(0, height - rh, s + 3);
    
    ctx.globalAlpha = 0.7 + (randInt(0, 30, s + 4) / 100);
    ctx.drawImage(oldFrame, rx, ry, rw, rh, rx, ry, rw, rh);
  }
};

/**
 * Horizontal band replacement
 */
const applyBandReplace = (
  ctx: CanvasRenderingContext2D,
  oldFrame: HTMLCanvasElement,
  currentFrame: HTMLCanvasElement,
  intensity: number,
  width: number,
  height: number,
  seed: number
) => {
  const bandCount = Math.floor(intensity * 15) + 3;
  const bandHeight = height / bandCount;
  
  for (let i = 0; i < bandCount; i++) {
    const y = i * bandHeight;
    
    // Alternating pattern with randomness
    const useOld = (i % 2 === 0) || (randInt(0, 100, seed + i) < intensity * 50);
    
    if (useOld) {
      ctx.globalAlpha = 0.8 + (randInt(0, 20, seed + i) / 100);
      ctx.drawImage(oldFrame, 0, y, width, bandHeight, 0, y, width, bandHeight);
    }
  }
};

/**
 * Block-based replacement (macroblock style)
 */
const applyBlockReplace = (
  ctx: CanvasRenderingContext2D,
  oldFrame: HTMLCanvasElement,
  intensity: number,
  width: number,
  height: number,
  seed: number
) => {
  const blockSize = 32;
  const cols = Math.ceil(width / blockSize);
  const rows = Math.ceil(height / blockSize);
  const totalBlocks = cols * rows;
  const replaceCount = Math.floor(totalBlocks * intensity * 0.4);
  
  for (let i = 0; i < replaceCount; i++) {
    const s = seed + i * 97;
    const col = randInt(0, cols - 1, s);
    const row = randInt(0, rows - 1, s + 1);
    
    const bx = col * blockSize;
    const by = row * blockSize;
    
    ctx.globalAlpha = 0.85 + (randInt(0, 15, s + 2) / 100);
    ctx.drawImage(oldFrame, bx, by, blockSize, blockSize, bx, by, blockSize, blockSize);
  }
};

/**
 * Gradient-based replacement (smooth blend)
 */
const applyGradientReplace = (
  ctx: CanvasRenderingContext2D,
  oldFrame: HTMLCanvasElement,
  currentFrame: HTMLCanvasElement,
  intensity: number,
  width: number,
  height: number
) => {
  // Create gradient mask
  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, 'rgba(255,255,255,0)');
  gradient.addColorStop(intensity, 'rgba(255,255,255,1)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  
  // Draw old frame
  ctx.globalAlpha = 1.0;
  ctx.drawImage(oldFrame, 0, 0, width, height);
  
  // Mask with gradient
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Composite over current
  ctx.globalCompositeOperation = 'source-over';
};

// ═══════════════════════════════════════════════════════════════════════════
// AUDIO-TRIGGERED FRAME EVENTS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Audio event state management
 */
interface AudioEventState {
  lastTriggerTime: number;
  cooldownFrames: number;
  activeEvent: 'none' | 'inject' | 'reverse' | 'freeze' | 'swap';
  eventFramesRemaining: number;
  frozenFrame: HTMLCanvasElement | null;
}

/**
 * Initialize audio event state
 */
export const initAudioEventState = (): AudioEventState => ({
  lastTriggerTime: 0,
  cooldownFrames: 0,
  activeEvent: 'none',
  eventFramesRemaining: 0,
  frozenFrame: null
});

/**
 * Audio-triggered frame events
 * CRITICAL: Discrete events on audio peaks, not continuous modulation
 * 
 * @param eng - Engine context
 * @param ctx - Target canvas context
 * @param audioFeatures - Audio analysis features
 * @param threshold - Trigger sensitivity (0-100)
 * @param action - Action to trigger
 * @param duration - Event duration in frames
 * @param width - Canvas width
 * @param height - Canvas height
 * @param frameCount - Current frame number
 * @returns true if event is hijacking the frame
 */
export const applyAudioFrameEvents = (
  eng: EngineContext,
  ctx: CanvasRenderingContext2D,
  audioFeatures: {
    transient: number;
    beat: number;
    envelope: number;
  },
  threshold: number,
  action: 'inject' | 'reverse' | 'freeze' | 'swap',
  duration: number,
  width: number,
  height: number,
  frameCount: number
): boolean => {
  // Initialize state if needed
  if (!(eng.state as any).audioEvents) {
    (eng.state as any).audioEvents = initAudioEventState();
  }
  
  const eventState: AudioEventState = (eng.state as any).audioEvents;
  const thresh = Math.max(0, Math.min(100, threshold)) / 100;
  
  // Check if event is currently active
  if (eventState.activeEvent !== 'none' && eventState.eventFramesRemaining > 0) {
    eventState.eventFramesRemaining--;
    
    // Execute active event
    switch (eventState.activeEvent) {
      case 'freeze':
        if (eventState.frozenFrame) {
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(eventState.frozenFrame, 0, 0, width, height);
          return true; // Hijacking frame
        }
        break;
        
      case 'reverse':
        // Play backward through history
        const reverseIdx = Math.floor(
          eng.state.historyFrames.length - 1 - 
          (duration - eventState.eventFramesRemaining)
        );
        if (reverseIdx >= 0 && reverseIdx < eng.state.historyFrames.length) {
          const frame = eng.state.historyFrames[reverseIdx];
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(frame, 0, 0, width, height);
          return true; // Hijacking frame
        }
        break;
        
      case 'swap':
        // Swap with random history frame
        if (eng.state.historyFrames.length > 0) {
          const swapIdx = Math.floor(Math.random() * eng.state.historyFrames.length);
          const frame = eng.state.historyFrames[swapIdx];
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(frame, 0, 0, width, height);
          return true; // Hijacking frame
        }
        break;
        
      case 'inject':
        // Inject event doesn't hijack, just triggers new frame
        // This is handled by hold/inject system
        break;
    }
    
    // End event if duration complete
    if (eventState.eventFramesRemaining <= 0) {
      eventState.activeEvent = 'none';
      eventState.frozenFrame = null;
    }
    
    return eventState.activeEvent !== 'inject';
  }
  
  // Check for new trigger (with cooldown)
  if (eventState.cooldownFrames > 0) {
    eventState.cooldownFrames--;
    return false;
  }
  
  // Detect audio trigger
  const signal = action === 'inject' ? audioFeatures.beat : audioFeatures.transient;
  
  if (signal > thresh) {
    // Trigger new event
    eventState.activeEvent = action;
    eventState.eventFramesRemaining = Math.floor(duration);
    eventState.lastTriggerTime = frameCount;
    eventState.cooldownFrames = Math.floor(duration * 0.5); // Cooldown = half duration
    
    // Capture frame if needed
    if (action === 'freeze') {
      const frozen = document.createElement('canvas');
      frozen.width = width;
      frozen.height = height;
      const frozenCtx = frozen.getContext('2d');
      if (frozenCtx) {
        frozenCtx.drawImage(ctx.canvas, 0, 0, width, height);
        eventState.frozenFrame = frozen;
      }
    }
    
    return action !== 'inject'; // inject doesn't hijack
  }
  
  return false;
};

/**
 * Reset audio event state
 */
export const resetAudioEvents = (eng: EngineContext) => {
  if ((eng.state as any).audioEvents) {
    (eng.state as any).audioEvents.activeEvent = 'none';
    (eng.state as any).audioEvents.eventFramesRemaining = 0;
    (eng.state as any).audioEvents.frozenFrame = null;
    (eng.state as any).audioEvents.cooldownFrames = 0;
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// DETERMINISTIC CHAOS ENGINE
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Enhanced chaos engine with controllable unpredictability
 * 
 * @param baseSeed - Base seed value (0-100)
 * @param chaosAmount - Amount of controlled chaos (0-100)
 * @param evolve - Whether seed evolves over time
 * @param frameCount - Current frame number
 * @returns Modified seed value
 */
export const getChaosModulatedSeed = (
  baseSeed: number,
  chaosAmount: number,
  evolve: boolean,
  frameCount: number
): number => {
  const base = Math.max(0, Math.min(100, baseSeed));
  const chaos = Math.max(0, Math.min(100, chaosAmount)) / 100;
  
  if (chaos === 0) return base;
  
  // Add controlled chaos to seed
  const chaosDelta = Math.sin(frameCount * 0.1 + base) * chaos * 50;
  let seed = base + chaosDelta;
  
  // Evolve seed over time if enabled
  if (evolve) {
    const evolution = (frameCount * 0.01) % 100;
    seed = (seed + evolution) % 100;
  }
  
  return Math.max(0, Math.min(100, seed));
};
