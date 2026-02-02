
import { GlitchParams } from '../../types';
import { buffers, randInt, noise } from './state';

export const applyMelt = (
  compCtx: CanvasRenderingContext2D, 
  swapCtx: CanvasRenderingContext2D, 
  params: GlitchParams, 
  width: number, 
  height: number, 
  time: number
) => {
  swapCtx.save();
  swapCtx.clearRect(0, 0, width, height);
  swapCtx.drawImage(buffers.compose, 0, 0, width, height);

  const intensity = Math.max(0, Math.min(100, params.melt));
  const baseStripWidth = Math.max(2, 5 + (100 - intensity) / 2);
  const stripCount = Math.ceil(width / baseStripWidth);
  const stripWidth = width / stripCount;

  compCtx.save();
  if (params.burn > 50) compCtx.globalCompositeOperation = 'hard-light';

  for (let i = 0; i < stripCount; i++) {
    const x = i * stripWidth;
    const speed = (Math.sin(i * 99.1) + 1.5) * (intensity / 50);
    const wave = Math.sin((time * speed) + (i * 0.2)) * 0.5 + 0.5;

    if (noise(i + time) < (intensity / 80) || wave > 0.8) {
      let drop = (Math.sin(i * 132.1 + time * speed) + 1) * (height * (intensity / 100) * 0.8);
      if (params.burn > 0) {
          drop += randInt(-params.burn / 2, params.burn / 2, i + time);
      }
      compCtx.drawImage(buffers.swap, x, 0, stripWidth, height, x, drop, stripWidth, height);
    }
  }
  compCtx.restore();
  swapCtx.restore();
};

export const applyShred = (
  compCtx: CanvasRenderingContext2D, 
  swapCtx: CanvasRenderingContext2D, 
  intensity: number, 
  width: number, 
  height: number, 
  time: number
) => {
  swapCtx.save();
  swapCtx.clearRect(0, 0, width, height);
  swapCtx.drawImage(buffers.compose, 0, 0, width, height);

  const shredIntensity = Math.max(0, Math.min(100, intensity));
  const shredCount = Math.floor(width / Math.max(2, 40 - (shredIntensity / 3)));
  const sliceWidth = width / shredCount;
  
  compCtx.save();
  compCtx.clearRect(0, 0, width, height);

  for (let i = 0; i < shredCount; i++) {
    const x = i * sliceWidth;
    const offY = (noise(i * 20.2 + time) - 0.5) * height * (shredIntensity / 100);
    
    compCtx.drawImage(buffers.swap, x, 0, sliceWidth, height, x, offY, sliceWidth, height);
    
    if (offY > 0) {
      compCtx.drawImage(buffers.swap, x, height - offY, sliceWidth, offY, x, 0, sliceWidth, offY);
    } else {
      compCtx.drawImage(buffers.swap, x, 0, sliceWidth, -offY, x, height + offY, sliceWidth, -offY);
    }
  }
  compCtx.restore();
  swapCtx.restore();
};

export const applyScatter = (
  compCtx: CanvasRenderingContext2D, 
  source: CanvasImageSource, 
  params: GlitchParams, 
  width: number, 
  height: number, 
  time: number
) => {
  const intensity = Math.max(0, Math.min(100, params.scatter));
  if (intensity <= 0) return;

  const chunkCount = Math.floor((intensity / 100) * 60) + 5;
  
  compCtx.save();
  for (let i = 0; i < chunkCount; i++) {
    const seed = time * 10 + i * 133.7;
    const isVert = randInt(0, 10, seed) > 7;
    
    let w = isVert ? randInt(4, width / 40, seed) : randInt(40, width / 4, seed);
    let h = isVert ? randInt(40, height / 4, seed + 1) : randInt(4, height / 40, seed + 1);

    const srcX = randInt(0, width - w, seed + 2);
    const srcY = randInt(0, height - h, seed + 3);
    
    // Displacement vector
    const dx = srcX + randInt(-100, 100, seed + 4) * (intensity / 40);
    const dy = srcY + randInt(-50, 50, seed + 5) * (intensity / 60);

    // Blending modes create the turquoise/pink color shifts
    if (params.burn > 30) {
      const rnd = noise(seed);
      if (rnd > 0.85) compCtx.globalCompositeOperation = 'difference';
      else if (rnd > 0.7) compCtx.globalCompositeOperation = 'overlay';
      else if (rnd > 0.5) compCtx.globalCompositeOperation = 'screen';
    }

    const scale = params.burn > 50 ? 1 + ((noise(seed) - 0.5) * (params.burn / 150)) : 1;
    compCtx.drawImage(source, srcX, srcY, w, h, dx - (w * scale - w) / 2, dy - (h * scale - h) / 2, w * scale, h * scale);
    
    // Reset to default for next chunk
    compCtx.globalCompositeOperation = 'source-over';
  }
  compCtx.restore();
};
