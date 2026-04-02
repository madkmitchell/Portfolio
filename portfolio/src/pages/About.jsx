// pages/About.jsx
import React from 'react';
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-page container">
      <div className="about-grid">
        <div className="about-text">
          <h1 className="section-title">Howdy, I'm Madison Mitchell</h1>
          <div className="western-divider"></div>
          <p>Based in the high desert, I blend rugged western storytelling with contemporary graphic design. With over 8 years of experience crafting brand identities, posters, and illustrations, my work celebrates authenticity, raw texture, and the spirit of open skies.</p>
          <p>After graduating from the School of Visual Arts, I've collaborated with small ranches, boutiques, and music festivals — infusing every project with handcrafted grit and typographic soul. When I’m not designing, I’m sketching under juniper trees or restoring vintage signage.</p>
          <button className="western-btn" onClick={() => window.location.href='/contact'}>Let's Ride →</button>
        </div>
        <div className="about-photo">
          <div className="photo-frame"></div>
        </div>
      </div>
    </div>
  );
};

export default About;