import type { GlitchParams } from '../../types';
import type { EngineContext } from '../../engine/engineTypes';

/**
 * EFFECT CONTRACT (LOCKED)
 * ------------------------
 * Effects consume frames; they do not create or load media.
 * Effects are optional and layered AFTER the base drawImage.
 * Effects MUST NOT gate base rendering.
 *
 * MediaCore remains isolated. Effects receive a CanvasImageSource only.
 */

export type EffectFn = (
  ctx: CanvasRenderingContext2D,          // final render target
  source: CanvasImageSource,              // current frame (image or video)
  params: Readonly<GlitchParams>,         // read-only parameters for this frame
  width: number,                          // output canvas width (fixed)
  height: number,                         // output canvas height (fixed)
  time: number,                           // global time (seconds)
  audioLevel?: number,                    // optional audio modulation level [0..1]
  engine?: EngineContext                  // optional engine/buffer context for advanced effects
) => void | Promise<void>;

export interface Effect {
  /** stable identifier */
  id: string;
  /** human-friendly name */
  name: string;
  /** ordering; lower runs earlier; default 100 */
  order?: number;
  /** optional quick toggle based on params */
  isActive?: (params: Readonly<GlitchParams>) => boolean;
  /** apply effect; MUST NOT throw (swallow internally if needed) */
  apply: EffectFn;
}

/**
 * RULES (do not violate):
 * - Do NOT create <img> or <video> elements.
 * - Do NOT call play/pause/seek on media.
 * - Do NOT load files or call URL.createObjectURL.
 * - Do NOT mutate params; treat as read-only.
 * - Do NOT gate base rendering; effect failure must not blank the frame.
 *
 * SAFE EXTENSION:
 * - Draw only to the provided ctx (and engine buffers if provided).
 * - Use (width,height) as the sole coordinate system.
 * - Honor image smoothing settings from the caller unless you need a
 *   temporary change (restore state afterwards).
 */

// -----------------------------------------------------------------------------
// STRICT EFFECT CONTRACT (CANONICAL)
// -----------------------------------------------------------------------------
// Effects operate ONLY after the base image/video has been drawn by the renderer.
// They MUST NOT clear the canvas, MUST NOT draw the base image/video, and MUST
// ONLY modify existing pixels. Effects MUST be side‑effect‑free beyond ctx.

export type SourceKind = 'image' | 'video';

export interface FrameInfo {
  width: number;          // output canvas width
  height: number;         // output canvas height
  time: number;           // global time (seconds)
  sourceType: SourceKind; // current media kind
  audioData?: Float32Array | null; // optional, reserved for future audio coupling
}

export type StrictEffect = (
  ctx: CanvasRenderingContext2D,
  frame: FrameInfo
) => void | Promise<void>;

/**
 * STRICT RULES
 * - MUST NOT clear the canvas (no clearRect/fill full‑frame backgrounds).
 * - MUST NOT draw the base image/video (renderer already did it).
 * - MUST ONLY modify existing pixels (filters, composites, blend modes, etc.).
 * - MUST be side‑effect‑free beyond ctx (no globals, no DOM, no media control).
 * - SHOULD save/restore any ctx state they change.
 */
