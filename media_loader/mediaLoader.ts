import React, { MutableRefObject } from 'react';

/*
 * MEDIA IMPORT — KNOWN-GOOD SHARED ENTRY (DO NOT SPLIT)
 * -----------------------------------------------------
 * This module is the single, shared entry for loading external media.
 * It intentionally keeps two minimal loaders that both end in the SAME
 * render contract for the renderer: a sized canvas + a ready HTML element.
 *
 * Media Contract (explicit)
 * - Image: static frame source; width/height known after onload.
 * - Video: dynamic frame source; width/height known after onloadedmetadata; frames update per animation frame.
 * - Both: must deliver a drawable frame via the SAME render entry point (CanvasImageSource).
 *
 * RULES (DO NOT REFACTOR CASUALLY):
 * - Image uses onload + naturalWidth/naturalHeight. Size canvas there.
 * - Video uses onloadedmetadata + videoWidth/videoHeight. Size canvas there.
 * - Both return a resolved Promise only after dimensions are known.
 * - URL lifecycle is managed via revokeUrl(lastUrlRef) to avoid leaks.
 *
 * WHY NOT SPLIT/ABSTRACT:
 * - Prior attempts to “improve” by adding multi-event flows (loadeddata/canplay)
 *   and extra guards introduced race conditions where dimensions were never
 *   observed, breaking BOTH image and video import. Keep this logic minimal.
 */

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
      // Non-intrusive, explicit warning path (no behavior change)
      console.error('[Media Core] Image load error. This should not fail silently.', e);
      reject(e);
    };
    img.src = url;
  });
}

export function loadVideoTo(video: HTMLVideoElement, canvas: HTMLCanvasElement | null, file: File, lastUrlRef: React.MutableRefObject<string | null>): Promise<MediaLoadResult> {
  // NOTE: onloadedmetadata is the earliest reliable point where
  // videoWidth/videoHeight are populated across browsers. Do not replace
  // with multi-event finish logic unless you prove dimension readiness.
  revokeUrl(lastUrlRef);
  const url = URL.createObjectURL(file);
  lastUrlRef.current = url;
  return new Promise((resolve, reject) => {
    const onMeta = () => {
      try { console.log('[Import] video onloadedmetadata'); } catch {}
      const w = video.videoWidth || 0;
      const h = video.videoHeight || 0;
      if (canvas && w > 0 && h > 0) {
        canvas.width = w;
        canvas.height = h;
        console.log(`[Import] Video loaded: ${w}x${h}, canvas set to ${canvas.width}x${canvas.height}`);
      }
      resolve({ url, width: w, height: h });
    };
    video.onloadedmetadata = onMeta;
    video.onerror = (e) => {
      // Non-intrusive, explicit warning path (no behavior change)
      console.error('[Media Core] Video load error. This should not fail silently.', e);
      reject(e as any);
    };
    video.src = url;
    try { video.load(); } catch {}
    // Attempt autoplay (muted/inline)
    video.play().then(() => { try { console.log('[Import] video play started'); } catch {} }).catch(() => {/* autoplay may be blocked; user can press play */});
  });
}
