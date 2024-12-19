import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Keeps part of the next and previous images visible
    centerPadding: '10%', // Space between images
    focusOnSelect: true, // Allows smooth transition to the next image
    cssEase: 'ease-in-out', // Smooth transition effect
  };

  // Array of images (no captions now)
  const slides = [
    { src: '/images/zach1.png' },
    { src: '/images/zach2.png' },
    { src: '/images/zach3.png' },
    { src: '/images/zach4.png' },
  ];

  return (
    <div style={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={styles.slide}>
            <img src={slide.src} alt={`Slide ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
    sliderContainer: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    slide: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0', // Add 1em padding
      margin: '0', // Adjust margin as needed
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '0px',
    },
};

export default Slideshow;


