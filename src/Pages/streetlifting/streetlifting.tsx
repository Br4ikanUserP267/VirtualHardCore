import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './streetlifting.css';

// Importar imágenes si tienes alguna para mostrar
import defaultImage from '../../assets/cou.jpg';
import WhatsappButton from '../../Components/whatsapp/whatsapp';

const Streetlifting: React.FC = () => {
  const athletes = [
    {
      name: 'Atleta 1',
      description: 'Descripción breve del atleta 1. Su especialidad en streetlifting y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage], // Reemplazar con las imágenes reales
    },
    {
      name: 'Atleta 2',
      description: 'Descripción breve del atleta 2. Su especialidad en streetlifting y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage],
    },
    {
      name: 'Atleta 3',
      description: 'Descripción breve del atleta 3. Su especialidad en streetlifting y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="streetlifting-content">
        {/* Sección de introducción */}
        <section className="introduction-section text-center my-5">
          <h1>¿Qué es el Streetlifting? 🚀</h1>
          <p>
            El streetlifting es una disciplina que combina fuerza y habilidad en ejercicios de calistenia. A diferencia del entrenamiento tradicional en gimnasio, el streetlifting se realiza en entornos urbanos usando barras y otros equipos básicos. Los atletas buscan maximizar su fuerza corporal y habilidades en movimientos como dominadas, flexiones y otros ejercicios en suspensión.
          </p>
          <p>¡Únete a nuestra comunidad y lleva tu entrenamiento en la calle al siguiente nivel! 💪🔥</p>
        </section>

        {/* Sección de atletas */}
        <section className="athletes-section text-center my-5">
          <h2>Atletas de Streetlifting 🌟</h2>
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

        {/* Sección de planes */}
        <section className="plans-section text-center my-5">
          <h2>Nuestros Planes de Streetlifting 📋</h2>
          <div className="plan-cards d-flex flex-wrap justify-content-center">
            <Card className="plan-card m-3" style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Plan Básico</Card.Title>
                <Card.Text>
                  Un plan de entrenamiento adaptado para principiantes y entusiastas del streetlifting.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">$80.000</Card.Subtitle>
                <Button variant="primary">Adquirir Plan</Button>
              </Card.Body>
            </Card>
            <Card className="plan-card m-3" style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Plan Premium</Card.Title>
                <Card.Text>
                  Incluye sesiones adicionales de entrenamiento y soporte técnico personalizado para mejorar tus habilidades en streetlifting.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">$150.000</Card.Subtitle>
                <Button variant="primary">Adquirir Plan</Button>
              </Card.Body>
            </Card>
            <Card className="plan-card m-3" style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Plan Premium con Anualidad</Card.Title>
                <Card.Text>
                  Un plan completo con un descuento significativo por pago anual. Ideal para quienes buscan un compromiso a largo plazo en el streetlifting.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">$120.000</Card.Subtitle>
                <Button variant="primary">Adquirir Plan</Button>
              </Card.Body>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsappButton/>
    </div>
  );
};

export default Streetlifting;
