import React from 'react';

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  sourceType?: 'image' | 'video' | null;
};

const TestCanvasComponent: React.FC<Props> = ({ canvasRef }) => {
  return (
    <div className="h-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="block bg-black border border-zinc-800"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default TestCanvasComponent;

