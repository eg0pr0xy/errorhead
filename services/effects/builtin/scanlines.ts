import type { StrictEffect } from '../types';

// Subtle CRT-style horizontal scanlines overlay.
// Does not clear the canvas; only darkens every other row slightly.
export const scanlinesEffect: StrictEffect = (ctx, { width, height }) => {
  const alpha = 0.06; // subtle default
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = '#000';
  for (let y = 1; y < height; y += 2) {
    ctx.fillRect(0, y, width, 1);
  }
  ctx.restore();
};

export const createScanlinesEffect = (intensity: number = 50): StrictEffect => {
  // intensity 0..100 maps to alpha 0..0.25 approximately
  const alpha = Math.max(0, Math.min(1, (intensity / 100) * 0.25));
  return (ctx, { width, height }) => {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#000';
    for (let y = 1; y < height; y += 2) {
      ctx.fillRect(0, y, width, 1);
    }
    ctx.restore();
  };
};
