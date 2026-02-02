
import { webglMoshService } from '../webglService';

export interface EngineState {
  frameCounter: number;
  lastInjectTime: number;
  isInjecting: boolean;
  injectFrameCount: number;
  historyFrames: HTMLCanvasElement[];
  prevShaderMoshEnabled: boolean;
}

export const state: EngineState = {
  frameCounter: 0,
  lastInjectTime: 0,
  isInjecting: false,
  injectFrameCount: 0,
  historyFrames: [],
  prevShaderMoshEnabled: false,
};

export const MAX_HISTORY = 60; // Increased for deeper temporal depth (~2 seconds @ 30fps)

export const buffers = {
  input: document.createElement('canvas'),
  compose: document.createElement('canvas'),
  jpeg: document.createElement('canvas'),
  mosh: document.createElement('canvas'),
  swap: document.createElement('canvas'),
  hold: document.createElement('canvas'),
  prev: document.createElement('canvas'),
};

export const getContexts = () => ({
  inCtx: buffers.input.getContext('2d', { willReadFrequently: true })!,
  compCtx: buffers.compose.getContext('2d', { willReadFrequently: true })!,
  jpgCtx: buffers.jpeg.getContext('2d', { willReadFrequently: true })!,
  moshCtx: buffers.mosh.getContext('2d', { willReadFrequently: true })!,
  swapCtx: buffers.swap.getContext('2d', { willReadFrequently: true })!,
  holdCtx: buffers.hold.getContext('2d', { willReadFrequently: true })!,
  prevCtx: buffers.prev.getContext('2d', { willReadFrequently: true })!,
});

export const randInt = (min: number, max: number, seed: number) => {
  const x = Math.sin(seed) * 10000;
  const random = x - Math.floor(x);
  return Math.floor(random * (max - min + 1)) + min;
};

export const noise = (t: number) => {
  return (Math.sin(t) + Math.sin(t * 2.1) + Math.sin(t * 4.4)) / 3 + 0.5;
};

export const resetEngine = () => {
  state.frameCounter = 0;
  state.historyFrames = [];
  state.lastInjectTime = 0;
  state.isInjecting = false;
  state.injectFrameCount = 0;
  state.prevShaderMoshEnabled = false;

  webglMoshService.clear();

  Object.values(buffers).forEach(canvas => {
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
  });
};
