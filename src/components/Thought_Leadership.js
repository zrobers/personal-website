import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtLeadership = () => {
  const articles = [
    {
      id: 1,
      title: 'Why Machines Can\'t Act From Ethics',
      image: '/path-to-article1-image.jpg',
      link: '/articles/ai-future',
    },
    {
      id: 2,
      title: 'Against Precautionary Basic Income: An Argument for the Survival or Suvival',
      image: '/path-to-article2-image.jpg',
      link: '/articles/sustainable-tech',
    },
    {
      id: 3,
      title: 'Hacking Inductive Authenticity',
      image: '/path-to-article3-image.jpg',
      link: '/articles/tech-education',
    },
    {
        id: 4,
        title: 'Continuity and Consciousness',
        image: '/path-to-article3-image.jpg',
        link: '/articles/tech-education',
    },
    {
        id: 5,
        title: 'The Easy Problem of AI Rights',
        image: '/path-to-article3-image.jpg',
        link: '/articles/tech-education',
    },
    {
        id: 6,
        title: 'Machine God: Theoria Superi',
        image: '/path-to-article3-image.jpg',
        link: '/articles/tech-education',
    },
    {
        id: 7,
        title: 'How Often Do Men Think About the Roman Empire? Misconceptions of Roman Masculinity',
        image: '/path-to-article3-image.jpg',
        link: '/articles/tech-education',
    },
    {
        id: 8,
        title: 'Can teachers detect ChatGPT usage?',
        image: '/path-to-article3-image.jpg',
        link: '/articles/tech-education',
    },
    {
        id: 9,
        title: 'Mathematical Investigation of the Buoyant Force in Non-Newtonian Fluids',
        image: '/path-to-article3-image.jpg',
        link: '/articles/tech-education',
    },
    {
        id: 10,
        title: 'Stock Pediction with Difference Equations and Custom Sentiment Analysis',
        image: '/path-to-article3-image.jpg',
        link: '/articles/tech-education',
    },
  ];

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.pageContainer}>
        <header style={styles.header}>Thought Leadership</header>
        <p style={styles.subtitle}>
          A curated selection of thought-provoking academic works on topics ranging from the ethics of artificial intelligence to the Roman Empire.
        </p>
        <div style={styles.articlesContainer}>
          {articles.map((article) => (
            <div key={article.id} style={styles.articleCard}>
              <img
                src={article.image}
                alt={article.title}
                style={styles.articleImage}
              />
              <h3 style={styles.articleTitle}>{article.title}</h3>
              <Link to={article.link} style={styles.articleLink}>
                Read More
              </Link>
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
    borderRadius: '10px', // Optional for aesthetic
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional for a card-like look
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
    marginBottom: '30px',
    color: '#2e4075',
    fontWeight: 'bold',
  },
  articlesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  articleCard: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#d4e3fc',
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
  },
};

export default ThoughtLeadership;