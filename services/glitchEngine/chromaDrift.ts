import { GlitchParams } from '../../types';

let chromaFrames: Array<ImageData | null> = [];
let chromaIndex = 0;
let chromaW = 0;
let chromaH = 0;
let lastFrame: ImageData | null = null;
let outData: Uint8ClampedArray | null = null;
let outImage: ImageData | null = null;

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const ensureBuffer = (size: number, width: number, height: number) => {
  if (width !== chromaW || height !== chromaH || chromaFrames.length !== size) {
    chromaFrames = new Array(size).fill(null);
    chromaIndex = 0;
    chromaW = width;
    chromaH = height;
    lastFrame = null;
    outData = new Uint8ClampedArray(width * height * 4);
    outImage = new ImageData(outData, width, height);
  }
};

/**
 * Chroma Drift / Chroma Delay
 * Keeps luma stable by preserving current G channel and delaying R/B.
 */
export function applyChromaDrift(
  ctx: CanvasRenderingContext2D,
  params: GlitchParams,
  width: number,
  height: number,
  tGlobal: number,
  isPlaying: boolean = true
) {
  const delay = Math.max(0, Math.floor(params.chromaDelayFrames ?? 0));
  const drift = params.chromaDriftAmount ?? 0;
  const wobble = params.chromaWobbleSpeed ?? 0;
  if (delay === 0 && drift === 0 && wobble === 0) return;

  const size = Math.max(1, Math.min(60, delay + 1));
  ensureBuffer(size, width, height);

  let current: ImageData;
  if (isPlaying || !lastFrame) {
    current = ctx.getImageData(0, 0, width, height);
    lastFrame = current;
    chromaFrames[chromaIndex] = current;
  } else {
    current = lastFrame;
  }

  const delayedIndex = ((chromaIndex - delay) % size + size) % size;
  const delayed = chromaFrames[delayedIndex] ?? current;

  const offset = drift !== 0 && wobble !== 0 ? Math.round(Math.sin(tGlobal * wobble) * drift) : Math.round(drift);
  const offX = clamp(offset, -width + 1, width - 1);

  const src = current.data;
  const dly = delayed.data;
  const out = outData!;

  for (let y = 0; y < height; y++) {
    const row = y * width;
    for (let x = 0; x < width; x++) {
      const idx = (row + x) * 4;
      const rx = clamp(x + offX, 0, width - 1);
      const bx = clamp(x - offX, 0, width - 1);
      const rIdx = (row + rx) * 4;
      const bIdx = (row + bx) * 4;
      out[idx] = dly[rIdx];          // R from delayed
      out[idx + 1] = src[idx + 1];   // G from current (luma stability)
      out[idx + 2] = dly[bIdx + 2];  // B from delayed
      out[idx + 3] = src[idx + 3];   // Alpha from current
    }
  }

  ctx.putImageData(outImage!, 0, 0);

  if (isPlaying) {
    chromaIndex = (chromaIndex + 1) % size;
  }
}
