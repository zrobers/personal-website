import React, { useEffect, useState } from 'react';

// Define the dynamic typing to ask research questions
const DynamicFeature = () => {
  const finishers = [
    "generate tissues with AI?",
    "model natural disasters?",
    "optimize heat transfer?",
    "build hydraulic-powered pyramids?",
    "reshape heat transfer systems?"
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
    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2e4075', textAlign: 'center', padding: '1em' }}>
      What if we could <span>{text}</span>
      <span style={{ display: 'inline-block', width: '10px', backgroundColor: '#2e4075', animation: 'blink 0.7s steps(2, start) infinite' }}>|</span>
    </div>
  );
};

const Research = () => {
  return (
    <div className="research">
      <DynamicFeature />
      <h2>Research</h2>
      <p>
        I am actively involved in research projects related to fluid dynamics, heat transfer, and artificial intelligence.
        My recent work includes the study of heat transfer optimization within the Roman Hypocaust System and exploring hydraulic-powered pyramid construction models.
      </p>
    </div>
  );
};

export default Research;

const styles = `
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

