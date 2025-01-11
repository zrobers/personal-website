import React from 'react';
import {
  FaCode,
  FaFilePdf,
  FaLink,
  FaFolder,
} from 'react-icons/fa';

const Projects = () => {
  const projectData = [
    {
      logo: '/images/connectu_hands_logo.png',
      name: 'ConnectU',
      description: 'Mentorship solutions with AI-powered matching methodology.',
      fastFacts: [
        { icon: <FaCode size={30} />, label: 'Code - Request Access', link: 'https://github.com/zrobers/ab-family-match' },
        { icon: <FaFolder size={30} />, label: 'Pitch Deck - Request Access', link: 'https://docs.google.com/presentation/d/17YZkoeBwSonMPR3QtOlNPmiymfeMbX-9FjKyB1bRZzE/edit?usp=sharing' },
      ],
    },
    {
      logo: '/images/equiflow_logo.png',
      name: 'Equiflow',
      description:
        'Interpretable machine learning pipeline to advise companies whether to pursue M&A transactions. Dataset labeled through retroactive DCF calculations.',
      fastFacts: [
        { icon: <FaCode size={30} />, label: 'Code', link: 'https://github.com/zrobers/ibbdc' },
        { icon: <FaFolder size={30} />, label: 'Use Case', link: 'https://example.com/equiflow-usecase' },
      ],
    },
    {
      logo: '/images/mm_logo_v1.png',
      name: 'Madness Multiplier',
      description:
        'Community-based sports betting game with intentionally exploitable odds.',
      fastFacts: [
        { icon: <FaLink size={30} />, label: 'Lightweight Solution - Request Access', link: 'https://example.com/madness-multiplier' },
      ],
    },
    {
      logo: '/images/neighborhood_clusters.png',
      name: 'Rental Property Pricing Models',
      description:
        'Extending a technique used in biomedical engineering to create new clustering techniques helpful for predicting Airbnb prices.',
      fastFacts: [
        { icon: <FaCode size={30} />, label: 'Code', link: 'https://github.com/zrobers/abnb-classifier' },
        { icon: <FaFilePdf size={30} />, label: 'Paper' }, // PDF is not an external link
      ],
    },
    {
      logo: '/images/sailea.png',
      name: 'SAILea Automations',
      description:
        "Scripts automating workflows for the Scholastic Artificial Intelligence League through LLM-generated content.",
      fastFacts: [
        { icon: <FaCode size={30} />, label: 'Code', link: 'https://github.com/zrobers/sailea-api' },
      ],
    },
    {
      logo: '/Z_logo_inverted.png',
      name: 'Personal Website and Branding',
      description:
        'Demonstration of front-end web development and branding capabilities.',
      fastFacts: [
        { icon: <FaCode size={30} />, label: 'Code', link: 'https://github.com/zrobers/personal-website' },
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <header style={styles.header}></header>

      {/* Introduction */}
      <div style={styles.content}>
        <h2 style={styles.title}>Get a glimpse of what I'm currently working on.</h2>
      </div>

      {/* Project Sections */}
      {projectData.map((project, index) => (
        <section key={index} style={styles.projectSection}>
          <div style={styles.logoContainer}>
            <img src={project.logo} alt={`${project.name} Logo`} style={styles.logo} />
          </div>
          <h3 style={styles.projectName}>{project.name}</h3>
          <p style={styles.description}>{project.description}</p>
          <div style={styles.fastFactsSection}>
            {project.fastFacts.map((fact, factIndex) => (
              <div key={factIndex} style={styles.fastFactItem}>
                <a
                  href={fact.link || '#'}
                  target={fact.link ? '_blank' : '_self'}
                  rel={fact.link ? 'noopener noreferrer' : undefined}
                  style={styles.factLink}
                >
                  {fact.icon}
                  <div style={styles.factLabel}>{fact.label}</div>
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const styles = {
  header: {
    position: 'relative',
    height: '300px',
    backgroundImage: 'url("/images/projects_header.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#d4e3fc',
  },
  title: {
    fontSize: '2rem',
    color: '#2e4075',
    textAlign: 'center',
  },
  projectSection: {
    margin: '40px 20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #ddd',
    textAlign: 'center',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    height: '160px',
  },
  projectName: {
    fontSize: '1.8rem',
    color: '#2e4075',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#2e4075',
  },
  fastFactsSection: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#2e4075',
    padding: '30px',
    color: 'white',
  },
  fastFactItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
  },
  factLink: {
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center',
  },
  factLabel: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default Projects;
