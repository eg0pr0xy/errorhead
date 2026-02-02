
import { GlitchParams } from '../../../types';
import { buffers, randInt } from '../state';

/**
 * Simulates Macroblock corruption by shuffling spatial chunks.
 * Mimics P-Frame decoding errors where motion vectors point to wrong indices.
 */
export const applyMacroblockCorruption = (
  moshCtx: CanvasRenderingContext2D, 
  params: GlitchParams, 
  width: number, 
  height: number, 
  tBlocks: number
) => {
  const size = Math.max(8, params.blockSize);
  const cols = Math.ceil(width / size);
  const rows = Math.ceil(height / size);
  const intensity = Math.max(0, Math.min(100, params.blockList)) / 100;
  const totalBlocks = cols * rows;
  
  // Process 10% of total blocks scaled by intensity
  const processCount = Math.floor(totalBlocks * intensity * 0.1);

  moshCtx.save();
  for (let i = 0; i < processCount; i++) {
    const rC = randInt(0, cols, tBlocks + i);
    const rR = randInt(0, rows, tBlocks + i + 1);
    const dx = rC * size;
    const dy = rR * size;
    
    // Simulate a corrupted motion vector pointing elsewhere in the buffer
    const vectorX = randInt(-2, 2, tBlocks + i * 2) * size;
    const vectorY = randInt(-2, 2, tBlocks + i * 3) * size;
    
    const sx = Math.max(0, Math.min(width - size, dx + vectorX));
    const sy = Math.max(0, Math.min(height - size, dy + vectorY));
    
    moshCtx.drawImage(buffers.mosh, sx, sy, size, size, dx, dy, size, size);
  }
  moshCtx.restore();
};
