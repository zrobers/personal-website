import React from 'react';

const Nonprofit = () => {
  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerText}>Nonprofit</h1>
      </header>

      {/* Introduction */}
      <div style={styles.content}>
        <h2 style={styles.title}>
          My nonprofit work centers on bringing people together around things I care about.
        </h2>
        <p style={styles.subtitle}>
          I currently chair two nonprofit organizations: The Scholastic Artificial Intelligence League and The East Chapel Hill High School Alumni Association.
        </p>
      </div>

      {/* Scholastic Artificial Intelligence League Section */}
      <section style={styles.nonprofitSection}>
        <div style={styles.headerRow}>
          <a href="https://sailea.org" target="_blank" rel="noopener noreferrer" style={styles.logoLink}>
            <img src="/images/sailea.png" alt="SAILea Logo" style={styles.logo} />
          </a>
          <span style={styles.verticalBar}>|</span>
          <a href="https://sailea.org" target="_blank" rel="noopener noreferrer" style={styles.nameLink}>
            Scholastic Artificial Intelligence League (SAILea)<span style={styles.paperclip}>📎</span>
          </a>
        </div>

        <div style={styles.gallery}>
          <img src="/images/sail-gallery1.png" alt="AI Workshop" style={styles.galleryImage} />
          <figcaption style={styles.caption}>AI Workshop with high school students</figcaption>
          {/* Add rotating gallery logic here */}
        </div>

        <p style={styles.paragraph}>
          The Scholastic Artificial Intelligence League empowers high school students globally to explore AI through workshops, competitions, and collaborative projects. We aim to democratize AI education and inspire the next generation of innovators.
        </p>

        <ul style={styles.statsList}>
          <li>🌎 1,000+ members across 4 continents</li>
          <li>🏫 Partnerships with 50+ schools</li>
          <li>📚 200+ hours of AI educational content</li>
          <li>🚀 100+ projects completed by student teams</li>
        </ul>
      </section>

      {/* East Chapel Hill Alumni Association Section */}
      <section style={styles.nonprofitSection}>
        <div style={styles.headerRow}>
          <a href="https://echhsalumni.org" target="_blank" rel="noopener noreferrer" style={styles.logoLink}>
            <img src="/images/echhsaa.png" alt="ECHHS Alumni Logo" style={styles.logo} />
          </a>
          <span style={styles.verticalBar}>|</span>
          <a href="https://echhsalumni.org" target="_blank" rel="noopener noreferrer" style={styles.nameLink}>
            East Chapel Hill High School Alumni Association <span style={styles.paperclip}>📎</span>
          </a>
        </div>

        <div style={styles.gallery}>
          <img src="/images/echhs-gallery1.png" alt="Alumni Event" style={styles.galleryImage} />
          <figcaption style={styles.caption}>Reunion event at ECHHS</figcaption>
          {/* Add rotating gallery logic here */}
        </div>

        <p style={styles.paragraph}>
          The East Chapel Hill High School Alumni Association fosters connections among alumni, supports current students, and preserves the rich traditions of ECHHS through events, mentorship programs, and scholarships.
        </p>

        <ul style={styles.statsList}>
          <li>👩‍🎓 5,000+ active alumni</li>
          <li>🎓 $100,000+ in scholarships awarded</li>
          <li>🤝 20+ mentorship programs</li>
          <li>📅 Annual reunion events for 25+ years</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  header: {
    position: 'relative',
    height: '300px',
    backgroundImage: 'url("/images/gazebo.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: '3rem',
    backgroundColor: '#2e4075',
    padding: '10px 20px',
    borderRadius: '5px',
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
  },
  logoLink: {
    textDecoration: 'none',
  },
  paperclip: {
    fontSize: '1rem',
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
  },
  statsList: {
    listStyleType: 'none',
    padding: '0',
    fontSize: '1.2rem',
    lineHeight: '1.8',
  },
};

export default Nonprofit;
