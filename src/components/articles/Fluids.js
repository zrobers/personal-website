import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuoyantForceAnalysis = () => {
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
        <h1 style={styles.title}>Mathematical Analysis of the Buoyant Force in Non-Newtonian Fluids</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <img 
          src="/images/article-images/buoyancy.png" 
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
            This paper details the construction of a physical apparatus for measuring the position of an object
            submerged in liquid rising due to the buoyant force. Physical data is then analyzed alongside a
            differential equation derived from Newton’s Second Law, which when solved, models the
            position of an object rising due to the buoyant force as a function of time. Subsequently, these methods are extended to the analysis of the buoyant force inside oobleck, a dilatant non-Newtonian fluid. A revised apparatus is constructed to allow for physical observation in spite of oobleck’s opaque nature. Mathematical and physical theory to explain the abnormal behavior of oobleck’s buoyant force is proposed and analyzed using second order differential equations.
          </p>
        </section>

        {/* PDF Embed Section */}
        <section style={styles.section}>
        <a href="/Mathematical Analysis of the Buoyant Force in Non-Newtonian Fluids.pdf" target="_blank">
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

export default BuoyantForceAnalysis;
