import React, { useEffect, useRef } from 'react';

interface MinimalCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export const MinimalCanvas: React.FC<MinimalCanvasProps> = ({ canvasRef }) => {
  const localRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    console.log('MinimalCanvas: localRef', !!localRef.current);
    if (localRef.current) {
      const ctx = localRef.current.getContext('2d');
      if (ctx) {
        console.log('MinimalCanvas: context obtained');
        
        const width = 800;
        const height = 600;
        localRef.current.width = width;
        localRef.current.height = height;
        
        ctx.clearRect(0, 0, width, height);
        
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, '#000000');
        gradient.addColorStop(0.5, '#00ff00');
        gradient.addColorStop(1, '#0000ff');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(width * 0.25, height * 0.25, width * 0.5, height * 0.5);
        
        ctx.fillStyle = '#ff0000';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('CANVAS TEST', width / 2, height / 2);
        
        console.log('MinimalCanvas: test pattern drawn');
      }
    }
  }, [localRef]);
  
  // Sync with parent ref
  useEffect(() => {
    if (localRef.current) {
      (canvasRef as any).current = localRef.current;
    }
  }, [localRef]);
  
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <canvas
        ref={localRef}
        style={{ border: '2px solid #444', backgroundColor: '#000' }}
      />
    </div>
  );
};