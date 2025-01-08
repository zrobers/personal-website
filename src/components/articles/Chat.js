import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatGPTQualityAnalysis = () => {
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
        <h1 style={styles.title}>Can teachers detect ChatGPT usage?</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <img 
          src="/images/article-images/chat.jpg" 
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
            ChatGPT, a generative AI software created by OpenAI, is disrupting classrooms across the
            United States. The software, which uses a transformer neural network to generate responses to
            various prompts and questions, is being utilized by students to write essays and complete
            assignments. Many schools and nations have responded to the rise of ChatGPT by administering
            a ban on its use. However, only about half of students (51%) consider the use of the AI model to
            be a form of cheating. Since inputting essay prompts and academic questions into ChatGPT
            enables students to avoid putting in the effort to develop academically, it is easy to see how the
            software can negatively affect the United States education system. Perhaps most paramount to
            preventing the use of ChatGPT is ensuring that teachers can detect its use. When teachers can
            detect the use of ChatGPT, they can administer proper consequences, thus discouraging its future
            use. Since ChatGPT was pre-trained by an abundance of written works and designed to mimic
            human writing styles, detecting when it has been used is difficult, especially when students take
            precautions to make their use of ChatGPT less apparent. The following study aims to determine
            how effective high school teachers are at detecting when ChatGPT has been used to answer an
            academic question. Furthermore, the study analyzes teachers’ perceptions of the quality of
            responses written by ChatGPT in comparison to human-authored responses.
          </p>
        </section>

        {/* PDF Embed Section */}
        <section style={styles.section}>
        <a href="/quality_and_recognizability_of_chatgpt_repsonses_in_comparison_to_human_authored_scholarship.pdf" target="_blank">
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

export default ChatGPTQualityAnalysis;


