import React, { useState, useEffect, useRef } from 'react';

const SimpleTestApp: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [status, setStatus] = useState<string>('Loading...');

  useEffect(() => {
    videoRef.current = document.createElement('video');
    videoRef.current.crossOrigin = 'anonymous';
    videoRef.current.loop = true;
    videoRef.current.muted = true;
    videoRef.current.playsInline = true;
    
    console.log('[Test] videoRef initialized');
    
    const loadVideo = async () => {
      try {
        console.log('[Test] Fetching /test.mp4...');
        const response = await fetch('/test.mp4');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('[Test] Response received:', response);
        const blob = await response.blob();
        console.log('[Test] Blob received:', blob.type, blob.size);
        const url = URL.createObjectURL(blob);
        console.log('[Test] URL created:', url);
        
        videoRef.current.src = url;
        videoRef.current.load();
        
        videoRef.current.onloadedmetadata = () => {
          console.log('[Test] Video metadata loaded:', videoRef.current?.videoWidth, 'x', videoRef.current?.videoHeight);
          setStatus(`Video loaded: ${videoRef.current?.videoWidth}x${videoRef.current?.videoHeight}`);
          videoRef.current?.play().then(() => {
            console.log('[Test] Video playing');
            setStatus(`Video playing: ${videoRef.current?.videoWidth}x${videoRef.current?.videoHeight}`);
          }).catch(err => {
            console.error('[Test] Video play error:', err);
            setStatus('Video play error');
          });
        };
        
        videoRef.current.onerror = (e) => {
          console.error('[Test] Video load error:', e);
          setStatus('Video load error');
        };
      } catch (err) {
        console.error('[Test] Failed:', err);
        setStatus('Failed to load video');
      }
    };
    
    loadVideo();
    
    return () => {
      if (videoRef.current) {
        videoRef.current.src = '';
        videoRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ 
      background: 'black', 
      color: 'white', 
      padding: '20px', 
      fontFamily: 'monospace', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      <h1>Simple Test App</h1>
      <p>{status}</p>
      <div style={{ marginTop: '20px', border: '1px solid white' }}>
        <video ref={videoRef} style={{ width: '640px', height: '360px' }} controls />
      </div>
      <button 
        onClick={() => videoRef.current?.play()}
        style={{ marginTop: '10px', padding: '5px', backgroundColor: 'blue', color: 'white', borderRadius: '5px' }}
      >
        Play
      </button>
      <button 
        onClick={() => videoRef.current?.pause()}
        style={{ marginTop: '10px', padding: '5px', backgroundColor: 'red', color: 'white', borderRadius: '5px' }}
      >
        Pause
      </button>
      <div style={{ marginTop: '20px', fontSize: '12px' }}>
        <p>videoRef.current: {videoRef.current ? '✓' : '✗'}</p>
        {videoRef.current && (
          <>
            <p>src: {videoRef.current.src}</p>
            <p>readyState: {videoRef.current.readyState}</p>
            <p>paused: {videoRef.current.paused}</p>
            <p>currentTime: {videoRef.current.currentTime}</p>
            <p>duration: {videoRef.current.duration}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SimpleTestApp;