import type { StrictEffect } from '../types';

// TEMP TEST EFFECT (obvious visual): per-pixel invert
// - Does NOT clear the canvas
// - Does NOT draw the base image
// - ONLY modifies existing pixels
export const testDebugEffect: StrictEffect = (ctx, { width, height }) => {
  const img = ctx.getImageData(0, 0, width, height);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    d[i] = 255 - d[i];       // R
    d[i + 1] = 255 - d[i+1]; // G
    d[i + 2] = 255 - d[i+2]; // B
    // alpha unchanged
  }
  ctx.putImageData(img, 0, 0);
};