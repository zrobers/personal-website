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
    centerMode: true,
    centerPadding: '10%',
    focusOnSelect: true,
    cssEase: 'ease-in-out',
  };

  // Array of images with captions
  const slides = [
    { src: '/images/sailea1.png', caption: 'Speaker Event with Dr. Richard Marks, Fall 2023' },
    { src: '/images/sailea2.png', caption: 'Speaker Event with Inventor Misha Ghosh, Fall 2024' },
    { src: '/images/sailea3.png', caption: 'Worldwide Impact' },
    { src: '/images/sailea4.png', caption: 'Teaching a Java Course' },
    { src: '/images/sailea5.png', caption: 'Interactive Resource' },
    { src: '/images/sailea6.png', caption: 'Slideshow Resource' },
  ];

  return (
    <div style={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={styles.slide}>
            <img src={slide.src} alt={`Slide ${index + 1}`} style={styles.image} />
            <div style={styles.caption}>{slide.caption}</div>
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
    padding: '0',
    margin: '0',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '0px',
  },
  caption: {
    marginTop: '10px', // Space between image and caption
    fontSize: '1rem',
    color: '#2e4075', 
    textAlign: 'center',
  },
};

export default Slideshow;
