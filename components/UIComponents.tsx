
import React from 'react';

// --- ICONS (Inline SVG to avoid dependencies) ---
export const Icons = {
  Upload: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Refresh: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
  Undo: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>,
  Download: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  Zap: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  ChevronDown: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  ChevronRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
  Lock: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  Unlock: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>,
  Grid: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  Play: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  Pause: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>,
  Video: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  Camera: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z"/><circle cx="12" cy="14" r="4"/></svg>,
  Record: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>,
  Stop: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="6" width="12" height="12"/></svg>,
  Keyframe: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l-5.5 9h11z"/><path d="M12 22l-5.5-9h11z"/></svg>,
  Clock: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Save: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>,
  Folder: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
  Link: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
};

// --- BUTTON ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, variant = 'primary', size = 'md', icon, className = '', ...props 
}) => {
  const base = "font-mono uppercase tracking-wider transition-colors duration-100 flex items-center justify-center gap-2 border disabled:opacity-50 disabled:cursor-not-allowed select-none";
  
  const variants = {
    primary: "bg-black border-zinc-600 text-zinc-200 hover:bg-zinc-900 hover:border-zinc-400",
    secondary: "bg-black border-zinc-800 text-zinc-400 hover:border-zinc-600",
    danger: "bg-black border-red-600 text-red-500 hover:border-red-400",
    ghost: "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200"
  };

  const sizes = {
    sm: "text-xs px-2 py-1 h-7",
    md: "text-sm px-4 py-2 h-9"
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {icon && <span className="w-4 h-4 flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

// --- SLIDER ---
interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: number;
}

export const Slider: React.FC<SliderProps> = ({ label, value, ...props }) => (
  <div className="flex flex-col gap-1 mb-4 group">
    <div className="flex justify-between items-end text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors">
      <label>{label}</label>
      <span className="bg-zinc-900 px-1 border border-zinc-800 font-display">{value}</span>
    </div>
    <div className="relative h-4 flex items-center">
      <div className="absolute w-full h-1 bg-zinc-800"></div>
      <div 
        className="absolute h-1 bg-cyan-900" 
        style={{ width: `${((value - Number(props.min || 0)) / (Number(props.max || 100) - Number(props.min || 0))) * 100}%` }}
      ></div>
      <input 
        type="range" 
        className="relative w-full z-10 opacity-0 cursor-pointer h-full" 
        value={value}
        {...props} 
      />
      {/* Custom Thumb Representation if needed, but CSS handles it */}
      <div 
        className="absolute w-2 h-4 bg-cyan-500 border border-black pointer-events-none transition-all duration-75"
        style={{ 
          left: `calc(${((value - Number(props.min || 0)) / (Number(props.max || 100) - Number(props.min || 0))) * 100}% - 4px)` 
        }}
      ></div>
    </div>
  </div>
);

// --- TOGGLE ---
interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ label, checked, onChange }) => (
  <div className="flex items-center justify-between mb-2 cursor-pointer group" onClick={() => onChange(!checked)}>
    <span className="text-xs font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors">{label}</span>
    <div className={`w-8 h-4 border transition-colors relative ${checked ? 'border-cyan-500 bg-cyan-900/30' : 'border-zinc-700 bg-zinc-900'}`}>
      <div className={`absolute top-0.5 bottom-0.5 w-2.5 bg-current transition-all ${checked ? 'right-0.5 bg-cyan-400' : 'left-0.5 bg-zinc-600'}`}></div>
    </div>
  </div>
);

// --- SECTION ---
interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button 
        className="w-full flex items-center justify-between py-2 px-1 hover:bg-zinc-900/50 transition-colors text-xs font-bold text-zinc-400 uppercase tracking-widest"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}>
          <Icons.ChevronRight />
        </span>
      </button>
      {isOpen && <div className="p-2 pb-4 animate-in slide-in-from-top-1 fade-in duration-200">{children}</div>}
    </div>
  );
};

// --- PANEL BOX ---
export const Panel: React.FC<{ children: React.ReactNode; title?: React.ReactNode; className?: string; action?: React.ReactNode }> = ({ 
  children, title, className = '', action
}) => (
  <div className={`relative bg-black border border-zinc-800 flex flex-col ${className}`}>
    {title && (
      <div className="h-8 border-b border-zinc-800 flex items-center px-3 bg-black justify-between">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono flex items-center gap-2">
          {title}
        </h3>
        {action && <div>{action}</div>}
      </div>
    )}
    <div className="flex-1 overflow-hidden relative">
      {children}
    </div>
  </div>
);
