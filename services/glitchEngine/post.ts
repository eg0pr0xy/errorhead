
import { GlitchParams } from '../../types';
import { buffers, randInt } from './state';

export const applyPostProcessing = (
  ctx: CanvasRenderingContext2D, 
  source: CanvasImageSource, 
  params: GlitchParams, 
  width: number, 
  height: number, 
  tGlobal: number
) => {
  const jpgCtx = buffers.jpeg.getContext('2d')!;
  const contrast = 100 + (params.amount / 10);
  const filterString = `brightness(${params.brightness}%) contrast(${contrast}%)`;

  const gShift = params.rgbShift + params.colorOffset;
  const rX = params.redShift - (gShift * 0.5);
  const gX = params.greenShift;
  const bX = params.blueShift + (gShift * 0.5);

  if (rX !== 0 || gX !== 0 || bX !== 0) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'screen';

    const drawChannel = (color: string, offset: number) => {
      jpgCtx.globalCompositeOperation = 'source-over';
      jpgCtx.clearRect(0, 0, width, height);
      jpgCtx.filter = filterString;
      jpgCtx.drawImage(source, 0, 0);
      jpgCtx.filter = 'none';
      jpgCtx.globalCompositeOperation = 'multiply';
      jpgCtx.fillStyle = color;
      jpgCtx.fillRect(0, 0, width, height);
      ctx.drawImage(buffers.jpeg, offset, 0);
    };

    drawChannel('#FF0000', rX);
    drawChannel('#00FF00', gX);
    drawChannel('#0000FF', bX);
    ctx.globalCompositeOperation = 'source-over';
  } else {
    ctx.filter = filterString;
    ctx.drawImage(source, 0, 0, width, height);
    ctx.filter = 'none';
  }

  // Scanlines
  if (params.scanlines) {
    ctx.fillStyle = `rgba(0, 0, 0, ${params.scanlineIntensity / 200})`;
    for (let i = 0; i < height; i += 4) ctx.fillRect(0, i, width, 2);
  }

  // Digital Noise Slivers
  if (params.noise > 0) {
    const noiseAlpha = (params.noise / 100) * 0.15;
    ctx.fillStyle = `rgba(255, 255, 255, ${noiseAlpha})`;
    const noiseCount = Math.floor(params.noise * 0.3);
    for (let n = 0; n < noiseCount; n++) {
      const nw = randInt(10, width / 2, tGlobal + n);
      const nx = randInt(0, width - nw, tGlobal + n + 1);
      const ny = randInt(0, height, tGlobal + n + 2);
      ctx.fillRect(nx, ny, nw, 1);
    }
  }
};
