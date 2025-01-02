import React from 'react';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={styles.contactContainer}>
      <header style={styles.contactHeader}>Contact</header>
      <div style={styles.contactContent}>
        {/* Circular Headshot */}
        <div style={styles.headshotContainer}>
          <img
            src="/images/headshot.jpeg"
            alt="Headshot"
            style={styles.headshot}
          />
        </div>

        {/* Social Links */}
        <div style={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/zach-robers-0579b7236/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaLinkedin style={styles.socialIcon} />
          </a>
          <a
            href="https://github.com/zrobers"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaGithub style={styles.socialIcon} />
          </a>
          <a href="public/zach_robers_cv.pdf" download style={styles.iconLink}>
            <FaFilePdf style={styles.socialIcon} />
          </a>
        </div>


        {/* Email */}
        <div style={styles.email}>
          <p>
            <a href="zachary.robers@duke.edu" style={styles.emailLink}>
              zachary.robers@duke.edu
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="/send-email"
          method="POST"
          style={styles.contactForm}
        >
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            style={styles.input}
          />
          <label htmlFor="message" style={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Write your message here"
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>

          {/* LinkedIn Post Embed */}
          <div style={styles.linkedinFeed}>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7228731079082283008"
            height="1509"
            width="504"
            frameBorder="0"
            allowFullScreen
            title="Embedded post"
            style={styles.iframe}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const styles = {
  contactContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  contactHeader: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2e4075'
  },
  headshotContainer: {
    marginBottom: '20px',
  },
  headshot: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    color: '#2e4075'
  },
  email: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  emailLink: {
    color: '#2e4075',
    textDecoration: 'None'
  },
  contactForm: {
    marginBottom: '30px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#2e4075',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    color: '#2e4075',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    color: '#2e4075',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#2e4075',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#2e4075',
  },
  linkedinFeed: {
    marginTop: '20px',
  },
  iframe: {
    width: '100%',
    border: 'none',
  },
};

export default Contact;
