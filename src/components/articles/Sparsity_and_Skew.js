import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleTemplate = () => {
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
        <h1 style={styles.title}>Sparsity and Skew: The Role of Bad Data in the Prominence of the Classics</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <p style={styles.subtitle}>April 22, 2025</p>
        <img
          src="/images/article-images/sparsity_and_skew.png"
          alt="Placeholder for article image"
          style={styles.heroImage}
        />
      </header>

      {/* Article Body */}
      <article style={styles.article}>
        {/* Introduction */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p>
            It is indisputable that the Classics, hereafter used to refer to the literature, histories, societies, and cultures of ancient Greece and Rome, remain uniquely ingrained in the modern Western ethos. Greek columns and Roman arches adorn government buildings. The works of ancient political theorists serve as a basis for the governmental structures of democratic nations. The Odyssey, Iliad, and Aeneid remain at the forefront of literature. Politicians and prominent figures still reference the words of emperors and consuls, seeking to fit themselves into their image.
          </p>
          <br />
          <p>
            These examples demonstrate that the value one finds in the Classics is highly dependent on the context and motives of the person calling upon them. This work argues that the Classics are particularly disposed to enable a broad and often contradictory range of interpretation, a phenomenon stemming from a potent combination of unrepresentative data (sparsity and skew) and generalized credibility.
          </p>
        </section>

        {/* Sparsity and Skew */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Sparsity and Skew in Classical Data</h2>
          <p>
            In data science, a dataset sampled independently and identically at random best represents its domain. Thinking of the historical record as a dataset, it is clear that figures like Caesar and Napoleon do not dominate by chance: their prominence is a byproduct of influence and historiographical bias. As time elapses, this skew widens, especially for periods as distant as antiquity.
          </p>
          <br />
          <p>
            Primary sources for the Classics are notably sparse, with the majority of classical literature lost. Surviving evidence originates from few sites, introducing further skew. The combination of sparse and skewed data means outlying examples cannot be contextualized by broader trends, making them dominate modern perception.
          </p>
        </section>

        {/* Exploitation */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Exploitation of Sparse and Skewed Data</h2>
          <p>
            The skew of classical data means that the examples shaping our view—Caesar, the Coliseum, the Odyssey—do not represent antiquity as a whole. This sparsity allows a single anecdote to stand in for an entire era. As a result, one can find a link between a dominant classical example and virtually any modern argument.
          </p>
        </section>

        {/* Credibility */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Classical Credibility</h2>
          <p>
            The term “classic” implies uniqueness, exceptional quality, and enduring value. In the Western world, classical artifacts and studies are highly regarded, lending credibility to any argument that invokes them. From the Founding Fathers’ use of Cicero to modern self-help authors drawing on Stoicism, classical appeals confer persuasive weight.
          </p>
        </section>

        {/* Dangerous Combination */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>A Dangerous Combination</h2>
          <p>
            Combining credibility with sparse and skewed data enables misuse. Fascist regimes, modern extremist groups, and influential figures like Elon Musk have exploited select classical examples to justify agendas. In a more robust dataset, such one-sided appeals would be harder to craft.
          </p>
        </section>

        {/* Conclusion */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Conclusion</h2>
          <p>
            A more holistic approach to classical scholarship—extracting demonstrable trends rather than relying on isolated examples—can restore balance to classical reception. Without this shift, the rhetorical value of a narrow classical narrative will continue to be exploited.
          </p>
        </section>

        {/* Bibliography */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Bibliography</h3>
          <ol style={styles.sourceList}>
            <li>Roche, Helen. "Mussolini’s ‘Third Rome’, Hitler’s Third Reich and the Allure of Antiquity." Fascism 8, no. 2 (2019).</li>
            <li>Richard, Carl J. <em>The Founders and the Classics: Greece, Rome, and the American Enlightenment</em>. Harvard University Press, 1995.</li>
            <li>Cambre, Rachel Alexander. “Classical Education’s Remedy for America’s Loneliness Epidemic.” The Heritage Foundation. Accessed April 22, 2025.</li>
            <li>Sarwar, Rizwana, and Saadia Fatima. "Madeline Miller’s Circe: A Feminist Stylistic Approach." Perennial Journal of History 3, no. 2 (2022).</li>
            <li>James, Gareth, Daniela Witten, Trevor Hastie, and Robert Tibshirani. <em>An Introduction to Statistical Learning</em>. Springer, 2013.</li>
            <li>Nora, Pierre. "Between Memory and History: Les Lieux de Mémoire." Representations (1989).</li>
            <li>Ferrario, Sarah Brown. <em>Historical Agency and the Great Man in Classical Greece</em>. Cambridge University Press, 2014.</li>
            <li>Von Albrecht, Michael. <em>A History of Roman Literature</em>. Brill, 2019.</li>
            <li>Davies, John K. “Classical Greece: Production.” In <em>The Cambridge Economic History of the Greco-Roman World</em>, 2007.</li>
            <li>Papadopoulos, John K. "Canon Creation/Destruction and Cultural Formation." GRECO-ROMAN STUDIES IN ANCHORING INNOVATION (2022).</li>
            <li>Toczko, Rafat. “Why Should We Save the Classical Tradition?” Antigone: A Magazine for Classicists, 2022.</li>
            <li>Kindt, Julia. "Classical Studies and the Public Humanities." Public Humanities 1 (2025).</li>
            <li>Bishop, Michael F. “The Founding Fathers and the Inspiration of Rome.” Grateful American® Foundation, 2021.</li>
            <li>Gold, John R., and Margaret M. Gold. "Revival and Reinvention: the Olympic Games, Athens 1896." 2021.</li>
            <li>Holiday, Ryan. “Books and Courses.” RyanHoliday.net, 2022.</li>
            <li>Zuckerberg, Donna. <em>Not All Dead White Men: Classics and Misogyny in the Digital Age</em>. Harvard University Press, 2018.</li>
            <li>“When the Richest Man in the World Loves Classics.” Pharos, January 31, 2025.</li>
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
    marginBottom: '10px',
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
    color: '#2e4075',
  },
  sourceList: {
    paddingLeft: '20px',
    fontSize: '1rem',
  },
};

export default ArticleTemplate;
