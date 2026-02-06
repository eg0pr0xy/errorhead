import type { StrictEffect } from './types';
import type { GlitchParams } from '../../types';
import { EffectInvert } from './builtin/invert';
import { createScanlinesEffect } from './builtin/scanlines';

// Build effect pipeline from GlitchParams.
// Note: Effects are generated as closures capturing preset values.
export function buildEffectsFromParams(params: GlitchParams): StrictEffect[] {
  const list: StrictEffect[] = [];

  // TEMP: Keep invert active to guarantee visibility while validating pipeline
  list.push(EffectInvert);

  // Bind scanlines to preset
  if (params.scanlines) {
    const intensity = typeof params.scanlineIntensity === 'number' ? params.scanlineIntensity : 50;
    list.push(createScanlinesEffect(intensity));
  }

  return list;
}