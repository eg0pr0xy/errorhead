
import React, { useState } from 'react';
import { Panel, Button, Icons } from '../UIComponents';

interface PreviewCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  isProcessing: boolean;
  live: boolean;
  toggleLive: () => void;
  hasSource: boolean;
  isVideo: boolean;
  togglePlayback: () => void;
  onStop: () => void;
  isPlaying: boolean;
  isRecording: boolean;
  fps?: number;
  frameCounter?: number;
}

export const PreviewCanvas: React.FC<PreviewCanvasProps> = ({ 
  canvasRef, isProcessing, live, toggleLive, hasSource, isVideo, togglePlayback, onStop, isPlaying, isRecording, fps, frameCounter
}) => {
  const [zoom, setZoom] = useState(1);
  const [showHUD, setShowHUD] = useState(true);

  return (
    <Panel className="h-full flex flex-col relative overflow-hidden bg-zinc-950">
      {/* Canvas Toolbar - Left */}
      <div className="absolute top-2 left-2 z-20 flex flex-col gap-2">
         {isVideo && (
           <div className="bg-black/80 border border-zinc-800 p-1 flex gap-1">
              <Button 
                variant={isPlaying ? 'secondary' : 'primary'} size="sm" 
                onClick={togglePlayback}
                icon={isPlaying ? <Icons.Pause /> : <Icons.Play />}
              >
                {isPlaying ? "PAUSE" : "PLAY"}
              </Button>
              <Button 
                variant="secondary"
                size="sm" 
                onClick={onStop}
                icon={<Icons.Stop />}
              >
                STOP
              </Button>
           </div>
         )}
      </div>

      {/* Canvas Toolbar - Right */}
      <div className="absolute top-2 right-2 z-20 flex gap-2">
         <Button 
            onClick={() => setShowHUD(!showHUD)} 
            variant="secondary" 
            size="sm"
            icon={<Icons.Grid />}
            title="Toggle HUD Overlay"
         >
            {showHUD ? "HUD ON" : "HUD OFF"}
         </Button>
         <Button 
            onClick={toggleLive} 
            variant={live ? "primary" : "secondary"} 
            icon={live ? <Icons.Zap /> : <Icons.Pause />}
            className={live ? "border-cyan-400" : "opacity-80"}
            title="Toggle real-time processing"
         >
            {live ? "LIVE ON" : "LIVE OFF"}
         </Button>
      </div>
      
      {/* Main Viewport */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Recording Indicator (minimal) */}
        {isRecording && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-2 border border-red-600 bg-black/80 px-2 py-0.5">
              <span className="w-2 h-2 bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-mono text-red-400 tracking-widest">REC</span>
            </div>
          </div>
        )}

        {/* The Canvas */}
        <div className="relative shadow-2xl transition-transform duration-200 ease-out p-8" style={{ transform: `scale(${zoom})` }}>
           <canvas
             ref={canvasRef}
             className={`max-w-full max-h-[80vh] border border-zinc-800 object-contain block bg-black ${!hasSource && 'hidden'}`}
           />
           
           {!hasSource && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-zinc-700 font-mono text-3xl font-bold uppercase tracking-widest opacity-50 select-none whitespace-nowrap">
                  No Signal
              </div>
            </div>
           )}
           
           {/* Processing Overlay (Only if really slow) */}
           {isProcessing && !live && (
             <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px] z-10">
               <div className="text-cyan-400 font-mono text-xs animate-pulse">PROCESSING...</div>
             </div>
           )}
        </div>

        {/* Minimal HUD: FPS + Frame Count */}
        {showHUD && (
          <div className="absolute top-2 left-2 z-20 text-[10px] font-mono bg-black/70 border border-zinc-800 text-zinc-300 px-2 py-1 pointer-events-none">
            <div>
              <span>FPS: {fps ?? 0}</span>
              {typeof frameCounter === 'number' && <span className="ml-3">Frame: {frameCounter}</span>}
            </div>
            <div className="mt-0.5 text-zinc-500">
              <span>{isVideo ? (isPlaying ? 'VIDEO: PLAYING' : 'VIDEO: PAUSED') : (hasSource ? 'IMAGE' : 'NO SOURCE')}</span>
              <span className="ml-3">{live ? 'LIVE' : 'PAUSED'}</span>
              <span className="ml-3">{canvasRef.current ? `${canvasRef.current.width}x${canvasRef.current.height}` : ''}</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Zoom Controls */}
      <div className="h-8 bg-black border-t border-zinc-900 flex items-center justify-center gap-4 px-4">
        <button onClick={() => setZoom(Math.max(0.1, zoom - 0.1))} className="text-zinc-500 hover:text-white">-</button>
        <span className="text-xs font-mono w-12 text-center text-zinc-400">{Math.round(zoom * 100)}%</span>
        <button onClick={() => setZoom(Math.min(3, zoom + 0.1))} className="text-zinc-500 hover:text-white">+</button>
      </div>
    </Panel>
  );
};
