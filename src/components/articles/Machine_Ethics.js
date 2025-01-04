import React from 'react';

const ArticleTemplate = () => {
  return (
    <div style={styles.container}>
      {/* Article Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Why Machines Can't Act From Ethics</h1>
        <p style={styles.subtitle}>A deep dive into transformative technologies shaping our world.</p>
        <img 
          src="/images/article-images/machine-ethics.jpg" 
          alt="machine-ethics" 
          style={styles.heroImage} 
        />
      </header>

      {/* Article Body */}
      <article style={styles.article}>
        {/* Introduction Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p>
            Artificial Intelligence (AI) has become a cornerstone of modern innovation, influencing industries from healthcare to finance. 
            But how did we get here, and where are we headed?<sup style={styles.sup}>1</sup>
          </p>
        </section>

        {/* Key Section with Figure */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Key Applications</h2>
          <figure style={styles.figure}>
            <img 
              src="/path-to-figure-image.jpg" 
              alt="AI Applications Chart" 
              style={styles.figureImage} 
            />
            <figcaption style={styles.caption}>
              Figure 1: Growth of AI applications across industries (2020-2030).
            </figcaption>
          </figure>
          <p>
            AI has demonstrated remarkable capabilities in areas like natural language processing, computer vision, and predictive analytics.
            For instance, OpenAI's GPT series has transformed content generation.<sup style={styles.sup}>2</sup>
          </p>
        </section>

        {/* Ethical Considerations Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Ethical Considerations</h2>
          <p>
            As AI evolves, ethical questions emerge, such as data privacy and bias in algorithms. Policymakers and technologists must work
            collaboratively to address these challenges.<sup style={styles.sup}>3</sup>
          </p>
        </section>

        {/* Sources Section */}
        <section style={styles.sources}>
          <h3 style={styles.sectionTitle}>Sources</h3>
          <ol style={styles.sourceList}>
            <li>History of AI. <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a></li>
            <li>AI Applications Report 2023. <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a></li>
            <li>Ethics in AI. <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a></li>
          </ol>
        </section>
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
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2e4075'
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
  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
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
    color: '#0073b1',
  },
  figure: {
    textAlign: 'center',
    margin: '20px 0',
  },
  figureImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  caption: {
    fontSize: '0.9rem',
    color: '#555',
    marginTop: '10px',
  },
  sup: {
    fontSize: '0.8rem',
    verticalAlign: 'super',
  },
  sources: {
    marginTop: '40px',
  },
  sourceList: {
    paddingLeft: '20px',
    fontSize: '1rem',
  },
};

export default ArticleTemplate;
