import React, { useEffect, useState } from 'react';

// Typing animation on header
const DynamicFeature = () => {
  const finishers = [
    "generate tissues with AI?",
    "predict natural disasters?",
    "optimize heat transfer?",
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = finishers[loopIndex];

      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % finishers.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, finishers, loopIndex]);

  return (
    <div style={styles.dynamicTextWrapper}>
      <div style={styles.dynamicText}>
        What if we could <span style={styles.highlight}>{text}</span>
        <span className="blinkingCursor">|</span>
      </div>
    </div>
  );
};

// Individual research projects
const projects = [
  {
    title: "Hickey Lab",
    description: "Exploring cell growth patterns and their implications in medical research.",
    style: {
      backgroundImage: 'url(/images/cells.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
  {
    title: "Fluids",
    description: "Studying fluid dynamics and their applications in engineering.",
    style: {
      backgroundImage: 'url(/images/iceberg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
  {
    title: "Heat Transfer",
    description: "Optimizing heat transfer systems for sustainable energy.",
    style: {
      backgroundImage: 'url(/images/metal.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
];



const Research = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blink {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
      .blinkingCursor {
        display: inline-block;
        width: 10px;
        animation: blink 0.8s steps(2, start) infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <div style={styles.topSection}>
        <DynamicFeature />
      </div>
      <div style={styles.contentSection}>
        <div style={styles.quoteContainer}>
          <div style={styles.quoteMarksTop}>“</div>
          <p style={styles.quoteText}>
            Research is formalized curiosity. It is poking and prying with a purpose.
          </p>
          <div style={styles.quoteMarksBottom}>”</div>
          <p style={styles.quoteAuthor}>Zora Neale Hurston</p>
        </div>
        <p style={styles.paragraph}>
          My research blends the computational with the tangible, serving as an outlet for me to apply the abstract concepts I learn in the classroom to real-world problems. I'm actively involved in 3 projects in deep learning, applied mathematics, and mathematical modeling.
        </p>
      </div>
      <div style={styles.slideshowContainer}>
        <div
          style={{
            ...styles.fullScreenSlide,
            ...projects[currentSlide].style,
          }}
        >
          <div style={styles.projectContent}>
            <h2>{projects[currentSlide].title}</h2>
            <p>{projects[currentSlide].description}</p>
          </div>
        </div>
        <button style={styles.arrowLeft} onClick={handlePrev}>
          <div style={{
            width: '0',
            height: '0',
            borderTop: '15px solid transparent',
            borderBottom: '15px solid transparent',
            borderRight: '20px solid #fff',
          }}></div>
        </button>
        <button style={styles.arrowRight} onClick={handleNext}>
          <div style={{
            width: '0',
            height: '0',
            borderTop: '15px solid transparent',
            borderBottom: '15px solid transparent',
            borderLeft: '20px solid #fff',
          }}></div>
        </button>
      </div>
    </div>
  );
};

export default Research;

const styles = {
  topSection: {
    backgroundImage: 'url(/images/duke_stone.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '4em 2em',
    textAlign: 'center',
  },
  dynamicTextWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'inline-block',
    padding: '1em 2em',
    borderRadius: '8px',
  },
  dynamicText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2e4075',
    textAlign: 'center',
  },
  highlight: {
    color: '#2e4075',
  },
  contentSection: {
    padding: '2em',
    textAlign: 'center',
  },
  quoteContainer: {
    position: 'relative',
    padding: '2em',
    margin: '2em auto',
    maxWidth: '800px',
    textAlign: 'center',
    color: '#2e4075',
    backgroundColor: '#d4e3fc',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  quoteMarksTop: {
    fontSize: '8rem',
    color: '#2e4075',
    position: 'absolute',
    top: '70px',
    left: '10px',
    transform: 'translateY(-50%)',
  },
  quoteMarksBottom: {
    fontSize: '8rem',
    color: '#2e4075',
    position: 'absolute',
    bottom: '-140px',
    right: '10px',
    transform: 'translateY(-50%)',
  },
  quoteText: {
    fontSize: '2rem',
    lineHeight: '1.8',
    margin: '2em 0',
    color: '#2e4075',
  },
  quoteAuthor: {
    fontSize: '1rem',
    fontStyle: 'italic',
    marginTop: '1em',
    color: '#2e4075',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#fff',
    backgroundColor: '#2e4075',
  },
  slideshowContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  fullScreenSlide: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.5s ease-in-out',
  },
  projectContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '2em',
    borderRadius: '8px',
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    backgroundColor: '#2e4075', 
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '60px', // Increased size
    height: '60px', // Increased size
    fontSize: '2rem', // Larger font size
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transitions
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    backgroundColor: '#2e4075', 
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '60px', // Increased size
    height: '60px', // Increased size
    fontSize: '2rem', // Larger font size
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transitions
  },
};
