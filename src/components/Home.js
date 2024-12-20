import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Slideshow from '../components/Slideshow'; // slideshow component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBrain, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FaSchool, FaMapMarkerAlt, FaLaptopCode, FaHiking, FaCalendar, FaGraduationCap } from 'react-icons/fa';

const experiences = [
    { image: '/images/software.png', label: 'Software Development Internships', number: 2 },
    { image: '/images/research.png', label: 'Research Experiences', number: 3 },
    { image: '/images/projects.png', label: 'Personal Projects', number: 5 },
    { image: '/images/math.png', label: 'University Math Courses', number: 10 },
  ];

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

  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  const { ref: experiencesRef, inView: experiencesInView } = useInView({ triggerOnce: true });

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

      {/* Skills Section */}
      <div ref={skillsRef} style={{
        ...styles.skillsContainer,
        opacity: skillsInView ? 1 : 0,
        transform: skillsInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 2s ease, transform 2s ease',
      }}>
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

      {/* Experiences Section */}
      <div ref={experiencesRef} style={{
        ...styles.experiencesContainer,
        opacity: experiencesInView ? 1 : 0,
        transform: experiencesInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 2s ease, transform 2s ease',
      }}>
        <h2 style={styles.skillsTitle}>My Experiences</h2>
            <div style={styles.experiencesSection}>
                {experiences.map((exp, index) => (
                    <div key={index} style={styles.experience}>
                        <img src={exp.image} alt={exp.label} style={styles.experienceImage} />
                        <CountUp
                            start={0}
                            end={experiencesInView ? exp.number : 0}
                            duration={10}
                            delay={1 * index} // Stagger the animations
                        >
                            {({ countUpRef }) => (
                                <div ref={countUpRef} style={styles.experienceNumber}></div>
                            )}
                        </CountUp>
                        <div style={styles.experienceLabel}>{exp.label}</div>
                    </div>
                ))}
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
    justifyContent: 'space-around',
    backgroundColor: '#2e4075',
    padding: '30px',
    width: '100%',
    boxSizing: 'border-box',
    color: 'white',
    textAlign: 'center',
  },
  fastFactItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
  },
  fastFactIcon: {
    fontSize: '2rem',
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
    textAlign: 'center', 
    padding: '20px' 
  },
  skillsTitle: { 
    fontSize: '3rem', 
    color: '#2e4075', 
    fontWeight: 'bold', 
    marginBottom: '30px' 
  },
  skillsSection: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '20px', 
    justifyItems: 'center' 
  },
  skill: { 
    textAlign: 'center', 
    color: '#2e4075' 
  },
  skillIcon: { 
    fontSize: '4rem', 
    color: '#2e4075', 
    marginBottom: '10px' 
  },
  label: { 
    fontWeight: 'bold' 
  },
  experiencesContainer: { 
    textAlign: 'center', 
    backgroundColor: '#d4e3fc', 
    padding: '40px' 
  },
  experiencesSection: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '30px', 
    justifyItems: 'center' 
  },
  experience: { 
    textAlign: 'center' 
  },
  experienceImage: { 
    maxWidth: '100%', 
    maxHeight: '300px', 
    width: 'auto', 
    height: 'auto',  
    marginBottom: '10px', 
    objectFit: 'contain' 
  },
  experienceNumber: { 
    fontSize: '2rem', 
    fontWeight: 'bold', 
    color: '#2e4075' 
  },
  experienceLabel: { 
    fontSize: '1.2rem', 
    fontWeight: 'bold', 
    color: '#2e4075' 
  },
};

export default Home;
