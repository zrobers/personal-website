import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src="/Z_logo.png" alt="Logo" className="logo-image" />
        </div>

        {/* Hamburger icon */}
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          {/* Simple unicode icon; swap for an <svg> or icon component if you like */}
          ☰
        </button>

        {/* nav-links: add "active" when menuOpen */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>home</Link></li>
          <li><Link to="/research" onClick={() => setMenuOpen(false)}>research</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>projects</Link></li>
          <li><Link to="/nonprofit" onClick={() => setMenuOpen(false)}>nonprofit</Link></li>
          <li><Link to="/thought-leadership" onClick={() => setMenuOpen(false)}>thought leadership</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
