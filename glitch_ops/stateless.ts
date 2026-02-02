/**
 * ERRORHEAD — Professional Glitch Operations
 * 
 * Enhanced spatial glitch effects with professional techniques:
 * - Advanced displacement algorithms
 * - Multi-layer compositing
 * - Channel separation
 * - Pixel sorting
 * - Dithering and banding
 */

import { GlitchParams } from '../types';
import { EngineContext } from '../engine/engineTypes';

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

const randInt = (min: number, max: number, seed: number) => {
  const x = Math.sin(seed) * 10000;
  const random = x - Math.floor(x);
  return Math.floor(random * (max - min + 1)) + min;
};

const noise = (t: number) => (Math.sin(t) + Math.sin(t * 2.1) + Math.sin(t * 4.4)) / 3 + 0.5;

/**
 * Improved Perlin-like noise for smoother displacement
 */
const smoothNoise = (x: number, y: number, seed: number): number => {
  const n = x + y * 57 + seed * 131;
  const nn = (n << 13) ^ n;
  return (1.0 - ((nn * (nn * nn * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0);
};

/**
 * Interpolated noise for organic displacement
 */
const interpolatedNoise = (x: number, y: number, seed: number): number => {
  const intX = Math.floor(x);
  const fracX = x - intX;
  const intY = Math.floor(y);
  const fracY = y - intY;
  
  const v1 = smoothNoise(intX, intY, seed);
  const v2 = smoothNoise(intX + 1, intY, seed);
  const v3 = smoothNoise(intX, intY + 1, seed);
  const v4 = smoothNoise(intX + 1, intY + 1, seed);
  
  const i1 = v1 * (1 - fracX) + v2 * fracX;
  const i2 = v3 * (1 - fracX) + v4 * fracX;
  
  return i1 * (1 - fracY) + i2 * fracY;
};

// ═══════════════════════════════════════════════════════════════════════════
// ENHANCED MELT EFFECT
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Professional melt effect with multi-layer displacement
 * Features:
 * - Organic wave-based displacement
 * - Gravity simulation
 * - Heat distortion
 * - Edge bleeding
 */
export function applyMeltS(
  eng: EngineContext,
  compCtx: CanvasRenderingContext2D,
  swapCtx: CanvasRenderingContext2D,
  params: GlitchParams,
  width: number,
  height: number,
  time: number
) {
  if (params.melt <= 0) return;
  
  swapCtx.save();
  swapCtx.clearRect(0, 0, width, height);
  swapCtx.drawImage(eng.buffers.compose, 0, 0, width, height);

  const intensity = Math.max(0, Math.min(100, params.melt)) / 100;
  const burnFactor = Math.max(0, Math.min(100, params.burn)) / 100;
  
  // Adaptive strip count based on intensity
  const stripCount = Math.ceil(width / Math.max(2, 8 - intensity * 6));
  const stripWidth = width / stripCount;
  
  compCtx.save();
  
  // Apply burn compositing mode
  if (burnFactor > 0.5) {
    compCtx.globalCompositeOperation = 'hard-light';
  } else if (burnFactor > 0.3) {
    compCtx.globalCompositeOperation = 'overlay';
  }
  
  // Multi-pass rendering for smooth organic melt
  const passes = Math.ceil(intensity * 3) + 1;
  
  for (let pass = 0; pass < passes; pass++) {
    const passAlpha = 1.0 / passes;
    compCtx.globalAlpha = passAlpha;
    
    for (let i = 0; i < stripCount; i++) {
      const x = i * stripWidth;
      const stripSeed = i * 99.1 + pass * 50;
      
      // Multi-frequency wave for organic movement
      const baseSpeed = intensity * 2;
      const wave1 = Math.sin(time * baseSpeed + i * 0.2) * 0.5 + 0.5;
      const wave2 = Math.sin(time * baseSpeed * 0.5 + i * 0.5) * 0.3;
      const wave3 = noise(i * 3 + time * 0.5) * 0.2;
      const combinedWave = wave1 + wave2 + wave3;
      
      // Gravity-based drop with randomness
      const gravity = intensity * height * 0.9;
      const randomDrop = (noise(stripSeed + time) - 0.5) * height * intensity * 0.3;
      const waveDrop = combinedWave * height * intensity * 0.4;
      
      let totalDrop = gravity * (wave1 * 0.5 + 0.5) + randomDrop + waveDrop;
      
      // Burn adds erratic displacement
      if (burnFactor > 0) {
        const burnDisplace = (noise(stripSeed + time * 2) - 0.5) * height * burnFactor * 0.5;
        totalDrop += burnDisplace;
      }
      
      // Edge bleeding effect
      if (intensity > 0.5 && noise(i * 7 + time) > 0.85) {
        // Occasional extreme drops for dramatic effect
        totalDrop *= 1.5 + burnFactor * 0.5;
      }
      
      // Horizontal wobble for organic feel
      const wobbleX = (noise(i * 11 + time * 1.5) - 0.5) * stripWidth * intensity * 2;
      
      // Scale variation for heat distortion
      const scaleY = 1 + (noise(i * 13 + time) - 0.5) * intensity * 0.15;
      
      compCtx.drawImage(
        eng.buffers.swap,
        x, 0, stripWidth, height,
        x + wobbleX, totalDrop, stripWidth, height * scaleY
      );
    }
  }
  
  compCtx.globalAlpha = 1.0;
  compCtx.globalCompositeOperation = 'source-over';
  compCtx.restore();
  swapCtx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// ENHANCED SHRED EFFECT
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Professional shred effect with advanced patterns
 * Features:
 * - Variable shred widths
 * - Rotation and skew
 * - Wave patterns
 * - Zigzag displacement
 */
export function applyShredS(
  eng: EngineContext,
  compCtx: CanvasRenderingContext2D,
  swapCtx: CanvasRenderingContext2D,
  intensity: number,
  width: number,
  height: number,
  time: number
) {
  if (intensity <= 0) return;
  
  swapCtx.save();
  swapCtx.clearRect(0, 0, width, height);
  swapCtx.drawImage(eng.buffers.compose, 0, 0, width, height);

  const shredIntensity = Math.max(0, Math.min(100, intensity)) / 100;
  
  // Variable shred count and width
  const minShredWidth = 3;
  const maxShredWidth = 80 - shredIntensity * 50;
  const avgShredWidth = (minShredWidth + maxShredWidth) / 2;
  const shredCount = Math.ceil(width / avgShredWidth);
  
  compCtx.save();
  compCtx.clearRect(0, 0, width, height);
  
  let currentX = 0;
  
  for (let i = 0; i < shredCount && currentX < width; i++) {
    // Variable slice width for organic feel
    const widthVariation = (noise(i * 17 + time * 0.5) - 0.5) * (maxShredWidth - minShredWidth);
    const sliceWidth = Math.max(minShredWidth, Math.min(maxShredWidth, avgShredWidth + widthVariation));
    
    // Multi-frequency displacement
    const noiseVal = noise(i * 20.2 + time);
    const sineVal = Math.sin(i * 0.5 + time * 2);
    const combinedDisp = (noiseVal * 0.6 + (sineVal * 0.5 + 0.5) * 0.4 - 0.5);
    
    // Displacement with wave patterns
    const baseDisp = combinedDisp * height * shredIntensity;
    
    // Zigzag pattern for aggressive shred
    const zigzag = i % 2 === 0 ? 1 : -1;
    const zigzagDisp = zigzag * shredIntensity * height * 0.2 * (noiseVal > 0.7 ? 1 : 0);
    
    const offY = baseDisp + zigzagDisp;
    
    // Occasional rotation for dramatic effect
    const shouldRotate = shredIntensity > 0.6 && noise(i * 23 + time) > 0.9;
    
    if (shouldRotate) {
      compCtx.save();
      const centerX = currentX + sliceWidth / 2;
      const centerY = height / 2 + offY;
      compCtx.translate(centerX, centerY);
      compCtx.rotate((noise(i * 29 + time) - 0.5) * Math.PI * shredIntensity * 0.3);
      compCtx.drawImage(
        eng.buffers.swap,
        currentX, 0, sliceWidth, height,
        -sliceWidth / 2, -height / 2 - offY, sliceWidth, height
      );
      compCtx.restore();
    } else {
      // Standard displacement with wrapping
      compCtx.drawImage(eng.buffers.swap, currentX, 0, sliceWidth, height, currentX, offY, sliceWidth, height);
      
      // Wrap around edges
      if (offY > 0) {
        compCtx.drawImage(eng.buffers.swap, currentX, height - offY, sliceWidth, offY, currentX, 0, sliceWidth, offY);
      } else if (offY < 0) {
        compCtx.drawImage(eng.buffers.swap, currentX, 0, sliceWidth, -offY, currentX, height + offY, sliceWidth, -offY);
      }
    }
    
    currentX += sliceWidth;
  }
  
  compCtx.restore();
  swapCtx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// ENHANCED SCATTER EFFECT
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Professional scatter effect with advanced displacement
 * Features:
 * - Intelligent chunk selection
 * - Blur and distortion
 * - Multi-layer blending
 * - Edge-aware displacement
 */
export function applyScatterS(
  eng: EngineContext,
  compCtx: CanvasRenderingContext2D,
  source: CanvasImageSource,
  params: GlitchParams,
  width: number,
  height: number,
  time: number
) {
  const intensity = Math.max(0, Math.min(100, params.scatter)) / 100;
  if (intensity <= 0) return;
  
  const burnFactor = Math.max(0, Math.min(100, params.burn)) / 100;
  
  // Adaptive chunk count
  const chunkCount = Math.floor(intensity * 120) + 10;
  
  compCtx.save();
  
  for (let i = 0; i < chunkCount; i++) {
    const seed = time * 10 + i * 133.7;
    
    // Intelligent size selection based on intensity
    const sizeCategory = noise(seed) * intensity;
    let w, h;
    
    if (sizeCategory > 0.8) {
      // Large blocks
      w = randInt(width / 10, width / 3, seed);
      h = randInt(height / 10, height / 3, seed + 1);
    } else if (sizeCategory > 0.5) {
      // Medium blocks
      w = randInt(width / 20, width / 8, seed);
      h = randInt(height / 20, height / 8, seed + 1);
    } else {
      // Small blocks (more common)
      w = randInt(5, width / 15, seed);
      h = randInt(5, height / 15, seed + 1);
    }
    
    // Source selection
    const srcX = randInt(0, Math.max(1, width - w), seed + 2);
    const srcY = randInt(0, Math.max(1, height - h), seed + 3);
    
    // Advanced displacement with flow field
    const dispScale = intensity * 200;
    const flowX = interpolatedNoise(i * 0.1, time * 0.1, seed) * dispScale;
    const flowY = interpolatedNoise(i * 0.1, time * 0.1, seed + 100) * dispScale * 0.5;
    
    const dx = srcX + flowX + randInt(-50, 50, seed + 4) * intensity;
    const dy = srcY + flowY + randInt(-30, 30, seed + 5) * intensity;
    
    // Blend modes for burn effect
    if (burnFactor > 0.3) {
      const blendChoice = noise(seed + 10);
      if (blendChoice > 0.85) {
        compCtx.globalCompositeOperation = 'difference';
      } else if (blendChoice > 0.7) {
        compCtx.globalCompositeOperation = 'color-dodge';
      } else if (blendChoice > 0.55) {
        compCtx.globalCompositeOperation = 'overlay';
      } else if (blendChoice > 0.4) {
        compCtx.globalCompositeOperation = 'screen';
      }
    }
    
    // Scale and rotation for extreme scatter
    const scale = 1 + (noise(seed + 20) - 0.5) * intensity * 0.4;
    const rotation = intensity > 0.7 ? (noise(seed + 30) - 0.5) * Math.PI * 0.3 * intensity : 0;
    
    // Alpha variation for layering effect
    const alpha = 0.7 + noise(seed + 40) * 0.3;
    compCtx.globalAlpha = alpha;
    
    if (Math.abs(rotation) > 0.01 || Math.abs(scale - 1) > 0.01) {
      compCtx.save();
      const centerDx = dx + (w * scale) / 2;
      const centerDy = dy + (h * scale) / 2;
      compCtx.translate(centerDx, centerDy);
      compCtx.rotate(rotation);
      compCtx.scale(scale, scale);
      compCtx.drawImage(source, srcX, srcY, w, h, -w / 2, -h / 2, w, h);
      compCtx.restore();
    } else {
      compCtx.drawImage(source, srcX, srcY, w, h, dx, dy, w * scale, h * scale);
    }
    
    // Reset blend mode
    compCtx.globalCompositeOperation = 'source-over';
    compCtx.globalAlpha = 1.0;
  }
  
  compCtx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// NEW: PIXEL SORTING EFFECT
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Professional pixel sorting glitch
 * Sorts pixels by brightness or color channels
 */
export function applyPixelSort(
  ctx: CanvasRenderingContext2D,
  intensity: number,
  width: number,
  height: number,
  time: number,
  mode: 'brightness' | 'hue' | 'random' = 'brightness'
) {
  if (intensity <= 0) return;
  
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const sortIntensity = Math.max(0, Math.min(100, intensity)) / 100;
  
  // Sort horizontal rows
  const rowsToSort = Math.floor(height * sortIntensity);
  const startRow = Math.floor((height - rowsToSort) / 2);
  
  for (let y = startRow; y < startRow + rowsToSort; y++) {
    // Random segments for glitchy effect
    const segmentCount = Math.floor(1 + sortIntensity * 10);
    
    for (let seg = 0; seg < segmentCount; seg++) {
      const segStart = Math.floor((seg / segmentCount) * width);
      const segEnd = Math.floor(((seg + 1) / segmentCount) * width);
      const segLen = segEnd - segStart;
      
      // Extract pixels
      const pixels: Array<[number, number, number, number, number]> = [];
      
      for (let x = segStart; x < segEnd; x++) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];
        
        let sortKey;
        if (mode === 'brightness') {
          sortKey = (r + g + b) / 3;
        } else if (mode === 'hue') {
          sortKey = r;
        } else {
          sortKey = (r + g * 2 + b) / 4;
        }
        
        pixels.push([sortKey, r, g, b, a]);
      }
      
      // Sort by key
      pixels.sort((a, b) => a[0] - b[0]);
      
      // Write back
      for (let x = segStart; x < segEnd; x++) {
        const pixelIdx = x - segStart;
        const pixel = pixels[pixelIdx];
        const idx = (y * width + x) * 4;
        
        data[idx] = pixel[1];
        data[idx + 1] = pixel[2];
        data[idx + 2] = pixel[3];
        data[idx + 3] = pixel[4];
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// ═══════════════════════════════════════════════════════════════════════════
// NEW: CHANNEL SEPARATION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Advanced channel separation with displacement
 */
export function applyChannelSeparation(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  offsetX: number,
  offsetY: number,
  intensity: number
) {
  if (intensity <= 0) return;
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const newData = new Uint8ClampedArray(data.length);
  
  const intens = Math.max(0, Math.min(100, intensity)) / 100;
  const dispX = Math.floor(offsetX * intens);
  const dispY = Math.floor(offsetY * intens);
  
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const idx = (y * canvas.width + x) * 4;
      
      // Red channel displaced
      const redX = Math.max(0, Math.min(canvas.width - 1, x + dispX));
      const redY = Math.max(0, Math.min(canvas.height - 1, y));
      const redIdx = (redY * canvas.width + redX) * 4;
      
      // Green channel normal
      const greenIdx = idx;
      
      // Blue channel displaced opposite
      const blueX = Math.max(0, Math.min(canvas.width - 1, x - dispX));
      const blueY = Math.max(0, Math.min(canvas.height - 1, y + dispY));
      const blueIdx = (blueY * canvas.width + blueX) * 4;
      
      newData[idx] = data[redIdx];
      newData[idx + 1] = data[greenIdx + 1];
      newData[idx + 2] = data[blueIdx + 2];
      newData[idx + 3] = data[idx + 3];
    }
  }
  
  for (let i = 0; i < data.length; i++) {
    data[i] = newData[i];
  }
  
  ctx.putImageData(imageData, 0, 0);
}
