// Test script to verify media loading and canvas rendering
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// Create a DOM environment
const dom = new JSDOM('<!DOCTYPE html><html><body><canvas id="testCanvas"></canvas></body></html>');
const { window } = dom;
global.window = window;
global.document = window.document;
global.navigator = { userAgent: 'node-jsdom' };

// Mock canvas context
const canvas = document.getElementById('testCanvas');
const ctx = canvas.getContext('2d');
ctx.fillRect = () => {};
ctx.drawImage = () => {};

// Import functions to test
import { loadImageTo } from './media_loader/mediaLoader.js';

// Create test file
const testImagePath = path.join(process.cwd(), 'public', 'test.jpg');
const testImageBuffer = fs.readFileSync(testImagePath);
const testFile = new Blob([testImageBuffer], { type: 'image/jpeg' });
testFile.name = 'test.jpg';

// Test loadImageTo
async function testLoadImage() {
    console.log('Testing loadImageTo...');
    
    // Create image element
    const img = document.createElement('img');
    img.crossOrigin = 'anonymous';
    
    try {
        const result = await loadImageTo(img, canvas, testFile, { current: null });
        console.log('LoadImageTo succeeded:', result);
        
        // Verify image properties
        if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
            console.log('Image loaded successfully:', img.naturalWidth, 'x', img.naturalHeight);
        } else {
            console.error('Image not loaded properly');
        }
        
    } catch (error) {
        console.error('LoadImageTo failed:', error);
    }
}

// Run tests
testLoadImage().then(() => {
    console.log('Test completed');
    process.exit(0);
}).catch(error => {
    console.error('Test failed:', error);
    process.exit(1);
});