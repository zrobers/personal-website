import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slideshow-height-fix.css';   // ❶ global height helper

const Slideshow = () => {
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
    { src: '/images/zach1.png' },
    { src: '/images/zach2.png' },
    { src: '/images/zach3.png' },
    { src: '/images/zach4.png' },
  ];

  return (
    <div style={styles.sliderContainer} className="slideshow-container">
      <Slider {...settings} style={{ height: '100%' }}>
        {slides.map((slide, idx) => (
          <div key={idx} style={styles.slide} className="slideshow-slide">
            <img src={slide.src} alt={`Slide ${idx + 1}`} style={styles.image} />
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
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
};

export default Slideshow;
