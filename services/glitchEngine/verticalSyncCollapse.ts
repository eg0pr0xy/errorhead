import { GlitchParams } from '../../types';

// Persistent per-band accumulators (module scope)
let bandPhaseAcc: number[] = [];
let bandSpeedOffset: number[] = [];
let lastBandCount = 0;
let jitterAcc = 0;

const ensureBands = (count: number) => {
  if (count <= 0) {
    bandPhaseAcc.length = 0;
    bandSpeedOffset.length = 0;
    lastBandCount = 0;
    return;
  }
  if (count === lastBandCount && bandPhaseAcc.length === count && bandSpeedOffset.length === count) return;

  bandPhaseAcc = new Array(count);
  bandSpeedOffset = new Array(count);
  for (let i = 0; i < count; i++) {
    bandPhaseAcc[i] = 0;
    bandSpeedOffset[i] = (Math.random() * 2 - 1); // [-1, 1]
  }
  lastBandCount = count;
};

/**
 * Vertical Sync Collapse
 * Multiple horizontal bands drift vertically at different speeds.
 * Wraps vertically with hard/soft mode.
 */
export function applyVerticalSyncCollapse(
  ctx: CanvasRenderingContext2D,
  swapCtx: CanvasRenderingContext2D,
  params: GlitchParams,
  width: number,
  height: number
) {
  const enabled = params.vSyncEnabled ?? false;
  if (!enabled) return;

  const bandCount = Math.max(0, Math.floor(params.vSyncBandCount ?? 0));
  const baseSpeed = params.vSyncBaseSpeed ?? 0;
  const bandVariance = params.vSyncBandVariance ?? 0;
  const jitter = params.vSyncJitter ?? 0;
  const wrapMode = params.vSyncWrapMode ?? 'hard';

  if (bandCount <= 0) return;
  if (baseSpeed === 0 && bandVariance === 0 && jitter === 0) return;

  ensureBands(bandCount);
  jitterAcc += 1;

  // Snapshot current frame into swap buffer (no clear on ctx)
  swapCtx.drawImage(ctx.canvas, 0, 0, width, height);

  const soft = wrapMode === 'soft';
  const baseAlpha = soft ? 0.85 : 1.0;
  const blendAlpha = soft ? 0.15 : 0.0;

  ctx.save();
  ctx.globalCompositeOperation = 'source-over';

  const drawSlice = (srcY: number, dstY: number, h: number, alpha: number) => {
    ctx.globalAlpha = alpha;
    ctx.drawImage(swapCtx.canvas, 0, srcY, width, h, 0, dstY, width, h);
  };

  const drawWrapped = (srcY: number, dstY: number, h: number) => {
    let sY = srcY;
    while (sY < 0) sY += height;
    if (sY + h <= height) {
      drawSlice(sY, dstY, h, baseAlpha);
      if (blendAlpha > 0) {
        const altY = (sY + Math.max(1, Math.floor(h / 2))) % height;
        drawSlice(altY, dstY, h, blendAlpha);
      }
      return;
    }

    const h1 = height - sY;
    const h2 = h - h1;
    if (h1 > 0) {
      drawSlice(sY, dstY, h1, baseAlpha);
      if (blendAlpha > 0) drawSlice((sY + Math.max(1, Math.floor(h1 / 2))) % height, dstY, h1, blendAlpha);
    }
    if (h2 > 0) {
      drawSlice(0, dstY + h1, h2, baseAlpha);
      if (blendAlpha > 0) drawSlice(Math.max(0, Math.floor(h2 / 2)), dstY + h1, h2, blendAlpha);
    }
  };

  for (let i = 0; i < bandCount; i++) {
    const bandStart = Math.floor((i * height) / bandCount);
    const bandEnd = Math.floor(((i + 1) * height) / bandCount);
    const bandHeight = Math.max(1, bandEnd - bandStart);

    const speed = baseSpeed + bandVariance * bandSpeedOffset[i];
    bandPhaseAcc[i] += speed;
    let offset = bandPhaseAcc[i];

    if (jitter !== 0) {
      const seed = (i + 1) * 12.9898 + jitterAcc * 0.1;
      const r = Math.sin(seed) * 43758.5453;
      const frac = r - Math.floor(r);
      offset += (frac - 0.5) * 2 * jitter;
    }

    const srcY = (bandStart + offset) % height;
    drawWrapped(srcY, bandStart, bandHeight);
  }

  ctx.restore();
}
