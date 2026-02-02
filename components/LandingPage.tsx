
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './UIComponents';

interface LandingPageProps {
  onEnter: () => void;
  isExiting: boolean;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter, isExiting }) => {
  const [dots, setDots] = useState<{x: number, y: number, s: number, d: number}[]>([]);
  const [videoOk, setVideoOk] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Generate a "Starfield" of data points
  useEffect(() => {
    const newDots = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 1,
      d: Math.random() * 5 + 2
    }));
    setDots(newDots);
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] w-screen h-screen overflow-hidden bg-[#050505] flex items-center justify-center font-mono select-none transition-opacity duration-300 ${isExiting ? 'animate-exit-purge' : ''}`}>
      
      {/* BACKGROUND: DATA VOID ENGINE */}
      <div className="absolute inset-0 z-0">
        {/* Fullscreen Background Video (optional). Place file at /public/landing.mp4 */}
        {videoOk && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
            src={import.meta.env.BASE_URL + 'landing.mp4'}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoOk(false)}
          />
        )}
        {/* Animated Data Particles */}
        {dots.map((dot, i) => (
          <div 
            key={i}
            className="absolute bg-cyan-500/20"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.s}px`,
              height: `${dot.s}px`,
              animation: `pulse-slow ${dot.d}s infinite ease-in-out`,
              boxShadow: '0 0 8px rgba(6, 182, 212, 0.4)'
            }}
          />
        ))}

        {/* Dynamic Scanline */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/10 animate-scanline z-20"></div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center gap-12 text-center px-4">
        
        {/* LOGO GROUP */}
        <div className={`space-y-4 group transition-all duration-500 ${isExiting ? 'opacity-0 scale-95 blur-sm' : ''}`}>
          <div className="flex flex-col items-center">
             <div className="text-[10px] text-cyan-700 tracking-[1em] mb-2 translate-x-[0.5em] font-bold">NEUE EPISTEME PRESENTS</div>
             <h1 className="text-8xl md:text-[10rem] font-display font-black tracking-[0.2em] text-white relative leading-none">
               ERROR<span className="text-cyan-500">HEAD</span>
               <span className="absolute inset-0 text-cyan-500/20 -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity">ERRORHEAD</span>
             </h1>
          </div>
          <p className="text-zinc-600 text-sm md:text-base tracking-[0.6em] uppercase font-light">
             disciple of glitch
          </p>
        </div>

        {/* SYSTEM STATUS READOUT */}
        <div className={`flex flex-col items-center gap-6 transition-all duration-300 delay-75 ${isExiting ? 'opacity-0 scale-90' : ''}`}>
           <div className="w-1 bg-cyan-500/40 h-12"></div>
           
           <Button 
            variant="primary" 
            size="md" 
            disabled={isExiting}
            className="px-16 py-8 text-xl border-cyan-500/50 bg-black hover:border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.05)] hover:shadow-[0_0_60px_rgba(6,182,212,0.15)] transition-all duration-700 group relative overflow-hidden"
            onClick={onEnter}
          >
            <span className="relative z-10 tracking-[0.5em] font-bold text-cyan-400 group-hover:text-black transition-colors">
              {isExiting ? 'PURGING...' : 'INITIALIZE'}
            </span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </Button>

          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex gap-4 text-[9px] text-zinc-700 tracking-[0.3em] font-bold uppercase">
               <span className="animate-pulse">Buffer: Loaded</span>
               <span className="text-zinc-800">|</span>
               <span>Entropy: 0.992</span>
               <span className="text-zinc-800">|</span>
               <span className="text-cyan-900">Uptime: 0:00:00</span>
            </div>
            <div className="w-48 h-[1px] bg-zinc-900 relative">
               <div className="absolute top-0 left-0 h-full bg-cyan-900/40 animate-loading-bar"></div>
            </div>
          </div>
        </div>
      </div>

      {/* SYSTEM DECORATIONS */}
      <div className="absolute top-12 left-12 flex flex-col gap-1">
         <div className="w-8 h-px bg-zinc-800"></div>
         <div className="w-px h-8 bg-zinc-800"></div>
         <span className="text-[8px] text-zinc-800 -translate-x-1">X-01</span>
      </div>
      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-1">
         <span className="text-[8px] text-zinc-800 translate-x-1">Y-04</span>
         <div className="w-px h-8 bg-zinc-800"></div>
         <div className="w-8 h-px bg-zinc-800"></div>
      </div>
    </div>
  );
};
