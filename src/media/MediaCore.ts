// =============================================================================
// MEDIA CORE SINGLETON
// DO NOT MODIFY WITHOUT UNDERSTANDING REAL-TIME MEDIA SYSTEMS
// =============================================================================
//
// This module manages media loading and frame access in a way that is completely
// independent from React. It is initialized exactly once and persists forever.
//

class MediaCore {
  private static instance: MediaCore;

  private img: HTMLImageElement | null = null;
  private video: HTMLVideoElement | null = null;
  private sourceType: 'image' | 'video' | null = null;
  private fileObjectUrl: string | null = null;
  private isInitialized: boolean = false;

  private constructor() {}

  public static getInstance(): MediaCore {
    if (!MediaCore.instance) {
      MediaCore.instance = new MediaCore();
    }
    return MediaCore.instance;
  }

  public init(): void {
    if (this.isInitialized) {
      return;
    }

    // Create image element
    this.img = document.createElement('img');
    this.img.crossOrigin = 'anonymous';
    this.img.style.display = 'none';
    document.body.appendChild(this.img);

    // Create video element
    this.video = document.createElement('video');
    this.video.crossOrigin = 'anonymous';
    this.video.style.display = 'none';
    this.video.loop = true;
    this.video.muted = true;
    this.video.playsInline = true;
    document.body.appendChild(this.video);

    this.isInitialized = true;
  }

  public async loadImage(file: File): Promise<void> {
    if (!this.isInitialized) {
      this.init();
    }

    // Revoke previous object URL
    if (this.fileObjectUrl) {
      URL.revokeObjectURL(this.fileObjectUrl);
    }

    // Create new object URL
    this.fileObjectUrl = URL.createObjectURL(file);

    // Load image
    return new Promise((resolve, reject) => {
      if (!this.img) {
        reject(new Error('Image element not initialized'));
        return;
      }

      this.img.onload = () => {
        this.sourceType = 'image';
        resolve();
      };

      this.img.onerror = () => {
        this.sourceType = null;
        reject(new Error('Failed to load image'));
      };

      this.img.src = this.fileObjectUrl;
    });
  }

  public async loadVideo(file: File): Promise<void> {
    if (!this.isInitialized) {
      this.init();
    }

    // Revoke previous object URL
    if (this.fileObjectUrl) {
      URL.revokeObjectURL(this.fileObjectUrl);
    }

    // Create new object URL
    this.fileObjectUrl = URL.createObjectURL(file);

    // Load video
    return new Promise((resolve, reject) => {
      if (!this.video) {
        reject(new Error('Video element not initialized'));
        return;
      }

      this.video.onloadedmetadata = () => {
        this.sourceType = 'video';
        resolve();
      };

      this.video.onerror = () => {
        this.sourceType = null;
        reject(new Error('Failed to load video'));
      };

      this.video.src = this.fileObjectUrl;
    });
  }

  public getSourceType(): 'image' | 'video' | null {
    return this.sourceType;
  }

  public getFrameSource(): HTMLImageElement | HTMLVideoElement | null {
    if (!this.isInitialized) {
      return null;
    }

    if (this.sourceType === 'image') {
      return this.img;
    } else if (this.sourceType === 'video') {
      return this.video;
    }

    return null;
  }

  public isReady(): boolean {
    if (!this.isInitialized) {
      return false;
    }

    if (this.sourceType === 'image') {
      return !!(this.img && this.img.complete && this.img.naturalWidth > 0);
    } else if (this.sourceType === 'video') {
      return !!(this.video && this.video.videoWidth > 0);
    }

    return false;
  }

  public play(): void {
    if (this.sourceType === 'video' && this.video) {
      this.video.play().catch(() => {});
    }
  }

  public pause(): void {
    if (this.sourceType === 'video' && this.video) {
      this.video.pause();
    }
  }

  public getDebugInfo(): object {
    const info: any = {
      isInitialized: this.isInitialized,
      sourceType: this.sourceType,
      ready: this.isReady()
    };

    if (this.sourceType === 'image' && this.img) {
      info.image = {
        complete: this.img.complete,
        naturalWidth: this.img.naturalWidth,
        naturalHeight: this.img.naturalHeight
      };
    } else if (this.sourceType === 'video' && this.video) {
      info.video = {
        videoWidth: this.video.videoWidth,
        videoHeight: this.video.videoHeight,
        readyState: this.video.readyState,
        paused: this.video.paused
      };
    }

    return info;
  }
}

// Export singleton instance
const mediaCore = MediaCore.getInstance();

export { mediaCore as MediaCore };