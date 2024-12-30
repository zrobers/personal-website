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
    { src: '/images/zach4.png', caption: 'Making a Speech at a Rededication Ceremony' },
    { src: '/images/echhsaa1.png', caption: 'Student Leadership Team' },
    { src: '/images/echhsaa2.png', caption: 'Blog' },
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


