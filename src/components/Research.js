import React, { useEffect, useState } from 'react';

// What if... typing on header
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
      {projects.map((project, index) => (
        <div key={index} style={project.style}>
          <div style={styles.projectContent}>
            <div style={styles.projectText}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div style={styles.projectImage}></div>
          </div>
        </div>
      ))}
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
    color: '#2e4075',
  },
  projectSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2em',
    margin: '2em 0',
    color: '#fff',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  projectContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  projectText: {
    flex: '1',
    padding: '1em',
    fontSize: '1.2rem',
    color: '#fff',
  },
  projectImage: {
    flex: '1',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    marginLeft: '2em',
  },
  hickeyLab: {
    backgroundImage: 'url(/images/cells.png)',
  },
  fluids: {
    backgroundImage: 'url(/images/iceberg.jpg)',
  },
  heat: {
    backgroundImage: 'url(/images/cells.png)',
  },
};
