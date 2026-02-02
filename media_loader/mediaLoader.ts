import React, { MutableRefObject } from 'react';

export interface MediaLoadResult {
  url: string;
  width: number;
  height: number;
}

export function revokeUrl(ref: React.MutableRefObject<string | null>) {
  if (ref.current) {
    try { URL.revokeObjectURL(ref.current); } catch {}
    ref.current = null;
  }
}

export function loadImageTo(img: HTMLImageElement, canvas: HTMLCanvasElement | null, file: File, lastUrlRef: React.MutableRefObject<string | null>): Promise<MediaLoadResult> {
  revokeUrl(lastUrlRef);
  const url = URL.createObjectURL(file);
  lastUrlRef.current = url;
  return new Promise((resolve, reject) => {
    // IMPORTANT: Hidden <img> elements report layout width/height as 0.
    // Always use intrinsic dimensions (naturalWidth/naturalHeight) once decoded.
    // The original black-frame bug came from trusting layout sizes of a hidden image,
    // which caused the render loop to skip painting (opaque canvas defaults to black).
    img.onload = () => {
      try { console.log('[Import] image onload'); } catch {}
      const w = img.naturalWidth || img.width || 0;
      const h = img.naturalHeight || img.height || 0;
      if (canvas && w > 0 && h > 0) {
        canvas.width = w;
        canvas.height = h;
        console.log(`[Import] Image loaded: ${w}x${h}, canvas set to ${canvas.width}x${canvas.height}`);
      }
      resolve({ url, width: w, height: h });
    };
    img.onerror = (e) => {
      console.error('[Import] Image load error:', e);
      reject(e);
    };
    img.src = url;
  });
}

export function loadVideoTo(video: HTMLVideoElement, canvas: HTMLCanvasElement | null, file: File, lastUrlRef: React.MutableRefObject<string | null>): Promise<MediaLoadResult> {
  revokeUrl(lastUrlRef);
  const url = URL.createObjectURL(file);
  lastUrlRef.current = url;

  // Ensure proper flags for autoplay policies across browsers
  video.muted = true;
  (video as any).playsInline = true;
  video.loop = true;
  video.preload = 'auto';

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      video.removeEventListener('loadedmetadata', onMeta);
      video.removeEventListener('loadeddata', onData);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('error', onError as any);
    };

    const finish = () => {
      const w = video.videoWidth || 0;
      const h = video.videoHeight || 0;
      if (canvas && w > 0 && h > 0) {
        canvas.width = w;
        canvas.height = h;
        console.log(`[Import] Video loaded: ${w}x${h}, canvas set to ${canvas.width}x${canvas.height}`);
      }
      cleanup();
      resolve({ url, width: w, height: h });
    };

    const onMeta = () => { try { console.log('[Import] video onloadedmetadata'); } catch {}; if (video.videoWidth && video.videoHeight) finish(); };
    const onData = () => { try { console.log('[Import] video onloadeddata'); } catch {}; if (video.videoWidth && video.videoHeight) finish(); };
    const onCanPlay = () => { try { console.log('[Import] video canplay'); } catch {}; if (video.videoWidth && video.videoHeight) finish(); };
    const onError = (e: Event) => { console.error('[Import] Video load error:', e); cleanup(); reject(e as any); };

    video.addEventListener('loadedmetadata', onMeta);
    video.addEventListener('loadeddata', onData);
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('error', onError as any, { once: true });

    // Apply source last
    video.src = url;
    try { video.load(); } catch {}
    // Attempt autoplay (allowed if muted)
    video.play().then(() => { try { console.log('[Import] video play started'); } catch {} }).catch((err) => {
      try { console.warn('[Import] Autoplay blocked, waiting for user gesture', err); } catch {}
    });

    // Fallback: if events don't fire but dimensions are available shortly after
    setTimeout(() => {
      if (video.videoWidth && video.videoHeight) finish();
    }, 500);
  });
}
