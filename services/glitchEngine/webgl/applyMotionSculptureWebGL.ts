
import { GlitchParams } from '../../../types';
import { WebGLMoshEngine } from './WebGLMoshEngine';

let engine: WebGLMoshEngine | null = null;
let isSupported: boolean = true;
let fallbackCanvas: HTMLCanvasElement | null = null;

/**
 * Applies the high-performance WebGL Motion Sculpture effect.
 * Gracefully falls back to a 2D bypass if WebGL2 is unavailable or fails.
 */
export function applyMotionSculptureWebGL(
  params: GlitchParams,
  width: number,
  height: number,
  tMosh: number,
  source: CanvasImageSource
): HTMLCanvasElement {
  // If we already know WebGL is not supported, return the fallback immediately
  if (!isSupported) {
    return getFallback(source, width, height);
  }

  if (!engine) {
    try {
      engine = new WebGLMoshEngine();
      console.info('ERRORHEAD // WebGL2 Motion Sculpture Engine Initialized');
    } catch (e) {
      console.warn('ERRORHEAD // WebGL2 initialization failed. Falling back to Canvas2D path.', e);
      isSupported = false;
      return getFallback(source, width, height);
    }
  }

  try {
    return engine.render(params, tMosh, source);
  } catch (e) {
    console.error('ERRORHEAD // WebGL Render Error:', e);
    // On render error, we might want to kill the engine to prevent infinite loops of errors
    resetWebGLMosh();
    isSupported = false; 
    return getFallback(source, width, height);
  }
}

/**
 * Creates or updates a fallback 2D canvas to return when WebGL fails.
 */
function getFallback(source: CanvasImageSource, width: number, height: number): HTMLCanvasElement {
  if (!fallbackCanvas) {
    fallbackCanvas = document.createElement('canvas');
  }
  
  if (fallbackCanvas.width !== width || fallbackCanvas.height !== height) {
    fallbackCanvas.width = width;
    fallbackCanvas.height = height;
  }
  
  const ctx = fallbackCanvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(source, 0, 0, width, height);
  }
  
  return fallbackCanvas;
}

/**
 * Resets the WebGL engine state and disposes resources.
 */
export function resetWebGLMosh() {
  if (engine) {
    try {
      engine.dispose();
    } catch (e) {
      console.warn('Error during WebGL disposal:', e);
    }
    engine = null;
  }
  // We keep isSupported as is, or reset it if we want to try again after a hard system reset
}

/**
 * Resets the support flag, allowing the engine to attempt re-initialization.
 */
export function restoreWebGLSupport() {
  isSupported = true;
}

// Expose minimal debug info
export function getWebGLMoshDebug() {
  return {
    supported: isSupported,
    engineReady: !!engine,
    ...(engine ? engine.getDebug() : { width: 0, height: 0, lastUploadOk: false, lastError: 0 }),
  };
}
