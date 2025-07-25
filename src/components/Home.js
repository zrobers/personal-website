import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Slideshow from '../components/Slideshow'; 
import ArticleCarousel from '../components/Article_Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBrain, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FaSchool, FaMapMarkerAlt, FaLaptopCode, FaHiking, FaCalendar, FaGraduationCap } from 'react-icons/fa';

const experiences = [
    { image: '/images/code.png', label: 'Software / Data Science Internships', number: 3 },
    { image: '/images/research.png', label: 'Research Experiences', number: 4 },
    { image: '/images/projects.png', label: 'Personal Projects', number: 6 },
    { image: '/images/math.png', label: 'University Math Courses', number: 10 },
  ];

const skills = [
  { icon: <FontAwesomeIcon icon={faCode} />, label: 'Software Development' },
  { icon: <FontAwesomeIcon icon={faBrain} />, label: 'Machine Learning' },
  { icon: <FontAwesomeIcon icon={faCogs} />, label: 'Mathematical Modeling' },
  { icon: <FontAwesomeIcon icon={faChartLine} />, label: 'Data Analysis' },
  { icon: <FaLaptopCode />, label: 'Product' },  
  { icon: <FaHiking />, label: 'Leadership' },  
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
          overlay.style.bottom = '20px'; 
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

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
          <div style={styles.factLabel}>Junior</div>
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

      {/* Nonprofit Section */}
      <div style={styles.nonprofitSection}>
        <h2 style={styles.nonprofitTitle}>Nonprofit Work</h2>
        <p style={styles.nonprofitDescription}>
          I’ve founded and managed nonprofits that inspire students and alumni worldwide. Learn more about my efforts and explore our initiatives.
        </p>
        <div style={styles.nonprofitLogos}>
          <a href="https://www.sailea.org" target="_blank" rel="noopener noreferrer">
            <img src="/images/sailea.png" alt="The Scholastic Artificial Intelligence League" style={styles.logo} />
          </a>
          <a href="https://www.echhsalumni.org" target="_blank" rel="noopener noreferrer">
            <img src="/images/echhsaa.png" alt="The ECHHS Alumni Association" style={styles.logo} />
          </a>
        </div>
        <a href="/nonprofit" style={styles.learnMoreLinkInverted}>
          Learn More
        </a>
      </div>

      {/* Thought Leadership Section */}
      <div style={styles.thoughtLeadershipSection}>
        <h2 style={styles.thoughtLeadershipTitle}>Thought Leadership</h2>
        <p style={styles.thoughtLeadershipDescription}>
          Modern challenges necessitate novel insights. Read my unique thoughts on the ethics and philosophy of AI, leadership in a digital age, and the intersection of classical antiquity and the modern day.
        </p>
        <ArticleCarousel />
        <a href="/thought-leadership" style={styles.learnMoreLink}>
          Thought Leadership Home
        </a>
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
    minHeight: '500px', // or whatever minimum height you'd like
    overflow: 'hidden',
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
  nonprofitSection: {
    textAlign: 'center',
    padding: '40px',
    backgroundImage: 'url("/images/modern-pattern.png")', // Replace with your modern pattern image
    backgroundSize: 'cover',
    backgroundColor: '#2e4075',
  },
  nonprofitTitle: {
    fontSize: '2.5rem',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  nonprofitDescription: {
    fontSize: '1.2rem',
    color: '#fff',
    marginBottom: '30px',
  },
  thoughtLeadershipSection: {
    textAlign: 'center',
    padding: '40px',
    backgroundImage: 'url("/images/modern-pattern.png")', // Replace with your modern pattern image
    backgroundSize: 'cover',
    backgroundColor: '#ffffff',
  },
  thoughtLeadershipTitle: {
    fontSize: '2.5rem',
    color: '#2e4075',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  thoughtLeadershipDescription: {
    fontSize: '1.2rem',
    color: '#2e4075',
    marginBottom: '30px',
  },
  nonprofitLogos: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
  },
  logo: {
    width: '150px',
    height: 'auto',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
  learnMoreLink: {
    display: 'inline-block',
    fontSize: '1.2rem',
    color: '#ffffff',
    backgroundColor: '#2e4075',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
  learnMoreLinkInverted: {
    display: 'inline-block',
    fontSize: '1.2rem',
    color: '#2e4075',
    backgroundColor: '#ffffff',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

export default Home;
