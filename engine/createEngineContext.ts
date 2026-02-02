import { EngineContext, EngineState, EngineBuffers } from './engineTypes';

export function createEngineContext(): EngineContext {
  const buffers: EngineBuffers = {
    input: document.createElement('canvas'),
    compose: document.createElement('canvas'),
    jpeg: document.createElement('canvas'),
    mosh: document.createElement('canvas'),
    swap: document.createElement('canvas'),
    hold: document.createElement('canvas'),
  } as any;

  const state: EngineState = {
    frameCounter: 0,
    lastInjectTime: 0,
    isInjecting: false,
    injectFrameCount: 0,
    historyFrames: [],
    prevShaderMoshEnabled: false,
  };

  return { state, buffers };
}

export function getContextsFrom(eng: EngineContext) {
  return {
    inCtx: eng.buffers.input.getContext('2d', { willReadFrequently: true })!,
    compCtx: eng.buffers.compose.getContext('2d', { willReadFrequently: true })!,
    jpgCtx: eng.buffers.jpeg.getContext('2d', { willReadFrequently: true })!,
    moshCtx: eng.buffers.mosh.getContext('2d', { willReadFrequently: true })!,
    swapCtx: eng.buffers.swap.getContext('2d', { willReadFrequently: true })!,
    holdCtx: eng.buffers.hold.getContext('2d', { willReadFrequently: true })!,
  };
}

export function resetEngineContext(eng: EngineContext) {
  const s = eng.state;
  s.frameCounter = 0;
  s.historyFrames = [];
  s.lastInjectTime = 0;
  s.isInjecting = false;
  s.injectFrameCount = 0;
  s.prevShaderMoshEnabled = false;

  Object.values(eng.buffers).forEach((canvas: any) => {
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
  });
}

