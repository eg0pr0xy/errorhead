// Media loader test
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;
  
  const container = document.getElementById('root');
  container.appendChild(canvas);
  
  const img = new Image();
  img.crossOrigin = 'anonymous';
  
  img.onload = () => {
    console.log('Image loaded:', img.naturalWidth, 'x', img.naturalHeight);
    
    // Resize canvas to match image
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    // Draw image
    ctx.drawImage(img, 0, 0);
    
    // Display success
    const status = document.createElement('div');
    status.style.color = '#00ff00';
    status.textContent = `Success: Image drawn to canvas (${img.naturalWidth}x${img.naturalHeight})`;
    container.appendChild(status);
  };
  
  img.onerror = (err) => {
    console.error('Image load error:', err);
    const status = document.createElement('div');
    status.style.color = '#ff0000';
    status.textContent = 'Error: Failed to load image';
    container.appendChild(status);
  };
  
  // Load test image
  img.src = '/test.jpg';
});