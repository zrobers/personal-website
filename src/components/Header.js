import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="/Z_logo.png" alt="Zach Robers" className="logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/research" 
              className={`nav-link ${isActive('/research') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Research
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/nonprofit" 
              className={`nav-link ${isActive('/nonprofit') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Nonprofit
            </Link>
          </li>
          <li>
            <Link 
              to="/thought-leadership" 
              className={`nav-link ${isActive('/thought-leadership') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Thought Leadership
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="mobile-nav-links">
            <li>
              <Link 
                to="/" 
                className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/research" 
                className={`mobile-nav-link ${isActive('/research') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Research
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`mobile-nav-link ${isActive('/projects') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/nonprofit" 
                className={`mobile-nav-link ${isActive('/nonprofit') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Nonprofit
              </Link>
            </li>
            <li>
              <Link 
                to="/thought-leadership" 
                className={`mobile-nav-link ${isActive('/thought-leadership') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Thought Leadership
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
