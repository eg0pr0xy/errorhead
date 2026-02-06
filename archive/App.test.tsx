import React, { useState, useEffect, useRef } from 'react';
import { PreviewCanvas } from './components/Canvas/PreviewCanvas';

const AppTest: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    console.log('AppTest: Canvas ref status:', !!canvasRef.current);
    if (canvasRef.current) {
      console.log('AppTest: Canvas dimensions:', canvasRef.current.width, 'x', canvasRef.current.height);
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        console.log('AppTest: Context obtained');
        
        // Draw test pattern
        const width = 800;
        const height = 600;
        
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        
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
        
        console.log('AppTest: Test pattern drawn');
      }
    }
  }, [canvasRef]);
  
  return (
    <div className="h-screen w-screen bg-black">
      <PreviewCanvas
        canvasRef={canvasRef}
        isProcessing={false}
        hasSource={false}
        isVideo={false}
        togglePlayback={() => {}}
        isPlaying={false}
        isRecording={false}
      />
    </div>
  );
};

export default AppTest;