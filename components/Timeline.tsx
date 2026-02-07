
import React from 'react';
import { Button, Icons } from './UIComponents';
import { AnimationState, Keyframe } from '../types';

interface TimelineProps {
  animation: AnimationState;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  onAddKeyframe: () => void;
  onDeleteKeyframe: (id: string) => void;
  onDurationChange: (duration: number) => void;
  isActive: boolean;
  onToggleActive: () => void;
  isPlaying: boolean;
  onTogglePlayback: () => void;
  fps: number;
}

export const Timeline: React.FC<TimelineProps> = ({
  animation,
  onPlayPause,
  onSeek,
  onAddKeyframe,
  onDeleteKeyframe,
  onDurationChange,
  isActive,
  onToggleActive,
  isPlaying,
  onTogglePlayback,
  fps
}) => {
  const formatTime = (t: number) => t.toFixed(2);
  
  const getFpsColor = (fps: number) => {
    if (fps >= 50) return 'text-green-500';
    if (fps >= 24) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isActive) {
    return (
      <div className="flex items-center justify-between px-4 h-8 text-xs font-mono text-zinc-500 bg-zinc-950 border-t border-zinc-900">
         <div className="flex gap-4 items-center">
            <Button variant="ghost" size="sm" onClick={onToggleActive} icon={<Icons.Clock />}>
               ENABLE ANIMATION
            </Button>
            <Button
              variant={isPlaying ? 'secondary' : 'primary'}
              size="sm"
              onClick={onTogglePlayback}
              icon={isPlaying ? <Icons.Pause /> : <Icons.Play />}
            >
              {isPlaying ? 'PAUSE RENDER' : 'RESUME RENDER'}
            </Button>
         </div>
         <div className="flex items-center gap-6">
             <div className="flex items-center gap-2" title="Real-time Frame Rate">
                <span className="text-zinc-600">FPS</span>
                <span className={`font-bold ${getFpsColor(fps)}`}>
                   {fps}
                </span>
             </div>
             <div className="text-zinc-600">
                MODE: <span className="text-zinc-400">STATIC</span>
             </div>
         </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-zinc-900/50 border-t border-cyan-500/20">
      {/* Controls Header */}
      <div className="flex items-center justify-between px-2 py-1 border-b border-zinc-800 h-10">
         <div className="flex items-center gap-2">
            <Button 
               variant={animation.isPlaying ? 'secondary' : 'primary'} 
               size="sm" 
               onClick={onPlayPause}
               icon={animation.isPlaying ? <Icons.Pause /> : <Icons.Play />}
            >
               {animation.isPlaying ? 'PAUSE' : 'PLAY'}
            </Button>
            <Button
              variant={isPlaying ? 'secondary' : 'primary'}
              size="sm"
              onClick={onTogglePlayback}
              icon={isPlaying ? <Icons.Pause /> : <Icons.Play />}
            >
              {isPlaying ? 'PAUSE RENDER' : 'RESUME RENDER'}
            </Button>
            
            <div className="flex items-center gap-1 bg-zinc-900 px-2 py-1 border border-zinc-700">
               <span className="text-cyan-400 font-mono text-sm">{formatTime(animation.currentTime)}s</span>
               <span className="text-zinc-500 text-xs">/ {animation.duration}s</span>
            </div>

            <Button variant="ghost" size="sm" onClick={onAddKeyframe} icon={<Icons.Keyframe />}>
               ADD KEYFRAME
            </Button>
         </div>

         <div className="flex items-center gap-4">
             <div className="flex items-center gap-1.5 border-r border-zinc-700 pr-4 mr-1">
                <span className="text-[10px] text-zinc-600">FPS</span>
                <span className={`text-xs font-mono ${getFpsColor(fps)}`}>
                   {fps}
                </span>
             </div>
             
             <div className="flex items-center gap-2">
               <span className="text-[10px] text-zinc-500">DURATION</span>
               <input 
                  type="number" 
                  value={animation.duration} 
                  onChange={(e) => onDurationChange(Number(e.target.value))}
                  className="w-12 bg-black border border-zinc-700 text-xs px-1 py-0.5 text-center text-zinc-300"
               />
             </div>
             <Button variant="ghost" size="sm" onClick={onToggleActive}>
               EXIT ANIMATION
            </Button>
         </div>
      </div>

      {/* Timeline Track */}
      <div className="h-16 relative bg-black/40 group overflow-hidden cursor-crosshair"
           onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const t = (x / rect.width) * animation.duration;
              onSeek(Math.max(0, Math.min(animation.duration, t)));
           }}
      >
         {/* Grid Lines */}
         <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: `${100 / animation.duration}% 100%`
         }}></div>

         {/* Keyframes */}
         {animation.keyframes.map(kf => (
            <div 
               key={kf.id}
               className="absolute top-2 w-3 h-3 bg-cyan-500 rotate-45 border border-white hover:scale-125 transition-transform cursor-pointer z-10"
               style={{ left: `calc(${(kf.time / animation.duration) * 100}% - 6px)` }}
               onClick={(e) => {
                  e.stopPropagation();
                  onSeek(kf.time);
                  // Could trigger select keyframe here
               }}
               onContextMenu={(e) => {
                  e.preventDefault();
                  onDeleteKeyframe(kf.id);
               }}
               title={`Keyframe at ${kf.time.toFixed(2)}s`}
            ></div>
         ))}

         {/* Playhead */}
         <div 
            className="absolute top-0 bottom-0 w-px bg-red-500 z-20 pointer-events-none"
            style={{ left: `${(animation.currentTime / animation.duration) * 100}%` }}
         >
            <div className="absolute top-0 -left-1.5 w-3 h-3 bg-red-500 rotate-45 transform -translate-y-1/2"></div>
         </div>
      </div>
    </div>
  );
};

