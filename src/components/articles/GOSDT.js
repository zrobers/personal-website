import React from 'react';
import { useNavigate } from 'react-router-dom';

const GOSDT = () => {
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
        <h1 style={styles.title}>Exploring the Efficiency of GOSDT</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <p style={styles.subtitle}>April 2025</p>
        <img 
          src="/images/article-images/decision_tree.png" 
          alt="Placeholder for article image" 
          style={styles.heroImage} 
        />
      </header>

      {/* Article Body */}
      <article style={styles.article}>
        {/* Abstract Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p>
          Decision trees provide an intuitive approach for both classification and regression, yet they tend to overfit without a mechanism to penalize complexity. By introducing a sparsity parameter penalizing the size of a tree, one can control the trade-off between training loss and model simplicity. This balance is central to interpretable machine learning and raises an important question: is there an algorithm that guarantees the optimal tree—minimizing a loss function that includes a complexity penalty without incurring exponential runtime? 
          </p>
          <p>
          The Generalized Optimal Sparse Decision Trees (GOSDT) algorithm addresses this challenge by seeking the globally optimal tree. In practice, however, the complexity of the tree search space remains a major bottleneck. As the number of features or data points grows, the number of potential subproblems can become enormous, despite pruning strategies. While GOSDT is among the most efficient exact algorithms available, its performance can degrade on large-scale datasets or when the regularization parameter is small, motivating further investigation into the underlying mechanics of GOSDT, including how performance differs with hyperparameters and how its runtime can be improved in practice.
          </p>
        </section>

        {/* PDF Embed Section */}
        <section style={styles.section}>
        <a href="/Exploring_the_Efficiency_of_GOSDT.pdf" target="_blank">
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

export default GOSDT;
