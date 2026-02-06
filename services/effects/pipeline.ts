import type { StrictEffect } from './types';
import { EffectInvert } from './builtin/invert';

// Simple effect pipeline: ordered list of strict effects.
// Activate EffectInvert by default to confirm pipeline works.
export const activeEffects: StrictEffect[] = [
  EffectInvert,
];
