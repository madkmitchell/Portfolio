// pages/Illustration.jsx
import React from 'react';
import "../styles/illustration.css";


const illustrations = [
  { title: 'Desert Wanderer', medium: 'Digital painting', img: 'https://placehold.co/500x400/DABA8C/4A2E1E?text=Coyote+Sketch' },
  { title: 'Sunset Rider', medium: 'Vector art', img: 'https://placehold.co/500x400/C49A6C/5C3A20?text=Cowgirl+Silhouette' },
  { title: 'Cacti Nights', medium: 'Watercolor style', img: 'https://placehold.co/500x400/B38855/624523?text=Desert+Botanical' },
  { title: 'Ghost Town', medium: 'Ink illustration', img: 'https://placehold.co/500x400/AF7E4A/3E2A18?text=Abandoned+Saloon' },
];

const Illustration = () => {
  return (
    <div className="illustration-page container">
      <div className="page-header">
        <h1 className="section-title">Illustration</h1>
        <div className="western-divider"></div>
        <p className="subtitle">Narrative artwork blending western folklore with modern linework.</p>
      </div>
      <div className="illustration-grid">
        {illustrations.map((item, idx) => (
          <div className="ill-card" key={idx}>
            <div className="ill-img" style={{ backgroundImage: `url(${item.img})` }}></div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Illustration;