import React, { useState, useRef, useEffect } from 'react';
import { loadImageTo } from '../media_loader/mediaLoader';

interface TestMediaComponentProps {
  onLoad?: () => void;
}

export const TestMediaComponent: React.FC<TestMediaComponentProps> = ({ onLoad }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<string>('');
  
  useEffect(() => {
    const loadTestImage = async () => {
      try {
        // Load test.jpg from public folder
        const response = await fetch('/test.jpg');
        const blob = await response.blob();
        const file = new File([blob], 'test.jpg', { type: 'image/jpeg' });
        
        // Use mediaLoader to load image
        await loadImageTo(imgRef.current!, canvasRef.current!, file, { current: null });
        
        setLoading(false);
        if (imgRef.current) {
          setImageSize(`${imgRef.current.naturalWidth}x${imgRef.current.naturalHeight}`);
        }
        if (onLoad) onLoad();
      } catch (err) {
        console.error('Failed to load test image:', err);
        setError(err instanceof Error ? err.message : 'Failed to load image');
        setLoading(false);
      }
    };
    
    if (imgRef.current && canvasRef.current) {
      loadTestImage();
    }
  }, [imgRef, canvasRef]);
  
  return (
    <div style={{ padding: '20px', background: '#1a1a1a', borderRadius: '8px', color: '#fff' }}>
      <h2 style={{ marginBottom: '10px' }}>Media Loader Test</h2>
      
      {loading && <div>Loading...</div>}
      
      {error && (
        <div style={{ color: '#ff0000', marginBottom: '10px' }}>
          Error: {error}
        </div>
      )}
      
      {!loading && !error && (
        <div>
          <div style={{ marginBottom: '10px' }}>
            Image loaded successfully: {imageSize}
          </div>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <div>
              <h3>Image Element</h3>
              <img 
                ref={imgRef} 
                style={{ maxWidth: '300px', maxHeight: '300px', border: '1px solid #444' }} 
                alt="Test" 
              />
            </div>
            
            <div>
              <h3>Canvas Render</h3>
              <canvas 
                ref={canvasRef} 
                style={{ maxWidth: '300px', maxHeight: '300px', border: '1px solid #444' }} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};