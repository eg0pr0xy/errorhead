/*
 * PIPELINE ORCHESTRATION BOUNDARY (LOCKED)
 * ----------------------------------------
 * This module only exposes orchestrators that operate on canvases.
 * Media import (creating <img>/<video>, file loading, object URLs) is OUTSIDE
 * this module and handled by App + media_loader.
 *
 * Effects/temporal stages consume frames from canvases/buffers.
 * They MUST NOT create media elements or load files.
 */
export { renderGlitch, resetGlitchState } from '../services/glitchService';
export { createEngineContext, resetEngineContext } from '../engine/createEngineContext';
export type { EngineContext } from '../engine/engineTypes';
