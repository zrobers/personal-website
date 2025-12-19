import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  webpSrc, 
  fallbackSrc, 
  alt, 
  className, 
  style, 
  loading = 'lazy',
  onLoad,
  ...props 
}) => {
  // Default to true for modern browsers (most support WebP now)
  const [supportsWebP, setSupportsWebP] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  // Determine which source to use
  const currentSrc = useFallback ? fallbackSrc : (supportsWebP && webpSrc ? webpSrc : fallbackSrc);

  useEffect(() => {
    // Check WebP support synchronously if possible, otherwise default to true
    const checkWebPSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const dataURL = canvas.toDataURL('image/webp');
          const supports = dataURL.indexOf('data:image/webp') === 0;
          setSupportsWebP(supports);
        } else {
          setSupportsWebP(false);
        }
      } catch (e) {
        // If check fails, default to false (use fallback)
        setSupportsWebP(false);
      }
    };

    // Run check immediately
    checkWebPSupport();
  }, []);

  // Reset loaded state when src changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentSrc]);

  const handleImageLoad = (e) => {
    setImageLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleImageError = () => {
    if (!useFallback && fallbackSrc) {
      setUseFallback(true);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: imageLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
      loading={loading}
      onLoad={handleImageLoad}
      onError={handleImageError}
      {...props}
    />
  );
};

export default OptimizedImage; 