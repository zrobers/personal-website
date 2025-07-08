import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ThoughtLeadership = () => {
  const [filter, setFilter] = useState('All');

  const articles = [
    { id: 1, title: 'Sparsity and Skew: The Role of Bad Data in the Prominence of the Classics', image: '/images/article-images/sparsity_and_skew.png', link: '/thought-leadership/sparsity-skew' },
    { id: 2, title: 'Deriving the Riemann-Siegel Formula with the Method of Steepest Descent', image: '/images/article-images/riemann_siegel.png', link: '/thought-leadership/riemann-siegel' },
    { id: 3, title: 'Exploring the Efficiency of GOSDT', image: '/images/article-images/decision_tree.png', link: '/thought-leadership/gosdt-efficiency' },
    { id: 4, title: 'Why Machines Can\'t Act From Ethics', image: '/images/article-images/machine-ethics.jpg', link: '/thought-leadership/machine-ethics' },
    { id: 5, title: 'Against Precautionary Basic Income: An Argument for the Survival or Survival', image: '/images/article-images/survival.jpg', link: '/thought-leadership/precautionary-basic-income' },
    { id: 6, title: 'Hacking Inductive Authenticity', image: '/images/article-images/hacking-authenticity.webp', link: '/thought-leadership/hacking-authenticity' },
    { id: 7, title: 'Continuity and Consciousness', image: '/images/article-images/consciousness.jpg', link: '/thought-leadership/continuity-consciousness' },
    { id: 8, title: 'The Easy Problem of AI Rights', image: '/images/article-images/ai-rights.jpg', link: '/thought-leadership/ai-rights' },
    { id: 9, title: 'Machine God: Theōria Superī', image: '/images/article-images/machine-god.webp', link: '/thought-leadership/machine-god' },
    { id: 10, title: 'How Often Do Men Think About the Roman Empire? Misconceptions of Roman Masculinity', image: '/images/article-images/roman-masculinity.jpg', link: '/thought-leadership/roman-masculinity' },
    { id: 11, title: 'Can teachers detect ChatGPT usage?', image: '/images/article-images/chat.jpg', link: '/thought-leadership/chat' },
    { id: 12, title: 'Mathematical Investigation of the Buoyant Force in Non-Newtonian Fluids', image: '/images/article-images/buoyancy.png', link: '/thought-leadership/fluids' },
    { id: 13, title: 'Stock Pediction with Difference Equations and Custom Sentiment Analysis', image: '/images/article-images/stocks.jpg', link: '/thought-leadership/stocks' },
  ];

  const humanitiesIds = new Set([1, 4, 5, 6, 7, 8, 9, 10]);
  const sciencesIds = new Set(articles.map(a => a.id).filter(id => !humanitiesIds.has(id) && id !== 11));

  const filteredArticles = articles.filter(article => {
    if (filter === 'All') return article.id !== 11;
    if (filter === 'Humanities') return humanitiesIds.has(article.id);
    if (filter === 'Sciences') return sciencesIds.has(article.id);
    return true;
  });

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.pageContainer}>
        <header style={styles.header}>Thought Leadership</header>
        <p style={styles.subtitle}>
          A curated selection of thought-provoking academic works on topics ranging from the ethics of artificial intelligence to the Roman Empire.
        </p>
        <div style={styles.filterContainer}>
          {['Humanities', 'All', 'Sciences'].map((name) => (
            <button
              key={name}
              style={{
                ...styles.filterButton,
                backgroundColor: filter === name ? '#2e4075' : 'white',
                color: filter === name ? 'white' : '#2e4075',
                border: `2px solid #2e4075`,
              }}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <div style={styles.articlesContainer}>
          {filteredArticles.map((article) => (
            <div key={article.id} style={styles.articleCard}>
              <img src={article.image} alt={article.title} style={styles.articleImage} />
              <h3 style={styles.articleTitle}>{article.title}</h3>
              <Link to={article.link} style={styles.articleLink}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  backgroundContainer: {
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/images/marble-background.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  },
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    marginTop: '15px',
    color: '#2e4075',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#2e4075',
    fontWeight: 'bold',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '30px',
  },
  filterButton: {
    padding: '8px 18px',
    fontSize: '1rem',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    fontWeight: 'bold',
  },
  articlesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  articleCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#d4e3fc',
    color: '#2e4075',
    height: '100%',
  },
  articleImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  },
  articleTitle: {
    fontSize: '1.5rem',
    margin: '15px 0',
  },
  articleLink: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#2e4075',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: 'auto',
  },
};

export default ThoughtLeadership;
