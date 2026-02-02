export interface EngineState {
  frameCounter: number;
  lastInjectTime: number;
  isInjecting: boolean;
  injectFrameCount: number;
  historyFrames: HTMLCanvasElement[];
  prevShaderMoshEnabled: boolean;
}

export interface EngineBuffers {
  input: HTMLCanvasElement;
  compose: HTMLCanvasElement;
  jpeg: HTMLCanvasElement;
  mosh: HTMLCanvasElement;
  swap: HTMLCanvasElement;
  hold: HTMLCanvasElement;
}

export interface EngineContext {
  state: EngineState;
  buffers: EngineBuffers;
}

