import "../styles/about.css";

// pages/About.jsx - Enhanced with your UI/UX + Graphic Design background
import React, { useEffect } from 'react';

const About = () => {
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
    <div className="about-page">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <h1 className="section-title">Madison Mitchell</h1>
            <br></br>
            <div className="about-badge">✦ graphic + ui/ux ✦</div>

            <div className="western-divider"></div>
            
            <p className="intro-text">
              I'm a passionate <strong>UI/UX Designer</strong> with a background in <strong>web development</strong> and <strong>graphic design</strong>. 
              I love creating intuitive, visually engaging interfaces that enhance user experiences.
            </p>
            
            <p>
              With a strong eye for detail and a user-centered approach, I specialize in wireframing, prototyping, 
              and front-end development to bring designs to life. My graphic design skills allow me to craft compelling visuals that complement my UI/UX work, 
              ensuring a cohesive and impactful digital presence.
            </p>
            
            <p>
              I'm always exploring new design trends and technologies to craft seamless, accessible, and aesthetically pleasing 
              digital experiences. From the first sketch to the final line of code, every project carries the spirit of the 
              frontier: bold, authentic, and built to last.
            </p>

            {/* Skills Section - Graphic Design + UI/UX */}
            <div className="skills-section">
              <h3>✦ My Craft ✦</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <i className="fas fa-paintbrush"></i>
                  <span>Graphic Design</span>
                  <div className="skill-tags">
                    <span>Branding</span>
                    <span>Typography</span>
                    <span>Packaging</span>
                    <span>Poster Design</span>
                    <span>Illustration</span>
                  </div>
                </div>
                <div className="skill-category">
                  <i className="fas fa-laptop-code"></i>
                  <span>UI/UX & Web</span>
                  <div className="skill-tags">
                    <span>Wireframing</span>
                    <span>Prototyping</span>
                    <span>Figma</span>
                    <span>React</span>
                    <span>Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <button className="western-btn" onClick={() => window.location.href='/work'}>
                View Graphic Work <i className="fas fa-arrow-right"></i>
              </button>
              <button className="western-btn" onClick={() => window.location.href='/web-design'}>
                Explore Web Design <i className="fas fa-code"></i>
              </button>
            </div>
          </div>

          <div className="about-photo reveal">
            <div className="photo-frame">
              <div className="photo-overlay">
              <img className="photo" src="../images/icons/erin.jpg" alt="Madison Mitchell" />
                <div className="western-quote">"Design with soul"</div>
              </div>
            </div>
            <div className="location-badge">
              <i className="fas fa-map-marker-alt"></i> Dadeville, Missouri
            </div>
          </div>
        </div>

        {/* Tools & Technologies Section */}
        <div className="tools-section reveal">
          <h3>Tools I Ride With</h3>
          <div className="tools-grid">
            <div className="tool"><i className="fab fa-figma"></i> Figma</div>
            <div className="tool"><i className="fab fa-react"></i> React</div>
            <div className="tool"><i className="fab fa-adobe"></i> Illustrator</div>
            <div className="tool"><i className="fab fa-adobe"></i> Photoshop</div>
            <div className="tool"><i className="fab fa-html5"></i> HTML/CSS</div>
            <div className="tool"><i className="fas fa-code"></i> JavaScript</div>
            <div className="tool"><i className="fas fa-palette"></i> InDesign</div>
            <div className="tool"><i className="fas fa-mobile-alt"></i> Responsive Design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;