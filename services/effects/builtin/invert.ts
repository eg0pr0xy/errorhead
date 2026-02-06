import type { StrictEffect } from '../types';

// EffectInvert — guaranteed-visible test effect
// Reads ImageData, inverts RGB, writes back. Does not clear canvas.
export const EffectInvert: StrictEffect = (ctx, { width, height }) => {
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