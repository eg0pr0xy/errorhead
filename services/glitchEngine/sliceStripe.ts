import { GlitchParams } from '../../types';

type SliceDir = 'h' | 'v';
type Slice = { dir: SliceDir; pos: number; size: number; offset: number };

let cachedSlices: Slice[] = [];
let holdCounter = 0;
let lastKey = '';

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const wrapX = (
  ctx: CanvasRenderingContext2D,
  src: HTMLCanvasElement,
  y: number,
  h: number,
  dx: number,
  width: number
) => {
  let shift = dx % width;
  if (shift < 0) shift += width;
  if (shift === 0) {
    ctx.drawImage(src, 0, y, width, h, 0, y, width, h);
    return;
  }
  const w1 = width - shift;
  ctx.drawImage(src, 0, y, w1, h, shift, y, w1, h);
  ctx.drawImage(src, w1, y, shift, h, 0, y, shift, h);
};

const wrapY = (
  ctx: CanvasRenderingContext2D,
  src: HTMLCanvasElement,
  x: number,
  w: number,
  dy: number,
  height: number
) => {
  let shift = dy % height;
  if (shift < 0) shift += height;
  if (shift === 0) {
    ctx.drawImage(src, x, 0, w, height, x, 0, w, height);
    return;
  }
  const h1 = height - shift;
  ctx.drawImage(src, x, 0, w, h1, x, shift, w, h1);
  ctx.drawImage(src, x, h1, w, shift, x, 0, w, shift);
};

const buildSlices = (
  count: number,
  thickness: number,
  offsetMax: number,
  direction: 'h' | 'v' | 'both',
  width: number,
  height: number
): Slice[] => {
  const slices: Slice[] = [];
  for (let i = 0; i < count; i++) {
    const dir: SliceDir = direction === 'both' ? (Math.random() < 0.5 ? 'h' : 'v') : direction;
    if (dir === 'h') {
      const pos = Math.floor(Math.random() * Math.max(1, height - thickness));
      const offset = (Math.random() * 2 - 1) * offsetMax;
      slices.push({ dir, pos, size: thickness, offset });
    } else {
      const pos = Math.floor(Math.random() * Math.max(1, width - thickness));
      const offset = (Math.random() * 2 - 1) * offsetMax;
      slices.push({ dir, pos, size: thickness, offset });
    }
  }
  return slices;
};

/**
 * Slice / Stripe Displacement
 * Random horizontal/vertical strips shifted by offsets.
 */
export function applySliceStripe(
  ctx: CanvasRenderingContext2D,
  swapCtx: CanvasRenderingContext2D,
  params: GlitchParams,
  width: number,
  height: number,
  isPlaying: boolean = true
) {
  const enabled = params.sliceEnabled ?? false;
  if (!enabled) return;

  const count = Math.max(0, Math.floor(params.sliceCount ?? 0));
  const thickness = Math.max(0, Math.floor(params.sliceThickness ?? 0));
  const offsetMax = Math.abs(params.sliceOffsetMax ?? 0);
  const direction = params.sliceDirection ?? 'h';
  const holdFrames = Math.max(0, Math.floor(params.sliceHoldFrames ?? 0));

  if (count <= 0 || thickness <= 0 || offsetMax <= 0) return;

  const key = `${count}|${thickness}|${offsetMax}|${direction}|${width}|${height}`;
  const shouldRefresh =
    cachedSlices.length === 0 ||
    key !== lastKey ||
    (holdFrames === 0 && isPlaying) ||
    (holdFrames > 0 && isPlaying && holdCounter <= 0);

  if (shouldRefresh) {
    cachedSlices = buildSlices(count, thickness, offsetMax, direction, width, height);
    holdCounter = holdFrames;
    lastKey = key;
  } else if (isPlaying && holdFrames > 0) {
    holdCounter = Math.max(0, holdCounter - 1);
  }

  // Snapshot current frame
  swapCtx.clearRect(0, 0, width, height);
  swapCtx.drawImage(ctx.canvas, 0, 0, width, height);

  for (const s of cachedSlices) {
    if (s.dir === 'h') {
      const y = clamp(s.pos, 0, Math.max(0, height - s.size));
      wrapX(ctx, swapCtx.canvas, y, s.size, s.offset, width);
    } else {
      const x = clamp(s.pos, 0, Math.max(0, width - s.size));
      wrapY(ctx, swapCtx.canvas, x, s.size, s.offset, height);
    }
  }
}
