import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slideshow-height-fix.css';   // ❶ global height helper
import OptimizedImage from './OptimizedImage';

const Slideshow = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  /* slick settings */
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '10%',
    focusOnSelect: true,
    cssEase: 'ease-in-out',

    /* Disable centre padding on narrow screens */
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: '0',
        },
      },
    ],
  };

  /* images – add / replace as needed */
  const slides = [
    { webpSrc: '/images/optimized/zach1.webp', fallbackSrc: '/images/zach1.jpg' },
    { webpSrc: '/images/optimized/zach2.webp', fallbackSrc: '/images/zach2.jpg' },
    { webpSrc: '/images/optimized/zach3.webp', fallbackSrc: '/images/zach3.jpg' },
    { webpSrc: '/images/optimized/zach4.webp', fallbackSrc: '/images/zach4.jpg' },
  ];

  return (
    <div style={styles.sliderContainer} className="slideshow-container">
      <Slider {...settings} style={{ height: '100%' }}>
        {slides.map((slide, idx) => (
          <div key={idx} style={styles.slide} className="slideshow-slide">
            <OptimizedImage
              webpSrc={slide.webpSrc}
              fallbackSrc={slide.fallbackSrc}
              alt={`Slide ${idx + 1}`}
              style={styles.image}
              loading={idx === 0 ? "eager" : "lazy"}
              onLoad={() => handleImageLoad(idx)}
            />
            
            {!loadedImages.has(idx) && (
              <div style={styles.loadingPlaceholder}>
                <div style={styles.spinner}></div>
                <div style={styles.loadingText}>Loading...</div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

/* in-file styles */
const styles = {
  sliderContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',   // keep cropped edges hidden
  },
  slide: {
    height: '100%',       // slick wrapper inherits full height via CSS helper
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  loadingPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #e0e0e0',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    marginTop: '10px',
    fontSize: '1.2em',
    color: '#555',
  },
};

export default Slideshow;
