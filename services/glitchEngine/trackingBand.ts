import { GlitchParams } from '../../types';

// Persistent band phase accumulator (module scope)
let bandPhase = 0;

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

/**
 * VHS Tracking Noise Band
 * Horizontal noisy band near top/bottom with drift and mild horizontal tearing.
 * Zero values = no visual change.
 */
export function applyVhsTrackingNoiseBand(
  ctx: CanvasRenderingContext2D,
  swapCtx: CanvasRenderingContext2D,
  params: GlitchParams,
  width: number,
  height: number,
  tGlobal: number,
  isPlaying: boolean = true
) {
  const enabled = params.trackingEnabled ?? false;
  if (!enabled) return;

  const strength = params.trackingStrength ?? 0;
  const bandHeight = Math.max(0, Math.floor(params.trackingBandHeight ?? 0));
  const speed = params.trackingSpeed ?? 0;
  const position = params.trackingPosition ?? 'auto';
  const tearAmount = params.trackingTearAmount ?? 0;

  if (bandHeight <= 0) return;
  if (strength === 0 && tearAmount === 0 && speed === 0) return;

  if (isPlaying) bandPhase += speed;

  const driftRange = Math.max(1, Math.round(height * 0.12));
  const drift = Math.round(((Math.sin(bandPhase * 0.7) * 0.5) + 0.5) * driftRange);
  let y = 0;
  if (position === 'top') {
    y = drift;
  } else if (position === 'bottom') {
    y = height - bandHeight - drift;
  } else {
    const top = Math.sin(bandPhase * 0.35) >= 0;
    y = top ? drift : height - bandHeight - drift;
  }
  y = clamp(y, 0, Math.max(0, height - bandHeight));

  // Snapshot band into swap buffer
  swapCtx.clearRect(0, 0, width, bandHeight);
  swapCtx.drawImage(ctx.canvas, 0, y, width, bandHeight, 0, 0, width, bandHeight);

  ctx.save();
  ctx.globalCompositeOperation = 'source-over';

  // Horizontal tearing inside the band
  if (tearAmount !== 0) {
    const sliceH = 2;
    for (let i = 0; i < bandHeight; i += sliceH) {
      const h = Math.min(sliceH, bandHeight - i);
      const phase = (i * 0.25) + (bandPhase * 2.0) + tGlobal * 0.1;
      let dx = Math.sin(phase) * tearAmount;
      dx += (Math.random() - 0.5) * tearAmount * 0.3;
      if (dx !== 0) {
        let shift = dx % width;
        if (shift < 0) shift += width;
        const w1 = width - shift;
        ctx.drawImage(swapCtx.canvas, 0, i, w1, h, shift, y + i, w1, h);
        ctx.drawImage(swapCtx.canvas, w1, i, shift, h, 0, y + i, shift, h);
      } else {
        ctx.drawImage(swapCtx.canvas, 0, i, width, h, 0, y + i, width, h);
      }
    }
  } else {
    ctx.drawImage(swapCtx.canvas, 0, 0, width, bandHeight, 0, y, width, bandHeight);
  }

  // Luma noise overlay
  if (strength > 0) {
    const intensity = clamp(strength / 100, 0, 1);
    for (let i = 0; i < bandHeight; i += 2) {
      const v = Math.random() < 0.5
        ? Math.floor(40 + Math.random() * 80)
        : Math.floor(180 + Math.random() * 75);
      const a = intensity * (0.35 + Math.random() * 0.45);
      ctx.fillStyle = `rgba(${v},${v},${v},${a.toFixed(3)})`;
      ctx.fillRect(0, y + i, width, 1);
    }
  }

  ctx.restore();
}
