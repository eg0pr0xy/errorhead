import React from 'react';
import { Panel, Button, Icons } from '../UIComponents';

interface PreviewCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  isProcessing: boolean;
  hasSource: boolean;
  isVideo: boolean;
  togglePlayback: () => void;
  isPlaying: boolean;
  isRecording: boolean;
  fps?: number;
  frameCounter?: number;
}

export const PreviewCanvas: React.FC<PreviewCanvasProps> = ({ 
  canvasRef, isProcessing, hasSource, isVideo, togglePlayback, isPlaying, isRecording, fps, frameCounter
}) => {
  // Canvas is managed exclusively by the render loop in App.tsx
  // Do NOT draw to canvas here - it interferes with the render loop

  return (
    <Panel className="h-full flex flex-col relative overflow-hidden bg-zinc-950">
      {/* Canvas Toolbar - Left */}
      <div className="absolute top-2 left-2 z-20 flex flex-col gap-2">
        {isVideo && (
          <div className="bg-black/80 border border-zinc-800 p-1 flex items-center gap-1">
            <Button
              variant={isPlaying ? 'secondary' : 'primary'}
              size="sm"
              onClick={togglePlayback}
              icon={isPlaying ? <Icons.Pause /> : <Icons.Play />}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </Button>
          </div>
        )}
      </div>
      
      {/* Main Viewport */}
      <div className="flex-1 relative overflow-hidden">
        {/* Recording Indicator */}
        {isRecording && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-2 border border-red-600 bg-black/80 px-2 py-0.5">
              <span className="w-2 h-2 bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-mono text-red-400 tracking-widest">REC</span>
            </div>
          </div>
        )}

        {/* The Canvas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="shadow-2xl transition-transform duration-200 ease-out" style={{ transform: 'scale(1)' }}>
            <canvas
              ref={canvasRef}
              className="block border border-zinc-800"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
            {/* No Signal overlay removed for debugging */}
          </div>
        </div>
      </div>

      {/* Bottom Zoom Controls */}
      <div className="h-8 bg-black border-t border-zinc-900 flex items-center justify-center gap-4 px-4">
        <button onClick={() => {}} className="text-zinc-500 hover:text-white">-</button>
        <span className="text-xs font-mono w-12 text-center text-zinc-400">100%</span>
        <button onClick={() => {}} className="text-zinc-500 hover:text-white">+</button>
      </div>
    </Panel>
  );
};
