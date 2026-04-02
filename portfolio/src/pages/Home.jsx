import "../styles/home.css";

// pages/Home.jsx - Enhanced with web design showcase
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealElements);
    revealElements();
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="home-page">
      <div className="hero container">
        <div className="hero-content reveal">
          <div className="hero-badge">✦ GRAPHIC & WEB DESIGNER ✦</div>
          <h1>Madison <span className="hero-accent">Mitchell</span></h1>
          <div className="western-divider"></div>
          <p className="hero-tagline">Crafting bold digital experiences with a wild west soul — branding, web design, illustration, and authentic storytelling.</p>
          <div className="hero-buttons">
            <button className="western-btn" onClick={() => window.location.href='/work'}>View Graphic Work</button>
            <button className="western-btn secondary" onClick={() => window.location.href='/web-design'}>Explore Web Design</button>
          </div>
        </div>
        <div className="hero-image reveal">
          <div className="hero-badge-img">✦ web + graphic fusion ✦</div>
        </div>
      </div>

      {/* Web Design Highlight Section */}
      <div className="web-highlight">
        <div className="container">
          <div className="web-highlight-content reveal">
            <span className="highlight-badge">Web Design Excellence</span>
            <h2>Modern Interfaces with Rustic Soul</h2>
            <p>I build responsive, user-centered websites that combine cutting-edge development with western-inspired aesthetics. From custom portfolios to e-commerce platforms — every line of code tells a story.</p>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Figma</span>
              <span>Tailwind</span>
              <span>WordPress</span>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-work">
        <div className="container">
          <h2 className="section-title reveal">Featured Projects</h2>
          <div className="featured-grid">
            <div className="feature-card reveal">
              <div className="card-img" style={{backgroundImage: "url('https://placehold.co/600x450/D4B886/5C3E1F?text=Desert+Branding')"}}></div>
              <h3>Desert Rhythms</h3>
              <p>Brand identity · Packaging · Web</p>
            </div>
            <div className="feature-card reveal">
              <div className="card-img" style={{backgroundImage: "url('https://placehold.co/600x450/C8AE7A/4A2F18?text=E-Commerce+Design')"}}></div>
              <h3>Frontier Store</h3>
              <p>Full website · UX/UI · Development</p>
            </div>
            <div className="feature-card reveal">
              <div className="card-img" style={{backgroundImage: "url('https://placehold.co/600x450/BFA06E/6B4A2A?text=Poster+Series')"}}></div>
              <h3>Spirit of the West</h3>
              <p>Digital illustration · Poster design</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat reveal">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat reveal">
              <span className="stat-number">25+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat reveal">
              <span className="stat-number">8+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat reveal">
              <span className="stat-number">100%</span>
              <span className="stat-label">Authentic Design</span>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-section reveal">
        <div className="container">
          <p className="quote-text">“Design that rides like the wind — bold, untamed, and unforgettable. Every pixel, a story. Every line, a journey.”</p>
          <div className="western-divider" style={{margin: '20px auto'}}></div>
          <p className="quote-author">— Madison Mitchell, Creative Director</p>
        </div>
      </div>
    </div>
  );
};

export default Home;