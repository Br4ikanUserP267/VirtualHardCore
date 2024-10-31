import React from 'react';
import './whatsapp.css'; // Asegúrate de que esta ruta sea correcta
import whatsappLogo from '../../assets/whatsapp.png'; // Ruta corregida

const WhatsappButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/+573003078838" // Número de teléfono de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsappLogo} alt="WhatsApp" />
    </a>
  );
};

export default WhatsappButton;
