import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Button from 'react-bootstrap/Button';
import './eventos.css';

// Importar imágenes si tienes alguna para mostrar
import eventImage from '../../assets/Presentation/gym.jpg';
import WhatsappButton from '../../Components/whatsapp/whatsapp';

// Datos de ejemplo para los eventos
const events = [
  {
    id: 1,
    title: 'Evento de Powerlifting 2024',
    date: '20 de Noviembre, 2024',
    location: 'Centro Deportivo XYZ, Ciudad ABC',
    description: 'El evento anual de Powerlifting reúne a los mejores atletas para competir en diferentes categorías. ¡No te lo pierdas!',
    img: eventImage,
  },
  {
    id: 2,
    title: 'Evento de Powerlifting 2023',
    date: '18 de Noviembre, 2023',
    location: 'Centro Deportivo ABC, Ciudad XYZ',
    description: 'El evento anual de Powerlifting 2023 fue un gran éxito con la participación de atletas de todo el país.',
    img: eventImage,
  }
];

const PowerliftingEvent: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="powerlifting-content container my-5">
        <h1 className="text-center mb-5">Eventos de Powerlifting</h1>
        <ul className="list-group">
          {events.map(event => (
            <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={event.img} alt={event.title} />
                <div>
                  <h5>{event.title}</h5>
                  <p><strong>Ubicación:</strong> {event.location}</p>
                  <p><strong>Fecha:</strong> {event.date}</p>
                </div>
              </div>
              <div>
                <Button variant="primary" className="inscribete-btn">Inscribirse</Button>
                <Button variant="secondary" className="ver-nominados-btn">Ver Nominados</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default PowerliftingEvent;
