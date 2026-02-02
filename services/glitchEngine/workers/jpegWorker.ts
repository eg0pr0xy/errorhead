// JPEG encode + corrupt worker
// Receives an ImageBitmap, encodes to JPEG via OffscreenCanvas, corrupts bytes, and returns an ImageBitmap

type EncodeMsg = {
  id: number;
  type: 'encodeCorrupt';
  width: number;
  height: number;
  quality: number; // 0..1
  amount: number; // 0..100
  iterations: number;
  bitmap: ImageBitmap;
  seed?: number;
  mode?: 'safe' | 'unsafe';
};

type ResultMsg = {
  id: number;
  type: 'result';
  ok: boolean;
  imageBitmap?: ImageBitmap;
  error?: string;
};

function createRNG(seed: number) {
  let t = seed >>> 0;
  return function next() {
    t += 0x6D2B79F5;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

function findJpegDataRange(bytes: Uint8Array): { start: number; end: number } | null {
  // Look for Start of Scan (FF DA) and End of Image (FF D9)
  let start = -1; let end = -1;
  for (let i = 0; i < bytes.length - 1; i++) {
    if (bytes[i] === 0xFF && bytes[i + 1] === 0xDA && start < 0) start = i + 2; // after marker
    if (bytes[i] === 0xFF && bytes[i + 1] === 0xD9) { end = i; break; }
  }
  if (start >= 0 && end > start) return { start, end };
  return null;
}

const corruptBytes = (bytes: Uint8Array, amount: number, iterations: number, seed: number = 1337, mode: 'safe' | 'unsafe' = 'safe'): void => {
  const rng = createRNG(seed);
  const amt = Math.max(0, Math.min(100, amount)) / 100;
  let start = 64; let end = bytes.length - 10;
  if (mode === 'safe') {
    const range = findJpegDataRange(bytes);
    if (range) { start = range.start + 16; end = range.end - 2; }
    else { start = 256; }
  } else {
    start = 32;
  }
  const iters = Math.max(0, iterations);
  for (let i = 0; i < iters; i++) {
    if (rng() < amt) {
      const p = Math.floor(start + rng() * (end - start));
      bytes[p] = (bytes[p] + Math.floor(Math.random() * 255)) & 0xff;
    }
  }
};

self.onmessage = async (e: MessageEvent<EncodeMsg>) => {
  const msg = e.data;
  if (!msg || msg.type !== 'encodeCorrupt') return;
  const { id, width, height, quality, amount, iterations, bitmap, seed, mode } = msg;

  try {
    // Encode to JPEG using OffscreenCanvas
    // @ts-ignore - OffscreenCanvas available in workers on modern browsers
    const off = new OffscreenCanvas(width, height);
    const ctx = off.getContext('2d', { alpha: false }) as OffscreenCanvasRenderingContext2D | null;
    if (!ctx) throw new Error('OffscreenCanvas 2D context not available');

    ctx.drawImage(bitmap, 0, 0, width, height);
    // Release input bitmap ASAP
    bitmap.close();

    // @ts-ignore convertToBlob is available on OffscreenCanvas
    const blob: Blob = await (off as any).convertToBlob({ type: 'image/jpeg', quality });
    const buf = new Uint8Array(await blob.arrayBuffer());
    corruptBytes(buf, amount, iterations, seed ?? 1337, mode ?? 'safe');
    const corruptedBlob = new Blob([buf], { type: 'image/jpeg' });

    // Create an ImageBitmap of the corrupted data in the worker
    const corruptedBitmap = await createImageBitmap(corruptedBlob);

    const out: ResultMsg = { id, type: 'result', ok: true, imageBitmap: corruptedBitmap };
    // Transfer the bitmap back; it’s transferable in modern browsers
    (self as any).postMessage(out, [corruptedBitmap as any]);
  } catch (err: any) {
    const out: ResultMsg = { id, type: 'result', ok: false, error: String(err?.message || err) };
    (self as any).postMessage(out);
  }
};
