
import { GlitchParams } from '../../types';

// Worker bridge (lazy singleton)
let jpegWorker: Worker | null = null;
let reqId = 0;
const pending = new Map<number, (res: ImageBitmap | null) => void>();
let inFlight = false;
let lastBitmap: ImageBitmap | null = null;
let lastSig = '';
let lastUpdate = 0;
let fallbackCooldown = 0;

function initWorker() {
  if (jpegWorker) return jpegWorker;
  try {
    // Vite-friendly worker import
    jpegWorker = new Worker(new URL('./workers/jpegWorker.ts', import.meta.url), { type: 'module' });
    jpegWorker.onmessage = (e: MessageEvent<any>) => {
      const msg = e.data;
      if (!msg || msg.type !== 'result') return;
      const cb = pending.get(msg.id);
      pending.delete(msg.id);
      if (cb) cb(msg.ok ? (msg.imageBitmap as ImageBitmap) : null);
    };
  } catch (e) {
    jpegWorker = null;
  }
  return jpegWorker;
}

async function workerEncodeAndCorrupt(source: HTMLCanvasElement, width: number, height: number, quality01: number, amount: number, iterations: number, seed: number, mode: 'safe' | 'unsafe'): Promise<ImageBitmap | null> {
  if (!('Worker' in window) || !('createImageBitmap' in window) || !(window as any).OffscreenCanvas) {
    return null;
  }
  const w = initWorker();
  if (!w) return null;
  // Create a transferable ImageBitmap of the current frame
  const bitmap = await createImageBitmap(source);
  const id = ++reqId;
  const p = new Promise<ImageBitmap | null>((resolve) => pending.set(id, resolve));
  w.postMessage({ id, type: 'encodeCorrupt', width, height, quality: quality01, amount, iterations, bitmap, seed, mode }, [bitmap as any]);
  return p;
}

function createRNG(seed: number) {
  let t = seed >>> 0;
  return function next() {
    t += 0x6D2B79F5;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

async function legacyEncodeAndCorrupt(source: HTMLCanvasElement, width: number, height: number, quality01: number, amount: number, iterations: number, seed: number, mode: 'safe'|'unsafe'): Promise<ImageBitmap | null> {
  try {
    const rng = createRNG(seed);
    const jpegCanvas = document.createElement('canvas');
    jpegCanvas.width = width; jpegCanvas.height = height;
    const jpgCtx = jpegCanvas.getContext('2d')!;
    jpgCtx.drawImage(source, 0, 0);
    const blobOrig = await (jpegCanvas as any).convertToBlob?.({ type: 'image/jpeg', quality: quality01 }) || await (await fetch(jpegCanvas.toDataURL('image/jpeg', quality01))).blob();
    const buf = new Uint8Array(await blobOrig.arrayBuffer());
    const headerSkip = mode === 'safe' ? 256 : 32;
    for (let i = 0; i < iterations; i++) {
      const p = Math.floor(headerSkip + (rng() * (buf.length - headerSkip - 10)));
      if (rng() < amount / 100) buf[p] = (buf[p] + Math.floor(rng() * 255)) & 0xff;
    }
    const blob = new Blob([buf], { type: 'image/jpeg' });
    const bitmap = await createImageBitmap(blob);
    return bitmap;
  } catch {
    return null;
  }
}

export const applyCompressionGlitch = async (
  composeCanvas: HTMLCanvasElement, 
  jpegCanvas: HTMLCanvasElement,
  swapCanvas: HTMLCanvasElement,
  params: GlitchParams, 
  tGlobal: number, 
  width: number, 
  height: number
): Promise<CanvasImageSource> => {
  if (params.amount <= 0) return composeCanvas;

  const swapCtx = swapCanvas.getContext('2d')!;

  const quality = Math.max(0.01, Math.min(1, params.quality / 100));
  const sig = `${width}x${height}|q${quality}|a${params.amount}|i${params.iterations}`;
  const now = performance.now();

  // If we have a fresh result, draw it
  if (lastBitmap) {
    swapCtx.clearRect(0, 0, width, height);
    swapCtx.drawImage(lastBitmap, 0, 0, width, height);
  }

  // Schedule new work if nothing in flight and either signature changed or cooldown elapsed
  const shouldKick = !inFlight && (sig !== lastSig || (now - lastUpdate) > 80);
  if (shouldKick) {
    inFlight = true;
    lastSig = sig;
    const doWork = async () => {
      // Try worker path
      const seed = ((params.seed ?? 0) ^ Math.floor(tGlobal * 1000)) >>> 0;
      let bmp = await workerEncodeAndCorrupt(composeCanvas, width, height, quality, params.amount, params.iterations, seed, (params.corruptMode as any) || 'safe');
      // Fallback throttle to avoid hammering main thread
      if (!bmp && now > fallbackCooldown) {
        bmp = await legacyEncodeAndCorrupt(composeCanvas, width, height, quality, params.amount, params.iterations, seed, (params.corruptMode as any) || 'safe');
        fallbackCooldown = performance.now() + 120;
      }
      if (bmp) {
        // Dispose previous
        if (lastBitmap) try { lastBitmap.close(); } catch {}
        lastBitmap = bmp;
        lastUpdate = performance.now();
      }
      inFlight = false;
    };
    doWork();
  }

  // Prefer returning the swap canvas if we drew a last result; otherwise pass-through
  return lastBitmap ? swapCanvas : composeCanvas;
};

// Expose minimal debug info for overlays
export function getCompressionDebug() {
  return { hasBitmap: !!lastBitmap, inFlight };
}

export function resetCompressionCaches() {
  try { if (lastBitmap) (lastBitmap as any).close?.(); } catch {}
  lastBitmap = null;
  lastSig = '';
  lastUpdate = 0;
  inFlight = false;
  fallbackCooldown = 0;
  pending.clear();
}
