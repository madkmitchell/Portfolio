// pages/WebDesign.jsx - NEW: Dedicated web design portfolio page
import React from 'react';
import "../styles/web.css";


const webProjects = [
  { id: 1, title: 'Desert Rose Studio', type: 'E-commerce', tech: 'React, Node, Stripe', img: 'https://placehold.co/600x450/D4B886/5C3E1F?text=E-commerce+Site', features: ['Custom cart', 'Mobile responsive', 'SEO optimized'] },
  { id: 2, title: 'Frontier Law Firm', type: 'Corporate', tech: 'WordPress, PHP, MySQL', img: 'https://placehold.co/600x450/C8AE7A/4A2F18?text=Corporate+Website', features: ['Booking system', 'Client portal', 'Live chat'] },
  { id: 3, title: 'Saddle Up Magazine', type: 'Editorial', tech: 'Next.js, Sanity', img: 'https://placehold.co/600x450/BFA06E/6B4A2A?text=Magazine+Site', features: ['Blog CMS', 'Newsletter', 'Membership'] },
  { id: 4, title: 'Wild West Festival', type: 'Event', tech: 'HTML5, CSS3, GSAP', img: 'https://placehold.co/600x450/AA7848/FDF0E0?text=Event+Landing', features: ['Ticketing', 'Countdown', 'Interactive map'] },
];

const WebDesign = () => {
  return (
    <div className="webdesign-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Web Design & Development</h1>
          <div className="western-divider"></div>
          <p className="subtitle">Custom websites that blend rustic aesthetics with modern functionality.</p>
        </div>

        <div className="web-showcase">
          {webProjects.map(project => (
            <div className="web-project-card" key={project.id}>
              <div className="web-project-img" style={{ backgroundImage: `url(${project.img})` }}>
                <div className="tech-overlay">
                  {project.tech}
                </div>
              </div>
              <div className="web-project-info">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
                <ul className="feature-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}><i className="fas fa-check"></i> {feature}</li>
                  ))}
                </ul>
                <button className="western-btn small">View Case Study →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h2>My Web Design Process</h2>
          <div className="process-steps">
            <div className="step"><span>01</span> Discovery & Strategy</div>
            <div className="step"><span>02</span> Design & Prototyping</div>
            <div className="step"><span>03</span> Development</div>
            <div className="step"><span>04</span> Launch & Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;