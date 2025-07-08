import React from 'react';
import { useNavigate } from 'react-router-dom';

const Riemann = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/thought-leadership');
  };

  return (
    <div style={styles.container}>
      {/* Back Button at Top */}
      <button onClick={goBack} style={styles.backButtonTop}>
        &larr; Back
      </button>

      {/* Article Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Deriving the Riemann-Siegel Formula with the Method of Steepest Descent</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <p style={styles.subtitle}>April 2025</p>
        <img 
          src="/images/article-images/riemann_siegel.png" 
          alt="Placeholder for article image" 
          style={styles.heroImage} 
        />
      </header>

      {/* Article Body */}
      <article style={styles.article}>
        {/* Abstract Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Abstract</h2>
          <p>
          This paper presents a high-level derivation of the Riemann-Siegel formula using the method of steepest descent. Beginning with foundational integral representations, we apply asymptotic analysis techniques to systematically develop the formula. The significance of this approach within analytic number theory and its implications for computational number theory are discussed. 
          </p>
        </section>

        {/* PDF Embed Section */}
        <section style={styles.section}>
        <a href="/Riemann_Siegel.pdf" target="_blank">
          Open PDF
        </a>
        </section>

        {/* Back Button at Bottom */}
        <button onClick={goBack} style={styles.backButtonBottom}>
          Thought Leadership Home
        </button>
      </article>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  backButtonTop: {
    margin: '10px 0',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#2e4075',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    textDecoration: 'underline',
  },
  backButtonBottom: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#2e4075',
    background: 'none',
    border: '1px solid #2e4075',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2e4075',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  article: {
    marginTop: '20px',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2e4075',
  },
  pdfEmbed: {
    width: '100%',
    height: '600px',
    border: 'none',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};

export default Riemann;
