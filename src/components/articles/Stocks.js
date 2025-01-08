import React from 'react';
import { useNavigate } from 'react-router-dom';

const StockAnalysis = () => {
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
        <h1 style={styles.title}>Stock Market Prediction Using Difference Equations and Natural Language Processing</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <img 
          src="/images/article-images/stocks.jpg" 
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
          The aim of this paper is to discuss the creation of stock market modeling software using difference equations, differential equations, and a simplistic natural language processing model. The research methodology involved expressing common stock market patterns through difference equations, an analysis to find the correlation between a specific stock’s history and standard stock patterns, using a second order differential equation to evaluate the volatility of a stock, quantifying the impact of news articles and social media discussions on a stock through an NLP model, and combining these factors to produce a predictive algorithm for the stock’s future. While equations and algorithms used in this paper are arbitrarily defined, the idea that difference equations and NLP could be used in unison to predict stock changes in real time is proven to be a legitimate possibility given the success of modeling the Allstate Insurance Company’s stock throughout the paper.
          </p>
        </section>

        {/* PDF Embed Section */}
        <section style={styles.section}>
        <a href="public/Stock Market Prediction Using Difference Equations and Natural Language Processing.pdf" target="_blank">
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

export default StockAnalysis;
