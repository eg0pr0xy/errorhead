import { GlitchParams } from '../../types';

// Persistent phase accumulators (module scope)
let phaseAccY = 0;
let phaseAccX = 0;
let hAcc = 0;
let waveAcc = 0;

/**
 * Analog Phase Slip
 * Vertical phase drift like analog TV sync loss.
 * Image scrolls upward, wraps at top to bottom.
 *
 * Zero values = no visual change.
 */
export function applyAnalogPhaseSlip(
  ctx: CanvasRenderingContext2D,
  swapCtx: CanvasRenderingContext2D,
  params: GlitchParams,
  width: number,
  height: number,
  tGlobal: number,
  isPlaying: boolean = true
) {
  const phaseEnabled = params.phaseEnabled ?? false;
  const phaseOffset = params.phaseOffset ?? 0;
  const phaseSpeed = params.phaseSpeed ?? 0;
  const phaseOffsetX = params.phaseOffsetX ?? 0;
  const phaseSpeedX = params.phaseSpeedX ?? 0;
  const phaseJitter = params.phaseJitter ?? 0;
  const wrapMode = params.wrapMode ?? 'hard';
  const banding = params.banding ?? 'line';
  const hOffset = params.hOffset ?? 0;
  const hSpeed = params.hSpeed ?? 0;
  const hAmount = params.hAmount ?? 0;
  const waveAmount = params.waveAmount ?? 0;
  const waveFrequency = params.waveFrequency ?? 0;
  const waveSpeed = params.waveSpeed ?? 0;
  const wavePhase = params.wavePhase ?? 0;

  if (!phaseEnabled) return;
  if (
    phaseOffset === 0 &&
    phaseSpeed === 0 &&
    phaseOffsetX === 0 &&
    phaseSpeedX === 0 &&
    phaseJitter === 0 &&
    hOffset === 0 &&
    hSpeed === 0 &&
    hAmount === 0 &&
    waveAmount === 0 &&
    waveFrequency === 0 &&
    waveSpeed === 0 &&
    wavePhase === 0
  ) return;

  if (isPlaying) {
    phaseAccY += phaseSpeed;
    phaseAccX += phaseSpeedX;
    hAcc += hSpeed;
    waveAcc += waveSpeed;
  }
  const totalOffsetY = phaseOffset + phaseAccY;
  const baseShiftY = ((totalOffsetY % height) + height) % height;
  const totalOffsetX = phaseOffsetX + phaseAccX;
  const baseShiftX = ((totalOffsetX % width) + width) % width;
  const bandHeight = banding === 'block' ? Math.max(2, Math.round(height / 120)) : 1;
  const soft = wrapMode === 'soft';
  const baseAlpha = soft ? 0.85 : 1.0;
  const blendAlpha = soft ? 0.15 : 0.0;

  swapCtx.clearRect(0, 0, width, height);
  swapCtx.drawImage(ctx.canvas, 0, 0, width, height);

  ctx.clearRect(0, 0, width, height);
  ctx.save();

  const drawSlice = (srcY: number, dstY: number, h: number, alpha: number, xOffset: number) => {
    ctx.globalAlpha = alpha;
    if (xOffset === 0) {
      ctx.drawImage(swapCtx.canvas, 0, srcY, width, h, 0, dstY, width, h);
      return;
    }
    let dx = xOffset % width;
    if (dx < 0) dx += width;
    if (dx === 0) {
      ctx.drawImage(swapCtx.canvas, 0, srcY, width, h, 0, dstY, width, h);
      return;
    }
    const w1 = width - dx;
    ctx.drawImage(swapCtx.canvas, 0, srcY, w1, h, dx, dstY, w1, h);
    ctx.drawImage(swapCtx.canvas, w1, srcY, dx, h, 0, dstY, dx, h);
  };

  const drawWrapped = (srcY: number, dstY: number, h: number, xOffset: number) => {
    let sY = srcY;
    while (sY < 0) sY += height;
    if (sY + h <= height) {
      drawSlice(sY, dstY, h, baseAlpha, xOffset);
      if (blendAlpha > 0) {
        const altY = (sY + Math.max(1, Math.floor(h / 2))) % height;
        drawSlice(altY, dstY, h, blendAlpha, xOffset);
      }
      return;
    }

    const h1 = height - sY;
    const h2 = h - h1;
    if (h1 > 0) {
      drawSlice(sY, dstY, h1, baseAlpha, xOffset);
      if (blendAlpha > 0) drawSlice((sY + Math.max(1, Math.floor(h1 / 2))) % height, dstY, h1, blendAlpha, xOffset);
    }
    if (h2 > 0) {
      drawSlice(0, dstY + h1, h2, baseAlpha, xOffset);
      if (blendAlpha > 0) drawSlice(Math.max(0, Math.floor(h2 / 2)), dstY + h1, h2, blendAlpha, xOffset);
    }
  };

  for (let y = 0; y < height; y += bandHeight) {
    const seed = y * 0.013 + tGlobal * 0.7;
    const r = Math.sin(seed * 12.9898) * 43758.5453;
    const jitter = phaseJitter ? ((r - Math.floor(r)) - 0.5) * 2 * phaseJitter : 0;
    const srcY = (y + baseShiftY + jitter) % height;
    const hFreq = (Math.PI * 2) / Math.max(8, bandHeight * 8);
    const hPhase = hAcc + phaseAccY + hOffset;
    const hShift = hAmount !== 0 ? Math.sin(y * hFreq + hPhase) * hAmount : 0;
    const wave = waveAmount !== 0 ? Math.sin(y * waveFrequency + wavePhase + waveAcc) * waveAmount : 0;
    const xOffset = baseShiftX + hShift + wave;
    drawWrapped(srcY, y, Math.min(bandHeight, height - y), xOffset);
  }

  ctx.restore();
}
