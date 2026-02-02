
import { buffers, state } from '../state';

/**
 * Handles I-Frame (Keyframe) logic.
 * Resets the feedback buffer with a fresh input frame.
 */
export const applyIFrameDestruction = (
  moshCtx: CanvasRenderingContext2D, 
  bloom: number, 
  softReset: number,
  width: number, 
  height: number
) => {
  const bloom01 = Math.max(0, Math.min(1, (Number.isFinite(bloom) ? bloom : 0) / 100));
  const softReset01 = Math.max(0, Math.min(1, (Number.isFinite(softReset) ? softReset : 0) / 100));

  moshCtx.save();
  
  // 1. Buffer Reset Logic
  if (softReset01 <= 0) {
    // Hard Reset (Standard): Wipe feedback and seed fresh
    moshCtx.globalAlpha = 1.0;
    moshCtx.globalCompositeOperation = 'source-over';
    moshCtx.clearRect(0, 0, width, height);
  } else {
    // Soft Reset: Partially fade out the existing feedback loop
    // Higher softReset01 means more of the old content stays (ghosting)
    moshCtx.globalCompositeOperation = 'destination-out';
    moshCtx.globalAlpha = 1.0 - softReset01;
    moshCtx.fillStyle = '#000000';
    moshCtx.fillRect(0, 0, width, height);
    
    moshCtx.globalCompositeOperation = 'source-over';
    moshCtx.globalAlpha = 1.0;
  }

  // 2. Seed with Input
  moshCtx.drawImage(buffers.input, 0, 0, width, height);

  // 3. Bloom / Exposure Kick
  if (bloom01 > 0) {
    moshCtx.globalCompositeOperation = 'screen';
    moshCtx.globalAlpha = bloom01;
    moshCtx.fillStyle = '#FFFFFF';
    moshCtx.fillRect(0, 0, width, height);
  }
  
  moshCtx.restore();
  
  // 4. State Management
  // Clear temporal history on I-Frame to prevent stale ghosting from old scenes
  state.historyFrames.length = 0;
};
