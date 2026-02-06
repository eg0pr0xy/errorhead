import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface DevCanvasOverlayProps {
  sourceRef: React.RefObject<HTMLCanvasElement>;
  enabled?: boolean;
}

export const DevCanvasOverlay: React.FC<DevCanvasOverlayProps> = ({ sourceRef, enabled = true }) => {
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) return;

    const draw = () => {
      const src = sourceRef.current;
      const dst = overlayRef.current;
      if (src && dst) {
        const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
        const cw = Math.floor(dst.clientWidth || window.innerWidth);
        const ch = Math.floor(dst.clientHeight || window.innerHeight);
        const bw = cw * dpr;
        const bh = ch * dpr;
        if (dst.width !== bw || dst.height !== bh) {
          dst.width = bw;
          dst.height = bh;
        }
        const ctx = dst.getContext('2d');
        if (ctx && src.width > 0 && src.height > 0) {
          ctx.clearRect(0, 0, dst.width, dst.height);
          ctx.drawImage(src, 0, 0, dst.width, dst.height);
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [enabled, sourceRef]);

  if (!enabled) return null;

  return createPortal(
    <div style={{ position: 'fixed', inset: 0 as any, zIndex: 9999, pointerEvents: 'none' }}>
      <canvas ref={overlayRef} style={{ width: '100vw', height: '100vh', display: 'block' }} />
    </div>,
    document.body
  );
};

