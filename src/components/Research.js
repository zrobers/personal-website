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
    title: "Deep Learning Techniques for Tissue Generation",
    description: (
      <>
        At the Hickey Lab within Duke University's Biomedical Engineering Department, I'm developing deep learning methods for generation tasks with spatial transcriptomics data. Leveraging a dataset of tissue segments at single-cellular resolution, my initial task is to build a model capable of extending tissues in two-dimensions, predicting both the location and type of cells in an outpainted region. So far, I've developed the underlying framework for data preprocessing, including the dimensional reduction of spatial transcriptomics datasets to increase the concentration of cells relative to empty space in tissue regions. I created new ways to tokenize this data, building tools to translate datasets to language format while preserving spatial context. For the lab's generative models, I'm actively contributing to the construction of both transformer-based and diffusion-based architectures. I've also developed a custom evaluation metric to determine model performance by comparing the similarity of generated data to a validation set of actual data. Our ultimate goal is to construct 3D representations of tissues by deploying our generative techniques to fill in the missing data between 2D samples.{' '}
        <a href="https://sites.google.com/view/john-w-hickey/home" target="_blank" rel="noopener noreferrer">
          Learn more about the Hickey Lab here.
        </a>
      </>
    ),
    style: {
      backgroundImage: 'url(/images/cells.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
  {
    title: "Fluid Dynamics",
    description: (
      <>
        Within the Duke Math Department, I'm part of a research group studying the interactions between fluids and inelastic solids. Motivated by a desire to study the phenomenon of iceberg calving in which a storm surge collides with a glacier causing an iceberg to break off, I've deployed a three-pronged approach of modeling, analysis, and numerical simulation to investigate the underlying dynamics behind a generalized version of such interactions. Our model consists of shallow water (governed by the Saint-Venant Equations) coupled to an incompressible solid (governed by the linear wave equation) where the boundary between the fluid and solid is allowed to freely move. The boundary conditions in this model follow from physical principles, namely the conservation of energy. I contributed to the development of a finite-difference based numerical simulation which adjusts the classical MacCormack Method to reconcile the moving boundary and transfer of energy between the fluid and solid domains. I also studied the linear stability of this system when faced with a perturbation, elucidating the kinds of forcing waves which can lead to instability.{' '}
        <a href="https://math.duke.edu/mathplus/2024/interactions-between-fluids-and-elastic-solids" target="_blank" rel="noopener noreferrer">
          Learn more here.
        </a>
      </>
    ),
    style: {
      backgroundImage: 'url(/images/iceberg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
  {
    title: "Heat Transfer",
    description: (
      <>
        Inside the UNC-Chapel Hill Fluids Laboratory, I've led an effort to study the diffusion of heat across irregular geometries. Our first investigation looks at the dynamics of heat transfer across an 'L' shaped geometry in comparison to the rectangular counterpart with equal area and perimeter. My approach involves experimentation, analysis of the heat diffusion partial differential equation, and numerical simulation. The experimental arrangement involves specially-cut conductors of varying sizes attached to a heat source and monitored with probes and thermal cameras. Asymptotics guide the analytical investigation and finite element method serves as the basis of the numerics. The studies have produced novel insights on how heat travels around a bend and grounded these insights in theory. I presented this work at the American Physical Society Division of Fluid Dynamics Meeting in November 2023. I also presented at the Triangle Computational and Applied Mathematics Symposium, winning best talk and poster by an undergraduate.
      </>
    ),
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
        <div style={styles.dotsContainer}>
          {projects.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                ...styles.dot,
                backgroundColor: index === currentSlide ? '#2e4075' : '#d4e3fc',
              }}
            ></span>
          ))}
        </div>
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
    backgroundColor: '#d4e3fc',
  },
  quoteContainer: {
    position: 'relative',
    padding: '2em',
    margin: '2em auto',
    maxWidth: '800px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#2e4075',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  quoteMarksTop: {
    fontSize: '8rem',
    color: '#fff',
    position: 'absolute',
    top: '70px',
    left: '10px',
    transform: 'translateY(-50%)',
  },
  quoteMarksBottom: {
    fontSize: '8rem',
    color: '#fff',
    position: 'absolute',
    bottom: '-140px',
    right: '10px',
    transform: 'translateY(-50%)',
  },
  quoteText: {
    fontSize: '2rem',
    lineHeight: '1.8',
    margin: '2em 0',
    color: '#fff',
  },
  quoteAuthor: {
    fontSize: '1rem',
    fontStyle: 'italic',
    marginTop: '1em',
    color: '#fff',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#2e4075',
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
    color: '#2e4075',
    textAlign: 'center',
    transition: 'transform 0.5s ease-in-out',
  },
  projectContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '7em',
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
    width: '60px', 
    height: '60px', 
    fontSize: '2rem', 
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s', 
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
    width: '60px', 
    height: '60px', 
    fontSize: '2rem', 
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s', 
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    zIndex: 1000,
  },
  dot: {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};
