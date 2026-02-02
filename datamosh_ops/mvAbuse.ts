import { EngineContext } from '../engine/engineTypes';

function toGray(data: Uint8ClampedArray, width: number, height: number): Uint8Array {
  const out = new Uint8Array(width * height);
  for (let i = 0, j = 0; i < data.length; i += 4, j++) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    out[j] = (r * 299 + g * 587 + b * 114) / 1000;
  }
  return out;
}

export function applyMotionVectorAbuseS(
  eng: EngineContext,
  swapCtx: CanvasRenderingContext2D,
  width: number,
  height: number,
  blockSize: number,
  searchRadiusBlocks: number
) {
  const prevCtx = eng.buffers.prev.getContext('2d', { willReadFrequently: true })!;
  const curCtx = eng.buffers.input.getContext('2d', { willReadFrequently: true })!;
  if (!prevCtx || !curCtx) return;

  // If prev is empty, seed it and bail this frame
  if (eng.buffers.prev.width !== width || eng.buffers.prev.height !== height) {
    eng.buffers.prev.width = width; eng.buffers.prev.height = height;
    prevCtx.clearRect(0, 0, width, height);
    prevCtx.drawImage(eng.buffers.input, 0, 0, width, height);
    return;
  }

  // Read downsampled grayscale versions for cheap SAD
  const w = width, h = height;
  const bs = Math.max(8, Math.floor(blockSize));
  const cols = Math.ceil(w / bs);
  const rows = Math.ceil(h / bs);
  const search = Math.max(0, Math.floor(searchRadiusBlocks));

  const prevData = prevCtx.getImageData(0, 0, w, h).data;
  const curData = curCtx.getImageData(0, 0, w, h).data;
  const prevGray = toGray(prevData, w, h);
  const curGray = toGray(curData, w, h);

  swapCtx.save();
  swapCtx.clearRect(0, 0, w, h);

  // For each block, find offset in prev that best matches current block
  for (let by = 0; by < rows; by++) {
    for (let bx = 0; bx < cols; bx++) {
      const x0 = bx * bs;
      const y0 = by * bs;
      const bw = Math.min(bs, w - x0);
      const bh = Math.min(bs, h - y0);
      let bestDx = 0, bestDy = 0, bestScore = Number.POSITIVE_INFINITY;
      for (let dy = -search; dy <= search; dy++) {
        for (let dx = -search; dx <= search; dx++) {
          let sad = 0, count = 0;
          const sx0 = x0 + dx * bs;
          const sy0 = y0 + dy * bs;
          if (sx0 < 0 || sy0 < 0 || sx0 + bw > w || sy0 + bh > h) continue;
          for (let yy = 0; yy < bh; yy += 4) {
            const rowCur = (y0 + yy) * w + x0;
            const rowPrev = (sy0 + yy) * w + sx0;
            for (let xx = 0; xx < bw; xx += 4) {
              sad += Math.abs(curGray[rowCur + xx] - prevGray[rowPrev + xx]);
              count++;
            }
          }
          const score = sad / Math.max(1, count);
          if (score < bestScore) { bestScore = score; bestDx = dx; bestDy = dy; }
        }
      }
      const sx = x0 + bestDx * bs;
      const sy = y0 + bestDy * bs;
      swapCtx.drawImage(eng.buffers.prev, sx, sy, bw, bh, x0, y0, bw, bh);
    }
  }
  swapCtx.restore();
}

