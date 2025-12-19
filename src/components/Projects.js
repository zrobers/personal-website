import React from 'react';
import {
  FaCode,
  FaFilePdf,
  FaLink,
  FaFolder,
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      logo: '/images/research_backer_text_and_logo.png',
      name: 'Research Backer',
      description: 'Crowd funding for accredited research',
      fastFacts: [],
    },
    {
      logo: '/images/connectu_hands_logo.png',
      name: 'ConnectU',
      description: 'Mentorship solutions with AI-powered matching methodology.',
      fastFacts: [
        { icon: <FaLink size={24} />, label: 'Website', link: 'https://connectu.ai' },
        { icon: <FaFolder size={24} />, label: 'Pitch Deck - Request Access', link: 'https://docs.google.com/presentation/d/17YZkoeBwSonMPR3QtOlNPmiymfeMbX-9FjKyB1bRZzE/edit?usp=sharing' },
      ],
    },
    {
      logo: '/images/equiflow_logo.png',
      name: 'Equiflow',
      description:
        'Interpretable machine learning pipeline to advise companies whether to pursue M&A transactions. Dataset labeled through retroactive DCF calculations.',
      fastFacts: [
        { icon: <FaCode size={24} />, label: 'Code', link: 'https://github.com/zrobers/ibbdc' },
        { icon: <FaFolder size={24} />, label: 'Use Case', link: '/equiflow_use_case.pdf'}, // PDF
      ],
    },
    {
      logo: '/images/mm_logo_v1.png',
      name: 'Madness Multiplier',
      description:
        'Community-based sports betting game with intentionally exploitable odds.',
      fastFacts: [
        { icon: <FaLink size={24} />, label: 'Lightweight Solution - Request Access', link: 'https://drive.google.com/drive/folders/1MQr_t-N12puAOAT-9rnuGapCq0wV60go?usp=drive_link' },
      ],
    },
    {
      logo: '/images/neighborhood_clusters.png',
      name: 'Rental Property Pricing Models',
      description:
        'Extending a technique used in biomedical engineering to create new clustering techniques helpful for predicting Airbnb prices.',
      fastFacts: [
        { icon: <FaCode size={24} />, label: 'Code', link: 'https://github.com/zrobers/abnb-classifier' },
        { icon: <FaFilePdf size={24} />, label: 'Paper', link: '/property_pricing.pdf' }, // PDF 
      ],
    },
    {
      logo: '/images/sailea.png',
      name: 'SAILea Automations',
      description:
        "Scripts automating workflows for the Scholastic Artificial Intelligence League through LLM-generated content.",
      fastFacts: [
        { icon: <FaCode size={24} />, label: 'Code', link: 'https://github.com/zrobers/sailea-api' },
      ],
    },
    {
      logo: '/Z_logo_inverted.png',
      name: 'Personal Website and Branding',
      description:
        'Demonstration of front-end web development and branding capabilities.',
      fastFacts: [
        { icon: <FaCode size={24} />, label: 'Code', link: 'https://github.com/zrobers/personal-website' },
      ],
    },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Projects</h1>
          <p style={styles.headerSubtitle}>Get a glimpse of what I'm currently working on</p>
        </div>
      </header>

      {/* Projects Grid */}
      <div style={styles.projectsContainer}>
        {projectData.map((project, index) => (
          <div key={index} style={styles.projectCard} className="project-card">
            <div style={styles.cardHeader}>
              <div style={styles.logoContainer}>
                <img src={project.logo} alt={`${project.name} Logo`} style={styles.logo} />
              </div>
              <h3 style={styles.projectName}>{project.name}</h3>
            </div>
            
            <div style={styles.cardBody}>
              <p style={styles.description}>{project.description}</p>
            </div>
            
            <div style={styles.cardFooter}>
              {project.fastFacts.map((fact, factIndex) => (
                <a
                  key={factIndex}
                  href={fact.link || '#'}
                  target={fact.link ? '_blank' : '_self'}
                  rel={fact.link ? 'noopener noreferrer' : undefined}
                  style={styles.factLink}
                  className="fact-link"
                >
                  <div style={styles.factIcon}>{fact.icon}</div>
                  <span style={styles.factLabel}>{fact.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fbff',
  },
  header: {
    background: 'linear-gradient(135deg, #2e4075 0%, #4a6fa5 100%)',
    padding: '80px 20px',
    textAlign: 'center',
    color: 'white',
  },
  headerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  headerTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: '1.3rem',
    margin: '0',
    opacity: 0.9,
    lineHeight: '1.6',
  },
  projectsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(46, 64, 117, 0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(46, 64, 117, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardHeader: {
    backgroundColor: '#d4e3fc',
    padding: '32px 24px 24px',
    textAlign: 'center',
    borderBottom: '1px solid rgba(46, 64, 117, 0.1)',
    flex: '0 0 auto',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    height: '120px',
    objectFit: 'contain',
  },
  projectName: {
    fontSize: '1.8rem',
    color: '#2e4075',
    fontWeight: 'bold',
    margin: '0',
  },
  cardBody: {
    padding: '24px',
    backgroundColor: 'white',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#2e4075',
    margin: '0',
    textAlign: 'center',
  },
  cardFooter: {
    backgroundColor: '#2e4075',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: '0 0 auto',
  },
  factLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'white',
    transition: 'all 0.2s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  factIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '40px',
  },
  factLabel: {
    fontSize: '1rem',
    fontWeight: '500',
  },
};

export default Projects;
