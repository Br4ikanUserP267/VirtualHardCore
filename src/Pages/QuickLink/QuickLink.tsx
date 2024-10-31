import React from 'react';
import { Link } from 'react-router-dom';
import './QuickLink.css'; // Asegúrate de que esta ruta sea correcta
import WhatsappButton from '../../Components/whatsapp/whatsapp'

const QuickLink: React.FC = () => {
  return (
    <div className="quick-link-container">
      <div className="highlight-section">
        <h2>Nuestras Ofertas Exclusivas</h2>
        <div className="link-list">
          <Link to="/powerbuilding" className="link-item highlight">Powerbuilding</Link>
          <Link to="/powerlifting" className="link-item highlight">Powerlifting</Link>
          <Link to="/culturismo" className="link-item highlight">Culturismo</Link>
          <Link to="/salud" className="link-item highlight">Entrena por Salud</Link>
          <Link to="/streetlifting" className="link-item highlight">StreetLifting</Link>

          <Link to="/otros-deportes" className="link-item highlight">Otros Deportes</Link>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>Testimonios y Promociones</h2>
        <div className="link-list">
          <Link to="/testimonios" className="link-item">Testimonios</Link>
          <Link to="/promociones" className="link-item">Promociones</Link>
          <Link to="/atletas" className="link-item">Atletas Destacados</Link>
        </div>
      </div>

      <div className="social-section">
        <h2>Conéctate con Nosotros</h2>
        <div className="link-list">
          <a href="https://www.instagram.com/tu_perfil" className="link-item social" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/tu_perfil" className="link-item social" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.tiktok.com/tu_perfil" className="link-item social" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>

      <div className="registration-section">
        <h2>Inscripción Liga de Potencia de Sucre</h2>
        <div className="link-list">
          <Link to="/inscripcion-liga-potencia" className="link-item highlight">Inscríbete Aquí</Link>
        </div>
      </div>
      <WhatsappButton/>
    </div>
  );
};

export default QuickLink;
