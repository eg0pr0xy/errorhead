import type { EngineContext } from '../../engine/engineTypes';
import type { GlitchParams } from '../../types';

interface SnowBurstState {
  activeFrames: number;
}

interface NoiseBuffer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;
  imageData: ImageData;
}

const getState = (eng: EngineContext): SnowBurstState => {
  if (!(eng.state as any).snowBurst) {
    (eng.state as any).snowBurst = { activeFrames: 0 } as SnowBurstState;
  }
  return (eng.state as any).snowBurst as SnowBurstState;
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

let noiseBuf: NoiseBuffer | null = null;

const getNoiseBuffer = (width: number, height: number, scale: number) => {
  const w = Math.max(1, Math.ceil(width / scale));
  const h = Math.max(1, Math.ceil(height / scale));
  if (!noiseBuf || noiseBuf.w !== w || noiseBuf.h !== h) {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    const imageData = ctx.createImageData(w, h);
    noiseBuf = { canvas, ctx, w, h, imageData };
  }
  return noiseBuf;
};

const fillSnow = (ctx: CanvasRenderingContext2D, width: number, height: number, intensity: number) => {
  const alpha = clamp(intensity / 100, 0, 1);
  if (alpha <= 0) return;
  const scale = intensity >= 70 ? 2 : intensity >= 40 ? 3 : 4;
  const buf = getNoiseBuffer(width, height, scale);
  const data = buf.imageData.data;
  const a = Math.floor(alpha * 255);
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.random() < 0.5 ? 0 : 255;
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
    data[i + 3] = a;
  }
  buf.ctx.putImageData(buf.imageData, 0, 0);
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(buf.canvas, 0, 0, buf.w, buf.h, 0, 0, width, height);
  ctx.restore();
};

export const applySnowBurst = (
  eng: EngineContext,
  ctx: CanvasRenderingContext2D,
  params: GlitchParams,
  width: number,
  height: number,
  dtSec: number,
  audioPeak: number = 0
): boolean => {
  if (width <= 0 || height <= 0) return false;
  const enabled = params.snowBurstEnabled ?? false;
  if (!enabled) return false;

  const duration = Math.max(1, Math.floor(params.snowBurstDurationFrames ?? 6));
  const chance = clamp(params.snowBurstChance ?? 0, 0, 100);
  const intensity = clamp(params.snowBurstIntensity ?? 0, 0, 100);

  const state = getState(eng);

  if (state.activeFrames <= 0) {
    const prob = (chance / 100) * Math.max(0, dtSec);
    const roll = Math.random();
    if (roll < prob || audioPeak > 0.75) {
      state.activeFrames = duration;
    }
  }

  if (state.activeFrames > 0) {
    state.activeFrames--;
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    if (intensity > 0) {
      fillSnow(ctx, width, height, intensity);
    }
    ctx.restore();
    return true;
  }

  return false;
};
