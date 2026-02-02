import { EngineContext } from './engineTypes';
import { state as globalState, buffers as globalBuffers } from '../services/glitchEngine/state';

export function getGlobalEngineContext(): EngineContext {
  return {
    state: globalState as any,
    buffers: globalBuffers as any,
  };
}

