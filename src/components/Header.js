import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src="/Z_logo.png" alt="Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">home</Link></li>
          <li><Link to="/research">research</Link></li>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/nonprofit">nonprofit</Link></li>
          <li><Link to="/thought-leadership">thought leadership</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
