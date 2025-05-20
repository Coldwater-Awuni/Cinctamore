export const preloadVideo = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'auto';
    
    video.onloadeddata = () => {
      resolve();
    };

    video.onerror = () => {
      reject(new Error(`Failed to load video: ${url}`));
    };

    video.src = url;
  });
};

export const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      resolve();
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${url}`));
    };

    img.src = url;
  });
};

export const preloadMediaArray = async (urls: string[]): Promise<void[]> => {
  const loadPromises = urls.map(url => {
    if (url.match(/\.(mp4|webm|ogg)$/i)) {
      return preloadVideo(url);
    } else if (url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
      return preloadImage(url);
    }
    return Promise.reject(new Error(`Unsupported media type: ${url}`));
  });

  return Promise.all(loadPromises);
};
