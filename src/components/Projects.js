import React from 'react';
import { FaCode, FaUsers, FaFolder, FaComments, FaGlobeAmericas, FaMoneyCheck, FaNewspaper, FaSchool } from 'react-icons/fa';

const Projects = () => {
  const projectData = [
    {
      logo: '/images/connectu_hands_logo.png',
      name: 'ConnectU',
      description:
        'Empowering high school students globally to explore AI through resources, courses, speaker events, and competitions.',
      fastFacts: [
        { icon: <FaUsers />, label: '2,000+ Members' },
        { icon: <FaFolder />, label: '150+ Resources' },
        { icon: <FaComments />, label: '6 Speaker Events' },
        { icon: <FaGlobeAmericas />, label: '4 Continents' },
      ],
    },
    {
      logo: '/images/equiflow_logo.png',
      name: 'Equiflow',
      description:
        'Fostering connections among alumni, supporting current students, and enhancing the campus through initiatives.',
      fastFacts: [
        { icon: <FaMoneyCheck />, label: '$10k+ Raised' },
        { icon: <FaUsers />, label: '120+ Members' },
        { icon: <FaNewspaper />, label: '19 Blog Entries' },
        { icon: <FaSchool />, label: '200+ Students Impacted' },
      ],
    },
    {
      logo: '/images/mm_logo_v1.png',
      name: 'Madness Multiplier',
      description:
        'Fostering connections among alumni, supporting current students, and enhancing the campus through initiatives.',
      fastFacts: [
        { icon: <FaMoneyCheck />, label: '$10k+ Raised' },
        { icon: <FaUsers />, label: '120+ Members' },
        { icon: <FaNewspaper />, label: '19 Blog Entries' },
        { icon: <FaSchool />, label: '200+ Students Impacted' },
      ],
    },{
      logo: '/images/neighborhood_clusters.png',
      name: 'Rental Property Pricing Models',
      description:
        'Fostering connections among alumni, supporting current students, and enhancing the campus through initiatives.',
      fastFacts: [
        { icon: <FaMoneyCheck />, label: '$10k+ Raised' },
        { icon: <FaUsers />, label: '120+ Members' },
        { icon: <FaNewspaper />, label: '19 Blog Entries' },
        { icon: <FaSchool />, label: '200+ Students Impacted' },
      ],
    },{
      logo: '/images/sailea.png',
      name: 'SAILea Automations',
      description:
        'I\'ve created scripts automating workflows for the Scholastic Artificial Intelligence League through LLM-generated content.',
      fastFacts: [
        { icon: <FaMoneyCheck />, label: '$10k+ Raised' },
        { icon: <FaUsers />, label: '120+ Members' },
        { icon: <FaNewspaper />, label: '19 Blog Entries' },
        { icon: <FaSchool />, label: '200+ Students Impacted' },
      ],
    },{
      logo: '/Z_logo_inverted.png',
      name: 'Personal Website and Branding',
      description:
        'This website serves as a demonstration of front-end web development and branding capabilities.',
      fastFacts: [
        { icon: <FaMoneyCheck />, label: '$10k+ Raised' },
        { icon: <FaUsers />, label: '120+ Members' },
        { icon: <FaNewspaper />, label: '19 Blog Entries' },
        { icon: <FaSchool />, label: '200+ Students Impacted' },
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
                {fact.icon}
                <div style={styles.factLabel}>{fact.label}</div>
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
  factLabel: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};

export default Projects;
