import React from 'react';
import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Footer Content */}
        <div style={styles.footerContent}>
          
          {/* About Section */}
          <div style={styles.footerSection}>
            <div style={styles.logoContainer}>
              <img src="/Z_logo.png" alt="Zach Robers" style={styles.logo} />
              <h3 style={styles.footerTitle}>Zach Robers</h3>
            </div>
            <p style={styles.footerDescription}>
              A.B. Duke Scholar studying Mathematics & Computer Science.
            </p>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <FaUniversity style={styles.contactIcon} />
                <span>Duke University</span>
              </div>
              <div style={styles.contactItem}>
                <FaMapMarkerAlt style={styles.contactIcon} />
                <span>Chapel Hill, NC</span>
              </div>
              <div style={styles.contactItem}>
                <FaGraduationCap style={styles.contactIcon} />
                <span>Junior Year</span>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Connect</h4>
            <div style={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/zach-robers-0579b7236/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/zrobers"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:zachary.robers@duke.edu"
                style={styles.socialLink}
                aria-label="Email Zach"
              >
                <FaEnvelope size={20} />
                <span>Email</span>
              </a>
              <a
                href="/robers_zach_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                aria-label="Download Resume"
              >
                <FaFilePdf size={20} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Quick Links</h4>
            <div style={styles.footerLinks}>
              <a href="/research" style={styles.footerLink}>Research</a>
              <a href="/projects" style={styles.footerLink}>Projects</a>
              <a href="/nonprofit" style={styles.footerLink}>Nonprofit</a>
              <a href="/thought-leadership" style={styles.footerLink}>Thought Leadership</a>
              <a href="/contact" style={styles.footerLink}>Contact</a>
            </div>
          </div>

          {/* Nonprofit Section */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Nonprofit Work</h4>
            <div style={styles.footerLinks}>
              <a 
                href="https://www.sailea.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.footerLink}
              >
                The Scholastic AI League
              </a>
              <a 
                href="https://www.echhsalumni.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.footerLink}
              >
                ECHHS Alumni Association
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>
            &copy; {currentYear} Zach Robers. All rights reserved.
          </p>
          <div style={styles.footerBottomLinks}>
            <span style={styles.footerNote}>Built with React & modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2e4075',
    color: 'white',
    padding: '2rem 0 1rem',
    position: 'relative',
    bottom: 0,
    width: '100%',
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  logo: {
    height: '32px',
    width: 'auto',
  },
  footerTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: 0,
    color: '#ffffff',
  },
  footerSubtitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#ffffff',
  },
  footerDescription: {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#cbd5e1',
    fontSize: '0.875rem',
  },
  contactIcon: {
    color: '#5b6bff',
    fontSize: '1rem',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#cbd5e1',
    textDecoration: 'none',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  footerLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    padding: '0.25rem 0',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  },
  footerBottom: {
    borderTop: '1px solid rgba(203, 213, 225, 0.2)',
    paddingTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    margin: 0,
    fontSize: '0.875rem',
    fontWeight: '300',
    color: '#94a3b8',
  },
  footerBottomLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  footerBottomLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.3s ease',
  },
  footerDivider: {
    color: '#64748b',
    fontSize: '0.75rem',
  },
  footerNote: {
    color: '#64748b',
    fontSize: '0.75rem',
    margin: 0,
  },
};

export default Footer;
