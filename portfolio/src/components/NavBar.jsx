import "../styles/navbar.css";


// components/NavBar.jsx - Enhanced with logo animation
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">
          <span className="logo-brand">Madison</span>
          <span className="logo-accent">Mitchell</span>
          <span className="logo-icon">⚡</span>
        </Link>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
          <i className="fas fa-home"></i> Home
        </NavLink>
        <NavLink to="/work" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
          <i className="fas fa-palette"></i> Graphic
        </NavLink>
        <NavLink to="/web-design" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
          <i className="fas fa-code"></i> Web
        </NavLink>
        <NavLink to="/illustration" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
          <i className="fas fa-draw-polygon"></i> Illustration
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
          <i className="fas fa-user"></i> About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
          <i className="fas fa-envelope"></i> Contact
        </NavLink>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};


export default NavBar;