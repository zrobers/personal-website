import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const ArticleCarousel = () => {
  const articles = [
    {
        id: 1,
        title: 'Why Machines Can\'t Act From Ethics',
        image: '/images/article-images/machine-ethics.jpg',
        link: '/thought-leadership/machine-ethics',
      },
      {
        id: 2,
        title: 'Against Precautionary Basic Income: An Argument for the Survival of Survival',
        image: '/images/article-images/survival.jpg',
        link: '/thought-leadership/precautionary-basic-income',
      },
      {
        id: 3,
        title: 'Hacking Inductive Authenticity',
        image: '/images/article-images/hacking-authenticity.webp',
        link: '/thought-leadership/hacking-authenticity',
      },
      {
          id: 4,
          title: 'Continuity and Consciousness',
          image: '/images/article-images/consciousness.jpg',
          link: '/thought-leadership/continuity-consciousness',
      },
      {
          id: 5,
          title: 'The Easy Problem of AI Rights',
          image: '/images/article-images/ai-rights.jpg',
          link: '/thought-leadership/ai-rights',
      },
      {
          id: 6,
          title: 'Machine God: Theōria Superī',
          image: '/images/article-images/machine-god.webp',
          link: '/thought-leadership/machine-god',
      },
      {
          id: 7,
          title: 'How Often Do Men Think About the Roman Empire? Misconceptions of Roman Masculinity',
          image: '/images/article-images/roman-masculinity.jpg',
          link: '/thought-leadership/roman-masculinity',
      },
      {
          id: 8,
          title: 'Can teachers detect ChatGPT usage?',
          image: '/images/article-images/chat.jpg',
          link: '/thought-leadership/chat',
      },
      {
          id: 9,
          title: 'Mathematical Investigation of the Buoyant Force in Non-Newtonian Fluids',
          image: '/images/article-images/buoyancy.png',
          link: '/thought-leadership/fluids',
      },
      {
          id: 10,
          title: 'Stock Prediction with Difference Equations and Custom Sentiment Analysis',
          image: '/images/article-images/stocks.jpg',
          link: '/thought-leadership/stocks',
      },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.pageContainer}>
        <div style={styles.carouselContainer}>
          <button style={styles.scrollButton} onClick={scrollLeft}>
            &#8249;
          </button>
          <div style={styles.articlesRow} ref={scrollRef}>
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
          <button style={styles.scrollButton} onClick={scrollRight}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backgroundContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  },
  pageContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
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
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  scrollButton: {
    backgroundColor: '#2e4075',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    fontSize: '1.5rem',
    margin: '0 10px',
    zIndex: 10,
  },
  articlesRow: {
    display: 'flex',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    gap: '20px',
    padding: '10px 0',
    width: '100%',
  },
  articleCard: {
    flex: '0 0 auto',
    width: '300px',
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

export default ArticleCarousel;
