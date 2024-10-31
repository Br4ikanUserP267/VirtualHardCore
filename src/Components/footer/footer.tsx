import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-contact">
          <h2>Contáctanos</h2>
          <p>Email: hardcoregym.com</p>
          <p>Teléfono: +57 310 6417371</p>
          <p>Dirección: Calle California, Sincelejo, Sucre</p>
        </section>
        
        <section className="footer-social">
          <h2>Síguenos</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
