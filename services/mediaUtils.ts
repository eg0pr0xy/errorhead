export function getImageDims(img: HTMLImageElement): { w: number; h: number } {
  const w = img.naturalWidth || img.width || 0;
  const h = img.naturalHeight || img.height || 0;
  return { w, h };
}

export function getVideoDims(v: HTMLVideoElement): { ready: boolean; w: number; h: number } {
  const readyState = v.readyState;
  const ready = readyState >= (v.HAVE_CURRENT_DATA || 2);
  const w = v.videoWidth || 0;
  const h = v.videoHeight || 0;
  return { ready, w, h };
}

export function getSourceDims(source: CanvasImageSource): { w: number; h: number } {
  if (source instanceof HTMLVideoElement) {
    return { w: source.videoWidth || 0, h: source.videoHeight || 0 };
  }
  if (source instanceof HTMLImageElement) {
    const img = source as HTMLImageElement;
    return { w: img.naturalWidth || img.width || 0, h: img.naturalHeight || img.height || 0 };
  }
  const c = source as HTMLCanvasElement;
  return { w: (c && c.width) || 0, h: (c && c.height) || 0 };
}

