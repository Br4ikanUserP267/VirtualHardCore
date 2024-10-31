import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './powerlifting.css';

// Importar imágenes si tienes alguna para mostrar
import defaultImage from '../../assets/cou.jpg';
import WhatsappButton from '../../Components/whatsapp/whatsapp';

const Powerlifting: React.FC = () => {
  const athletes = [
    {
      name: 'Atleta 1',
      description: 'Descripción breve del atleta 1. Su especialidad en powerlifting y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage], // Reemplazar con las imágenes reales
    },
    {
      name: 'Atleta 2',
      description: 'Descripción breve del atleta 2. Su especialidad en powerlifting y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage],
    },
    {
      name: 'Atleta 3',
      description: 'Descripción breve del atleta 3. Su especialidad en powerlifting y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="powerlifting-content">
        <section className="introduction-section text-center my-5">
          <h1>¿Qué es el Powerlifting? 🏋️‍♂️</h1>
          <p>
            El powerlifting es un deporte de fuerza que consiste en tres levantamientos: sentadilla, press de banca y peso muerto. 
            Los competidores intentan levantar el mayor peso posible en estos tres ejercicios, y el total combinado determina al ganador. 
            A diferencia del bodybuilding, que se enfoca en la estética y la masa muscular, el powerlifting se centra en la fuerza pura y la técnica de levantamiento.
          </p>
          <p>¡Entrena con nosotros y conviértete en el levantador más fuerte del gimnasio! 💪🔥</p>
        </section>

        <section className="athletes-section text-center my-5">
          <h2>Atletas de Powerlifting 🌟</h2>
          <div className="athlete-cards d-flex flex-wrap justify-content-center">
            {athletes.map((athlete, index) => (
              <Card className="athlete-card m-3" style={{ width: '22rem' }} key={index}>
                <Carousel>
                  {athlete.images.map((image, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        className="d-block w-100 athlete-img"
                        src={image}
                        alt={`Imagen ${idx + 1} de ${athlete.name}`}
                        style={{ height: '22rem', objectFit: 'cover' }} // Ajustar el tamaño y hacer la imagen cuadrada
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{athlete.name}</Card.Title>
                  <Card.Text>{athlete.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        <section className="plans-section text-center my-5">
          <h2>Nuestros Planes de Powerlifting 📋</h2>
          <div className="plan-cards d-flex flex-wrap justify-content-center">
            <Card className="plan-card m-3" style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Plan Básico</Card.Title>
                <Card.Text>
                  Un plan de entrenamiento adaptado para principiantes y entusiastas del powerlifting.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">$100.000</Card.Subtitle>
                <Button variant="primary">Adquirir Plan</Button>
              </Card.Body>
            </Card>
            <Card className="plan-card m-3" style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Plan Premium</Card.Title>
                <Card.Text>
                  Incluye sesiones adicionales de entrenamiento y soporte nutricional personalizado.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">$180.000</Card.Subtitle>
                <Button variant="primary">Adquirir Plan</Button>
              </Card.Body>
            </Card>
            <Card className="plan-card m-3" style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Plan Premium con Anualidad</Card.Title>
                <Card.Text>
                  Un plan completo con un descuento significativo por pago anual. Ideal para quienes buscan compromiso a largo plazo.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">$140.000</Card.Subtitle>
                <Button variant="primary">Adquirir Plan</Button>
              </Card.Body>
            </Card>
          </div>
        </section>
      </div>
      <WhatsappButton/>

      <Footer />
    </div>
  );
};

export default Powerlifting;
