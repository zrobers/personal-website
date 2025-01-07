
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StockPredictionAnalysis = () => {
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
            The aim of this paper is to discuss the creation of stock market modeling software using
            difference equations, differential equations, and a simple natural language processing model...
          </p>
        </section>

        {/* Introduction Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p>
            The stock market is no longer controlled by a select group of Ivy League graduates who
            strut to work in personally tailored suits and enter skyscrapers adorned with the names of JP
            Morgan, BlackRock, Citigroup, and Goldman Sachs. Rather, it is the schoolteacher dressed in
            pajamas and armed with an investment app that is a part of the fastest-growing sector of the
            world investment economy.
          </p>
        </section>

        {/* Modeling Stock Patterns Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Modeling Stock Patterns through Difference Equations</h2>
          <p>
            Difference equations can be used to model all types of functions as an alternative to
            continuous differential equations. The general first-order difference equation can be written as:
          </p>
          <div style={styles.equation}>
            y<sub>n+1</sub> = f(y<sub>n</sub>, n)
          </div>
        </section>

        {/* Stock Volatility Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Stock Volatility Index</h2>
          <p>
            Traditional stock volatility models rely on a procedure involving the standard deviation
            of stock prices. However, simplifying volatility down to standard deviation does not account for
            the way/rate in which the rate of change of the stock is being manipulated by market
            fluctuations...
          </p>
        </section>

        {/* Natural Language Processing Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Natural Language Processing Model</h2>
          <p>
            When analyzing an article or social media manuscript to find its impact on a stock, the
            two most principal factors are the positivity of the text towards the stock and how relevant the
            text is to the stock. The NLP model created for this analysis tool involves two main methods
            (one for the positivity of the text and another for the relevancy) that can be multiplied together to
            determine the overall impact on the stock.
          </p>
        </section>

        {/* Predictive Algorithm Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Predictive Algorithm</h2>
          <p>
            All the components discussed thus far can be combined to produce a difference equation model for
            20 additional iterations of a given stock, with each iteration resembling a day of the stock being
            traded on the market.
          </p>
        </section>

        {/* References Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>References</h2>
          <ol style={styles.sourceList}>
            <li>Fitzgerald, M. (2021, March 10). Retail investors continue to jump into the stock market...</li>
            <li>Unknown. (2022). 11 most essential stock chart patterns...</li>
            <li>Hayes, A. (2022, February 8). Volatility. Investopedia...</li>
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

export default StockPredictionAnalysis;
