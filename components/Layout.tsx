
import React from 'react';

export const Layout: React.FC<{ 
  leftPanel: React.ReactNode; 
  centerPanel: React.ReactNode; 
  rightPanel: React.ReactNode; 
  bottomBar: React.ReactNode; 
}> = ({ leftPanel, centerPanel, rightPanel, bottomBar }) => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-black text-zinc-300 select-none">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}>
      </div>
      
      {/* Top Header */}
      <header className="h-12 border-b border-zinc-800 bg-black/80 flex items-center justify-between px-4 z-10 relative">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse"></div>
          <h1 className="text-xl font-display font-bold tracking-widest text-white">
            ERRORHEAD <span className="text-zinc-600 text-xs align-top opacity-70">v2.0</span>
          </h1>
        </div>
        <div className="text-xs font-mono text-zinc-600 flex gap-6">
          <span>ENTROPY: ACTIVE</span>
          <span>MEM: 64MB</span>
          <span className="text-cyan-800">● SIGNAL OK</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden relative z-10 p-2 gap-2">
        {/* Left: Files */}
        <div className="w-72 flex-shrink-0 flex flex-col gap-2">
          {leftPanel}
        </div>

        {/* Center: Canvas */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          {centerPanel}
        </div>

        {/* Right: Controls */}
        <div className="w-80 flex-shrink-0 flex flex-col gap-2">
          {rightPanel}
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="h-auto min-h-8 border-t border-zinc-800 bg-zinc-950 flex flex-col z-10 relative">
        {bottomBar}
      </footer>
    </div>
  );
};
