import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './deportesAdaptado.css';

// Importar imágenes si tienes alguna para mostrar
import defaultImage from '../../assets/cou.jpg';
import WhatsappButton from '../../Components/whatsapp/whatsapp';

const DeportesAdaptados: React.FC = () => {
  const deportes = [
    {
      title: 'Fútbol',
      description: 'Entrenamientos personalizados y específicos para mejorar el rendimiento en el campo de juego, utilizando las últimas herramientas de análisis y seguimiento.',
      image: defaultImage, // Reemplazar con la imagen real
    },
    {
      title: 'Rugby',
      description: 'Programas de entrenamiento diseñados para aumentar la fuerza, la resistencia y la agilidad, con tecnología de vanguardia para seguimiento de rendimiento.',
      image: defaultImage,
    },
    {
      title: 'Artes Marciales',
      description: 'Entrenamientos especializados para mejorar la técnica, la fuerza y la resistencia, utilizando equipos modernos y métodos avanzados.',
      image: defaultImage,
    },
    {
      title: 'Boxeo',
      description: 'Sesiones de entrenamiento intensivas para aumentar la velocidad, la fuerza y la resistencia, con equipamiento de alta tecnología.',
      image: defaultImage,
    },
    {
      title: 'Voleibol',
      description: 'Planes de entrenamiento enfocados en mejorar el salto, la velocidad y la coordinación, utilizando herramientas de entrenamiento innovadoras.',
      image: defaultImage,
    },
  ];

  const planes = [
    {
      title: 'Plan Básico',
      description: 'Entrenamientos básicos adaptados para principiantes en cada deporte.',
      price: '$100.000',
    },
    {
      title: 'Plan Avanzado',
      description: 'Entrenamientos avanzados con seguimiento personalizado y análisis de rendimiento.',
      price: '$180.000',
    },
    {
      title: 'Plan Premium',
      description: 'Plan completo con entrenamientos intensivos, soporte continuo y evaluaciones regulares.',
      price: '$250.000',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="deportes-adaptados-content">
        <section className="text-center hero-section my-5">
          <h1>Nos Adaptamos a Tu Deporte Favorito 🏅</h1>
          <p>Ofrecemos entrenamientos especializados para una variedad de deportes, utilizando las herramientas deportivas más vanguardistas.</p>
        </section>
        
        <section className="deportes-section my-5">
          <div className="deportes-cards d-flex flex-wrap justify-content-center">
            {deportes.map((deporte, index) => (
              <Card className="deporte-card m-3" style={{ width: '22rem' }} key={index}>
                <Card.Img variant="top" src={deporte.image} alt={deporte.title} style={{ height: '14rem', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{deporte.title}</Card.Title>
                  <Card.Text>{deporte.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        <section className="planes-section my-5">
          <h2>Planes Disponibles 📋</h2>
          <div className="planes-cards d-flex flex-wrap justify-content-center">
            {planes.map((plan, index) => (
              <Card className="plan-card m-3" style={{ width: '22rem' }} key={index}>
                <Card.Body>
                  <Card.Title>{plan.title}</Card.Title>
                  <Card.Text>{plan.description}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">{plan.price}</Card.Subtitle>
                  <Button variant="primary">Adquirir Plan</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        <WhatsappButton/>
      </div>
      <Footer />
    </div>
  );
};

export default DeportesAdaptados;
