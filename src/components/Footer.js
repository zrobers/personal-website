import React from 'react';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
        <a
          href="https://www.linkedin.com/in/zach-robers-0579b7236/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/zrobers"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          aria-label="GitHub Profile"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="/robers_zach_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          aria-label="Download Resume"
        >
          <FaFilePdf size={32} />
        </a>
      </div>
      <p style={styles.copyright}>
        &copy; {currentYear} Zach Robers. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2e4075',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
    position: 'relative',
    bottom: 0,
    width: '100%',
    fontFamily: "'Poppins', sans-serif",
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '0.5rem',
  },
  link: {
    color: 'white',
    transition: 'color 0.3s',
    textDecoration: 'none',
  },
  copyright: {
    margin: 0,
    fontSize: '0.9rem',
    fontWeight: '300',
  },
};

export default Footer;
