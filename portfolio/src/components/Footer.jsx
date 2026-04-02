import "../styles/footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <p>© 2026 Madison Mitchell — Graphic & Web Design with Western Soul</p>
          <p className="footer-tagline">✦ Built with React • Deployed with passion ✦</p>
        </div>
        <div className="footer-icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-behance"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;