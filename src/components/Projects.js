import React from 'react';
import Sailea_Slideshow from '../components/Sailea_Slideshow';
import Echhsaa_Slideshow from '../components/Echhsaa_Slideshow';
import { FaUsers, FaFolder, FaComments, FaGlobeAmericas, FaMoneyCheck, FaNewspaper, FaSchool} from 'react-icons/fa';

const Projects = () => {
  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
      </header>

      {/* Introduction */}
      <div style={styles.content}>
        <h2 style={styles.title}>
          Get a glimpse of what I'm currently working on. 
        </h2>
      </div>

      {/* The Scholastic Artificial Intelligence League Section */}
      <section style={styles.nonprofitSection}>
        <div style={styles.headerRow}>
          <a href="https://sailea.org" target="_blank" rel="noopener noreferrer" style={styles.logoLink}>
            <img src="/images/sailea.png" alt="SAILea Logo" style={styles.logo} />
          </a>
          <span style={styles.verticalBar}>|</span>
          <a href="https://sailea.org" target="_blank" rel="noopener noreferrer" style={styles.nameLink}>
            The Scholastic Artificial Intelligence League (SAILea)
          </a>
        </div>

        {/* Description */}
        <p style={styles.paragraph}>
          The Scholastic Artificial Intelligence League empowers high school students globally to explore AI through interactive resources, courses, speaker events, and competitions. We aim to democratize AI education and inspire the next generation of innovators.
        </p>

        {/* Slideshow Section */}
        <div style={styles.gallery}>
          <Sailea_Slideshow />
        </div>

        {/* Fast Facts Section */}
      <div style={styles.fastFactsSection}>
        <div style={styles.fastFactItem}>
          <FaUsers style={styles.fastFactIcon} />
          <div style={styles.factLabel}>2,000+ Members</div>
        </div>
        <div style={styles.fastFactItem}>
          <FaFolder style={styles.fastFactIcon} />
          <div style={styles.factLabel}>150+ Resources</div>
        </div>
        <div style={styles.fastFactItem}>
          <FaComments style={styles.fastFactIcon} />
          <div style={styles.factLabel}>6 Speaker Events</div>
        </div>
        <div style={styles.fastFactItem}>
          <FaGlobeAmericas style={styles.fastFactIcon} />
          <div style={styles.factLabel}>4 Continents</div>
        </div>
      </div>

      </section>

      {/* The East Chapel Hill Alumni Association Section */}
      <section style={styles.nonprofitSection}>
        <div style={styles.headerRow}>
          <a href="https://echhsalumni.org" target="_blank" rel="noopener noreferrer" style={styles.logoLink}>
            <img src="/images/echhsaa.png" alt="ECHHS Alumni Logo" style={styles.logo} />
          </a>
          <span style={styles.verticalBar}>|</span>
          <a href="https://echhsalumni.org" target="_blank" rel="noopener noreferrer" style={styles.nameLink}>
            The East Chapel Hill High School Alumni Association 
          </a>
        </div>

        {/* Description */}
        <p style={styles.paragraph}>
          The East Chapel Hill High School Alumni Association fosters connections among alumni, supports current students, and enhances the ECHHS campus through fundraising initiatives, mentorship programs, and gatherings.
        </p>

         {/* Slideshow Section */}
         <div style={styles.gallery}>
          <Echhsaa_Slideshow />
        </div>

        {/* Fast Facts Section */}
      <div style={styles.fastFactsSection}>
        <div style={styles.fastFactItem}>
          <FaMoneyCheck style={styles.fastFactIcon} />
          <div style={styles.factLabel}>$10k+ Raised</div>
        </div>
        <div style={styles.fastFactItem}>
          <FaUsers style={styles.fastFactIcon} />
          <div style={styles.factLabel}>120+ Members</div>
        </div>
        <div style={styles.fastFactItem}>
          <FaNewspaper style={styles.fastFactIcon} />
          <div style={styles.factLabel}>19 Blog Entries</div>
        </div>
        <div style={styles.fastFactItem}>
          <FaSchool style={styles.fastFactIcon} />
          <div style={styles.factLabel}>200+ Students Impacted</div>
        </div>
      </div>

      </section>
    </div>
  );
};

const styles = {
  header: {
    position: 'relative',
    height: '300px',
    backgroundImage: 'url("/images/projects_header.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#d4e3fc',
  },
  title: {
    marginTop: '20px',
    fontSize: '2rem',
    color: '#2e4075',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#2e4075',
    textAlign: 'center',
    marginTop: '10px',
  },
  nonprofitSection: {
    margin: '40px 20px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '20px',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    height: '50px',
  },
  verticalBar: {
    margin: '0 10px',
    fontSize: '4rem',
    color: '#2e4075',
  },
  nameLink: {
    fontSize: '2rem',
    color: '#2e4075',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  logoLink: {
    textDecoration: 'none',
  },
  gallery: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  galleryImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  caption: {
    marginTop: '10px',
    fontStyle: 'italic',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#2e4075',
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
};

export default Projects;

