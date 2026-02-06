import type { StrictEffect, FrameInfo } from './types';

// Simple in-memory effect stack. Order is the array order.
let STACK: StrictEffect[] = [];

export const setEffectStack = (effects: StrictEffect[]) => {
  STACK = Array.isArray(effects) ? [...effects] : [];
};

export const getEffectStack = (): StrictEffect[] => [...STACK];

export const clearEffectStack = () => { STACK = []; };

export const registerEffect = (effect: StrictEffect) => {
  STACK.push(effect);
};

export const applyEffectStack = async (
  ctx: CanvasRenderingContext2D,
  frame: FrameInfo
) => {
  // Apply in order. Each effect is isolated (save/restore)
  for (const fx of STACK) {
    try {
      ctx.save();
      const ret = fx(ctx, frame);
      if (ret && typeof (ret as Promise<void>).then === 'function') {
        await ret;
      }
    } catch (e) {
      // Non-fatal: do not prevent later effects or future frames
      // eslint-disable-next-line no-console
      console.warn('[Effects] effect failed; continuing', e);
    } finally {
      ctx.restore();
    }
  }
};

