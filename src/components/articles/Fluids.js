
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

        {/* Baseline Model Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Establishing a Baseline Model with Water</h2>
          <p>
            Proposed by Greek Mathematician Archimedes of Syracuse, Archimedes' Principle is the foundation
            of modeling the position of objects submerged in fluids of higher density. It states that the buoyant
            force on an object is equal to the weight of the fluid it displaces.
          </p>
          <div style={styles.equation}>
            F<sub>B</sub> = &rho;gV
          </div>
          <p>
            Where &rho; is the fluid density, g is the gravitational constant (9.81), and V is the volume of the object
            submerged in the fluid.
          </p>
          <br />
          <p> 
          When an object rises due to the buoyant force, it is subject to resistance in the form of drag. In this case, we will use Stoke’s Law to approximate drag of our spherical object: 
          </p>
          <div style={styles.equation}>
            F<sub>D</sub> = 6&pi;&nu;Rv
          </div>
        </section>

        {/* Oobleck Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Oobleck</h2>
          <p>
            Named by Dr. Seuss, oobleck is a 3:2 mixture of cornstarch and water. The same properties that make
            the substance of interest to young kids and Dr. Seuss make oobleck a scientific anomaly...
          </p>
        </section>

        {/* Proposed Explanations Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Proposed Explanations and Corresponding Differential Equations</h2>
          <h3 style={styles.sectionSubTitle}>1. Immediate Jump</h3>
          <p>To explain the immediate rise in vertical position, one need not look further than tangible observation...</p>
        </section>

        {/* References Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>References</h2>
          <ol style={styles.sourceList}>
            <li>Uniyal, M. (2022, August 22). Non-Newtonian fluid: Definition, types, examples...</li>
            <li>Carroll, B. (2014, January 0). Archimedes' Principle...</li>
            <li>Libretexts. (2022, July 20). 8.6: Drag Forces in Fluids...</li>
          </ol>
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
  sectionSubTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2e4075',
  },
  equation: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    border: '1px solid #ddd',
    margin: '20px 0',
    fontFamily: 'Courier New, Courier, monospace',
  },
  sourceList: {
    paddingLeft: '20px',
    fontSize: '1rem',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};

export default BuoyantForceAnalysis;
