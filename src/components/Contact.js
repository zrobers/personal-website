import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaFilePdf, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData(e.target);
      
      // Check honeypot
      const gotcha = formData.get('_gotcha');
      if (gotcha) {
        setError('Invalid submission detected');
        setLoading(false);
        return;
      }

      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mdkdkban', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError('');
    setLoading(false);
  };

  return (
    <div className="contact-container">
      <header className="contact-header">Get In Touch</header>
      <div className="contact-content">
        {/* Headshot */}
        <div className="headshot-container">
          <img src="/images/headshot.jpeg" alt="Headshot" className="headshot" />
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/zach-robers-0579b7236/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin style={styles.socialIcon} />
          </a>
          <a href="https://github.com/zrobers" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub style={styles.socialIcon} />
          </a>
          <a href="/robers_zach_resume.pdf" download className="icon-link">
            <FaFilePdf style={styles.socialIcon} />
          </a>
        </div>

        {/* Email Link */}
        <div className="email-container">
          <p>
            <a href="mailto:zachary.robers@duke.edu" className="email-link" style={styles.emailLink}>
              zachary.robers@duke.edu
            </a>
          </p>
        </div>

        {/* Form or Thank-You */}
        {submitted ? (
          <div className="thank-you-container">
            <FaCheckCircle style={styles.checkIcon} />
            <p style={styles.thankYouText}>Thank you for your message!</p>
            <button onClick={resetForm} className="contact-button" style={{...styles.button, maxWidth: '200px', marginTop: '20px'}}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mdkdkban"
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* Honeypot: bots will fill this, humans won't */}
            <div style={{ display: 'none' }}>
              <label>
                Keep this field blank:
                <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
              </label>
            </div>

            {/* Optional custom subject */}
            <input type="hidden" name="_subject" value="New Contact Form Submission" />

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              placeholder="Enter your email"
              className="contact-input"
              disabled={loading}
            />

            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Write your message here"
              className="contact-textarea"
              disabled={loading}
            />

            <button 
              type="submit" 
              className="contact-button" 
              style={styles.button}
              disabled={loading}
            >
              {loading ? (
                <>
                  <FaSpinner className="spinner" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        )}

        {/* LinkedIn Embed */}
        <div className="linkedin-feed">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7228731079082283008"
            height="1509"
            width="504"
            frameBorder="0"
            allowFullScreen
            title="Embedded post"
            style={styles.iframe}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  socialIcon: { 
    width: '24px', 
    height: '24px'
  },
  emailLink: { 
    color: '#2e4075', 
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.3s ease'
  },
  label: { 
    display: 'block', 
    fontWeight: '600', 
    marginBottom: '8px', 
    color: '#2e4075',
    textAlign: 'left',
    fontSize: '1.1rem'
  },
  button: { 
    padding: '15px 30px', 
    fontSize: '1.1rem', 
    color: '#fff', 
    backgroundColor: '#2e4075', 
    border: 'none', 
    borderRadius: '10px', 
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(46, 64, 117, 0.3)',
    width: '100%'
  },
  checkIcon: { 
    fontSize: '4rem', 
    color: '#28a745', 
    marginBottom: '20px' 
  },
  thankYouText: { 
    fontSize: '1.8rem', 
    color: '#2e4075',
    fontWeight: '600'
  },
  iframe: { 
    width: '100%', 
    border: 'none',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
  },
};

export default Contact;
