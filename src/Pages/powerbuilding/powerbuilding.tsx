import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './powerbuilding.css';

// Importar imágenes si tienes alguna para mostrar
import defaultImage from '../../assets/cou.jpg';
import WhatsappButton from '../../Components/whatsapp/whatsapp';

const Powerbuilding: React.FC = () => {
  const athletes = [
    {
      name: 'Atleta 1',
      description: 'Descripción breve del atleta 1. Su especialidad en powerbuilding y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage], // Reemplazar con las imágenes reales
    },
    {
      name: 'Atleta 2',
      description: 'Descripción breve del atleta 2. Su especialidad en powerbuilding y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage],
    },
    {
      name: 'Atleta 3',
      description: 'Descripción breve del atleta 3. Su especialidad en powerbuilding y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="powerbuilding-content">
        <section className="introduction-section text-center my-5">
          <h1>¿Qué es el Powerbuilding? 💪</h1>
          <p>
            El powerbuilding es una disciplina que combina los principios del powerlifting y el bodybuilding. 
            Este enfoque permite a los atletas desarrollar fuerza y masa muscular simultáneamente. 
            A diferencia del powerlifting, que se enfoca exclusivamente en levantar pesos máximos en tres ejercicios (sentadilla, press de banca y peso muerto), 
            y el bodybuilding, que se centra en la estética muscular, el powerbuilding busca un equilibrio entre ambos, 
            maximizando tanto la fuerza como la musculatura visible.
          </p>
          <p>¡Únete a nosotros y convierte en el atleta más completo del gimnasio! 🏋️‍♂️</p>
        </section>

        <section className="athletes-section text-center my-5">
          <h2>Atletas de Powerbuilding 🌟</h2>
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
          <h2>Nuestros Planes de Powerbuilding 📋</h2>
          <div className="plan-cards d-flex flex-wrap justify-content-center">
            <Card className="plan-card m-3" style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Plan Básico</Card.Title>
                <Card.Text>
                  Un plan de entrenamiento adaptado para principiantes y entusiastas del powerbuilding.
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

export default Powerbuilding;
