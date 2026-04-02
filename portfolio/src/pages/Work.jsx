// pages/Work.jsx
import React from 'react';
import "../styles/work.css";


const projects = [
  { id: 1, title: 'Wrangler Brew Co.', category: 'Branding', img: 'https://placehold.co/500x400/A77C4A/F5E6D0?text=Craft+Cider+Label' },
  { id: 2, title: 'Dust & Sage', category: 'Packaging', img: 'https://placehold.co/500x400/BF8F5A/FDF3E3?text=Spice+Branding' },
  { id: 3, title: 'Saddle Up', category: 'Logo Design', img: 'https://placehold.co/500x400/CA9E6E/FFF0DF?text=Rodeo+Event' },
  { id: 4, title: 'Western Gazette', category: 'Editorial', img: 'https://placehold.co/500x400/B47C48/FBEBD9?text=Magazine+Spread' },
  { id: 5, title: 'Cowboy Poetry', category: 'Poster', img: 'https://placehold.co/500x400/AA7848/FDF0E0?text=Poetry+Night' },
  { id: 6, title: 'Horseshoe Co.', category: 'Merch', img: 'https://placehold.co/500x400/9C6E3E/F7E9D8?text=T-shirt+Design' },
];

const Work = () => {
  return (
    <div className="work-page container">
      <div className="page-header">
        <h1 className="section-title">Graphic Design Work</h1>
        <div className="western-divider"></div>
        <p className="subtitle">Branding, print, packaging & more — inspired by the frontier.</p>
      </div>
      <div className="work-grid">
        {projects.map(project => (
          <div className="work-card" key={project.id}>
            <div className="work-img" style={{ backgroundImage: `url(${project.img})` }}></div>
            <div className="work-info">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;