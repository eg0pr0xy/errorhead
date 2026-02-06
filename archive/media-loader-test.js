import { loadImageTo } from './media_loader/mediaLoader';

// This test simulates loading an image from the public directory
async function testImageLoading() {
  try {
    console.log('Test: Loading image');
    
    // Create canvas and image elements
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);
    
    const img = document.createElement('img');
    img.crossOrigin = 'anonymous';
    document.body.appendChild(img);
    
    // Create a File object from test.jpg
    const response = await fetch('/test.jpg');
    const blob = await response.blob();
    const file = new File([blob], 'test.jpg', { type: 'image/jpeg' });
    
    // Load image
    const result = await loadImageTo(img, canvas, file, { current: null });
    
    console.log('LoadImageTo succeeded:', result);
    
    // Verify image properties
    if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
      console.log('Image loaded successfully:', img.naturalWidth, 'x', img.naturalHeight);
    } else {
      console.error('Image not loaded properly');
    }
    
    // Draw image to canvas
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    console.log('Image drawn to canvas');
    
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Add click listener to button
document.getElementById('runTestBtn').addEventListener('click', testImageLoading);
