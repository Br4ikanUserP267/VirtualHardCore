import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './salud.css';

// Importar imágenes si tienes alguna para mostrar
import defaultImage from '../../assets/cou.jpg';
import WhatsappButton from '../../Components/whatsapp/whatsapp';

const HealthBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'Mejora la salud cardiovascular',
      description: 'El ejercicio regular fortalece el corazón, mejora la circulación y reduce el riesgo de enfermedades cardiovasculares.',
    },
    {
      title: 'Aumenta la fuerza muscular',
      description: 'El entrenamiento de resistencia y fuerza ayuda a desarrollar y mantener la masa muscular, mejorando la funcionalidad en las actividades diarias.',
    },
    {
      title: 'Mejora la salud mental',
      description: 'El ejercicio libera endorfinas, reduciendo el estrés, la ansiedad y la depresión, mejorando el estado de ánimo y la calidad del sueño.',
    },
    {
      title: 'Control del peso',
      description: 'El ejercicio regular ayuda a mantener un peso saludable, aumentando el metabolismo y quemando calorías.',
    },
    {
      title: 'Aumenta la energía',
      description: 'El ejercicio regular mejora la eficiencia cardiovascular y muscular, proporcionando más energía para realizar actividades diarias.',
    },
    {
      title: 'Fortalece los huesos y articulaciones',
      description: 'El ejercicio de carga y el entrenamiento de fuerza aumentan la densidad ósea y fortalecen las articulaciones, reduciendo el riesgo de osteoporosis y lesiones.',
    },
  ];

  const healthAthletes = [
    {
      name: 'Persona 1',
      description: 'Descripción breve de la persona 1. Su enfoque en la salud y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage], // Reemplazar con las imágenes reales
    },
    {
      name: 'Persona 2',
      description: 'Descripción breve de la persona 2. Su enfoque en la salud y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage],
    },
    {
      name: 'Persona 3',
      description: 'Descripción breve de la persona 3. Su enfoque en la salud y logros destacados.',
      images: [defaultImage, defaultImage, defaultImage],
    },
  ];

  const plans = [
    {
      title: 'Plan Básico',
      description: 'Incluye análisis médico inicial, planes de entrenamiento básicos y sesiones mensuales con el nutricionista.',
      price: '$100.000',
    },
    {
      title: 'Plan Premium',
      description: 'Incluye análisis médico inicial y trimestral, planes de entrenamiento personalizados, y sesiones quincenales con el nutricionista.',
      price: '$180.000',
    },
    {
      title: 'Plan Premium Anual',
      description: 'Incluye análisis médico inicial y trimestral, planes de entrenamiento personalizados, sesiones quincenales con el nutricionista, y un descuento significativo por pago anual.',
      price: '$140.000/mes',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="health-benefits-content">
        <section className="text-center hero-section my-5">
          <h1>Beneficios de Entrenar por Salud 🏃‍♀️🏋️‍♂️</h1>
          <p>Descubre cómo el ejercicio regular puede mejorar tu vida.</p>
        </section>
        
        <section className="benefits-section my-5">
          <div className="benefits-cards d-flex flex-wrap justify-content-center">
            {benefits.map((benefit, index) => (
              <Card className="benefit-card m-3" style={{ width: '22rem' }} key={index}>
                <Card.Body>
                  <Card.Title>{benefit.title}</Card.Title>
                  <Card.Text>{benefit.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        <section className="athletes-section text-center my-5">
          <h2>Personas que Entrenan por Salud 🌟</h2>
          <div className="athlete-cards d-flex flex-wrap justify-content-center">
            {healthAthletes.map((athlete, index) => (
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
          <h2>Nuestros Planes de Salud 📋</h2>
          <div className="plan-cards d-flex flex-wrap justify-content-center">
            {plans.map((plan, index) => (
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

      </div>
      < WhatsappButton/>

      <Footer />
    </div>
  );
};

export default HealthBenefits;
