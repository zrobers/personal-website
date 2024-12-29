import React from 'react';

const Nonprofit = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.headerText}>Nonprofit</h1>
      </header>
      <div style={styles.content}>
        <h2 style={styles.title}>My nonprofit work centers on bringing people together around things I care about. I curently chair two nonprofit organizations: The Scholastic Artificial Intelligence League and The East Chapel Hill High School Alumni Association.</h2>
        <p style={styles.paragraph}>
          I founded The Scholastic Artificial Intelligence League, a nonprofit network that connects high school students worldwide
          who are interested in AI. With over 1,000 members across 4 continents, the league encourages collaboration and learning.
        </p>
      </div>
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
  },
  title: {
    marginTop: '20px',
    fontSize: '2rem',
    color: '#2e4075',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },
};

export default Nonprofit;

