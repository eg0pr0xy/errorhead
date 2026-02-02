import { GlitchParams } from '../types';
import { EngineContext } from '../engine/engineTypes';

export function applyIFrameDestructionS(
  eng: EngineContext,
  moshCtx: CanvasRenderingContext2D,
  bloom: number,
  softReset: number,
  width: number,
  height: number
) {
  const bloom01 = Math.max(0, Math.min(1, (Number.isFinite(bloom) ? bloom : 0) / 100));
  const softReset01 = Math.max(0, Math.min(1, (Number.isFinite(softReset) ? softReset : 0) / 100));

  moshCtx.save();
  if (softReset01 <= 0) {
    moshCtx.globalAlpha = 1.0;
    moshCtx.globalCompositeOperation = 'source-over';
    moshCtx.clearRect(0, 0, width, height);
  } else {
    moshCtx.globalCompositeOperation = 'destination-out';
    moshCtx.globalAlpha = 1.0 - softReset01;
    moshCtx.fillStyle = '#000000';
    moshCtx.fillRect(0, 0, width, height);
    moshCtx.globalCompositeOperation = 'source-over';
    moshCtx.globalAlpha = 1.0;
  }
  moshCtx.drawImage(eng.buffers.input, 0, 0, width, height);
  if (bloom01 > 0) {
    moshCtx.globalCompositeOperation = 'screen';
    moshCtx.globalAlpha = bloom01;
    moshCtx.fillStyle = '#FFFFFF';
    moshCtx.fillRect(0, 0, width, height);
  }
  moshCtx.restore();
  eng.state.historyFrames.length = 0;
}

export function applyMotionVectorS(
  eng: EngineContext,
  swapCtx: CanvasRenderingContext2D,
  params: GlitchParams,
  width: number,
  height: number,
  tMosh: number
) {
  let refSource: CanvasImageSource = eng.buffers.mosh;
  const refSwapProb = Math.max(0, Math.min(100, params.refSwap));
  if (refSwapProb > 0 && eng.state.historyFrames.length > 0) {
    const r = (v: number) => {
      const x = Math.sin(v) * 10000;
      return x - Math.floor(x);
    };
    const p = r(tMosh) * 100;
    if (p < refSwapProb) {
      const idx = Math.floor(r(tMosh + 1) * eng.state.historyFrames.length);
      refSource = eng.state.historyFrames[idx];
    }
  }

  swapCtx.save();
  swapCtx.clearRect(0, 0, width, height);

  // PHASE 1 ENHANCEMENT: Motion Residue Accumulation
  // When motionResidue > 0, we add small deltas that compound over time
  // This creates true codec-like artifacts where errors accumulate
  const residue = (params.motionResidue ?? 0) / 100;
  
  let zoom = 1 + (params.flowZoom / 500);
  let rot = (params.flowRotate * Math.PI) / 180;
  let transX = params.flowX;
  let transY = params.flowY;

  if (residue > 0) {
    // Add small random motion deltas that accumulate
    // These simulate motion prediction errors in video codecs
    const seed = Math.floor(tMosh * 10);
    const deltaX = (Math.sin(seed * 0.1) * residue * 0.5);
    const deltaY = (Math.cos(seed * 0.1) * residue * 0.5);
    const deltaRot = (Math.sin(seed * 0.2) * residue * 0.01);
    const deltaZoom = (Math.cos(seed * 0.3) * residue * 0.001);
    
    transX += deltaX;
    transY += deltaY;
    rot += deltaRot;
    zoom += deltaZoom;
  }

  swapCtx.translate(width / 2 + transX, height / 2 + transY);
  swapCtx.rotate(rot);
  swapCtx.scale(zoom, zoom);
  swapCtx.translate(-width / 2, -height / 2);
  swapCtx.drawImage(refSource, 0, 0, width, height);
  swapCtx.restore();
}

export function applyFeedbackS(
  eng: EngineContext,
  moshCtx: CanvasRenderingContext2D,
  feedback: number,
  width: number,
  height: number
) {
  const fb = Math.max(0, Math.min(100, feedback));
  moshCtx.save();
  if (fb < 100) {
    moshCtx.globalCompositeOperation = 'destination-out';
    moshCtx.globalAlpha = (100 - fb) * 0.01;
    moshCtx.fillStyle = '#000000';
    moshCtx.fillRect(0, 0, width, height);
  }
  moshCtx.globalCompositeOperation = 'source-over';
  moshCtx.globalAlpha = 1.0;
  moshCtx.drawImage(eng.buffers.swap, 0, 0, width, height);
  moshCtx.restore();
}

export function applyMacroblockCorruptionS(
  eng: EngineContext,
  moshCtx: CanvasRenderingContext2D,
  params: GlitchParams,
  width: number,
  height: number,
  tBlocks: number
) {
  const size = Math.max(8, params.blockSize);
  const cols = Math.ceil(width / size);
  const rows = Math.ceil(height / size);
  const intensity = Math.max(0, Math.min(100, params.blockList)) / 100;
  const totalBlocks = cols * rows;
  const processCount = Math.floor(totalBlocks * intensity * 0.1);

  const randInt = (min: number, max: number, seed: number) => {
    const x = Math.sin(seed) * 10000;
    const random = x - Math.floor(x);
    return Math.floor(random * (max - min + 1)) + min;
  };

  moshCtx.save();
  for (let i = 0; i < processCount; i++) {
    const rC = randInt(0, cols, tBlocks + i);
    const rR = randInt(0, rows, tBlocks + i + 1);
    const dx = rC * size;
    const dy = rR * size;
    const vectorX = randInt(-2, 2, tBlocks + i * 2) * size;
    const vectorY = randInt(-2, 2, tBlocks + i * 3) * size;
    const sx = Math.max(0, Math.min(width - size, dx + vectorX));
    const sy = Math.max(0, Math.min(height - size, dy + vectorY));
    moshCtx.drawImage(eng.buffers.mosh, sx, sy, size, size, dx, dy, size, size);
  }
  moshCtx.restore();
}

