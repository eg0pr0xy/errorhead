
import { GlitchParams } from '../../../types';
import { buffers, state, randInt } from '../state';

/**
 * Simulates Motion Vector displacement (P-Frames).
 * Calculates how pixels move based on previous frames.
 */
export const applyMotionVector = (
  swapCtx: CanvasRenderingContext2D, 
  params: GlitchParams, 
  width: number, 
  height: number, 
  tMosh: number
) => {
  let refSource: CanvasImageSource = buffers.mosh;

  // 1. Reference Swapping (Ghosting)
  const refSwapProb = Math.max(0, Math.min(100, params.refSwap));
  if (refSwapProb > 0 && state.historyFrames.length > 0) {
    if (randInt(0, 100, tMosh) < refSwapProb) {
      const idx = randInt(0, state.historyFrames.length - 1, tMosh + 1);
      refSource = state.historyFrames[idx];
    }
  }

  // 2. Transform Application (Motion Flow)
  swapCtx.save();
  swapCtx.clearRect(0, 0, width, height);
  
  const zoom = 1 + (params.flowZoom / 500);
  const rot = (params.flowRotate * Math.PI) / 180;
  
  swapCtx.translate(width / 2 + params.flowX, height / 2 + params.flowY);
  swapCtx.rotate(rot);
  swapCtx.scale(zoom, zoom);
  swapCtx.translate(-width / 2, -height / 2);
  
  // Explicitly size the draw to match current buffer
  swapCtx.drawImage(refSource, 0, 0, width, height);
  swapCtx.restore();
};

/**
 * Merges the motion result back into the main mosh buffer with feedback decay.
 */
export const applyFeedback = (
  moshCtx: CanvasRenderingContext2D, 
  feedback: number, 
  width: number, 
  height: number
) => {
  const fb = Math.max(0, Math.min(100, feedback));
  
  moshCtx.save();
  
  if (fb < 100) {
    // Optimized feedback darkening/decay
    // We use globalAlpha + solid fill instead of building dynamic RGBA strings
    moshCtx.globalCompositeOperation = 'destination-out';
    moshCtx.globalAlpha = (100 - fb) * 0.01;
    moshCtx.fillStyle = '#000000';
    moshCtx.fillRect(0, 0, width, height);
  }
  
  moshCtx.globalCompositeOperation = 'source-over';
  moshCtx.globalAlpha = 1.0;
  moshCtx.drawImage(buffers.swap, 0, 0, width, height);
  moshCtx.restore();
};
