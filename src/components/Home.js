import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Slideshow from '../components/Slideshow'; // slideshow component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBrain, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FaSchool, FaMapMarkerAlt, FaLaptopCode, FaHiking, FaCalendar, FaGraduationCap } from 'react-icons/fa';

const skills = [
  { icon: <FontAwesomeIcon icon={faCode} />, label: 'Software Development' },
  { icon: <FontAwesomeIcon icon={faBrain} />, label: 'Machine Learning' },
  { icon: <FontAwesomeIcon icon={faCogs} />, label: 'Mathematical Modeling' },
  { icon: <FontAwesomeIcon icon={faChartLine} />, label: 'Data Analysis' },
  { icon: <FaLaptopCode />, label: 'Product' },  // Added Product skill
  { icon: <FaHiking />, label: 'Leadership' },   // Added Leadership skill
];

const Home = () => {
  const slideshowRef = useRef(null);

  const { ref: bioRef, inView: bioInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleResize = () => {
      if (slideshowRef.current) {
        const overlay = slideshowRef.current.querySelector('.overlay');
        if (overlay) {
          overlay.style.bottom = '20px'; // Adjust as needed
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial positioning

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Slideshow Section */}
      <div style={styles.slideshowContainer} ref={slideshowRef}>
        <Slideshow />
        <div className="overlay" style={styles.overlay}>
          <h1 style={styles.introText}>Hi, I'm Zach.</h1>
          <div style={styles.arrow}></div>
        </div>
      </div>

      {/* Fast Facts Section */}
      <div style={styles.fastFactsSection}>
        <div style={styles.fastFactItem}>
          <FaSchool style={styles.fastFactIcon} />
          <div style={styles.factLabel}>Duke University</div>
        </div>
        <div style={styles.fastFactItem}>
          <FaMapMarkerAlt style={styles.fastFactIcon} />
          <div style={styles.factLabel}>Chapel Hill, NC</div>
        </div>
        <div style={styles.fastFactItem}>
          <FaCalendar style={styles.fastFactIcon} />
          <div style={styles.factLabel}>Sophomore</div>
        </div>
        <div style={styles.fastFactItem}>
          <FaGraduationCap style={styles.fastFactIcon} />
          <div style={styles.factLabel}>Math, Computer Science</div>
        </div>
      </div>

      {/* Bio and Skills Section */}
      <div style={styles.bioSection}>
        <div ref={skillsRef} style={{ 
          ...styles.skillsContainer, 
          opacity: skillsInView ? 1 : 0, 
          transform: skillsInView ? 'translateY(0)' : 'translateY(20px)', 
          transition: 'opacity 2s ease, transform 2s ease'  // Increased transition time
        }}>
          {/* My Skills Title */}
          <h2 style={styles.skillsTitle}>My Skills</h2>

          <div style={styles.skillsSection}>
            {skills.map((skill, index) => (
              <div key={index} style={styles.skill}>
                <div style={styles.skillIcon}>{skill.icon}</div>
                <div style={styles.label}>{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
  },
  slideshowContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    paddingBottom: '0',
    marginBottom: '0',
    backgroundColor: '#2e4075',
  },
  overlay: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    zIndex: 1,
  },
  introText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#2e4075',
    padding: '1rem 2rem',
    borderRadius: '10px',
    marginBottom: '10px',
    maxWidth: '90%',
    boxSizing: 'border-box',
  },
  arrow: {
    width: '20px',
    height: '20px',
    borderRight: '3px solid #2e4075',
    borderBottom: '3px solid #2e4075',
    transform: 'rotate(45deg)',
  },
  fastFactsSection: {
    display: 'flex',
    justifyContent: 'space-around', // Distribute items across the screen
    backgroundColor: '#2e4075', // Blue background
    padding: '30px',
    width: '100%', // Full width
    boxSizing: 'border-box',
    color: 'white', // White text color
    textAlign: 'center', // Center the text
  },
  fastFactItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
  },
  fastFactIcon: {
    fontSize: '2rem', // Adjust icon size as needed
    marginBottom: '10px',
  },
  factLabel: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  bioSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#ffffff',
    flexWrap: 'wrap',
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack title and skills vertically
    alignItems: 'center', // Center everything horizontally
    justifyContent: 'center', // Center content vertically
    width: '100%',
    textAlign: 'center', // Center text inside the container
  },
  skillsTitle: {
    fontSize: '3rem',
    color: '#2e4075',
    fontWeight: 'bold',
    marginBottom: '40px', // Add space below title for separation from skills
    textAlign: 'center',
  },
  skillsSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',  // 3 columns for skills
    gap: '20px',
    justifyItems: 'center',
    alignItems: 'center',
    maxWidth: '75%',
    margin: '0 auto',
  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '2rem',
    color: '#2e4075',
  },
  skillIcon: {
    fontSize: '4rem',
    color: '#2e4075',
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    marginLeft: '20px',
  },
  logoImage: {
    width: '100%',
    height: 'auto',
  },
};

export default Home;
