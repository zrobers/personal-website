import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtLeadership = () => {
  const articles = [
    {
      id: 1,
      title: 'The Future of AI in Everyday Life',
      image: '/path-to-article1-image.jpg',
      link: '/articles/ai-future',
    },
    {
      id: 2,
      title: 'Sustainable Tech Innovations',
      image: '/path-to-article2-image.jpg',
      link: '/articles/sustainable-tech',
    },
    {
      id: 3,
      title: 'Redefining Education with Technology',
      image: '/path-to-article3-image.jpg',
      link: '/articles/tech-education',
    },
  ];

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>Thought Leadership</header>
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
  );
};

const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '30px',
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
    backgroundColor: '#0073b1',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  articleLinkHover: {
    backgroundColor: '#005582',
  },
};

export default ThoughtLeadership;
