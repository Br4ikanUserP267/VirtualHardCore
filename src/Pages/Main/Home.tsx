import React, { useState } from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css';
import WhatsappButton from '../../Components/whatsapp/whatsapp';

// Asumiendo que la imagen está en la carpeta 'assets' dentro del directorio 'public'
import gym from '../../assets/Presentation/gym.jpg';
import gym1 from '../../assets/Presentation/gym1.jpg';
import gym3 from '../../assets/Presentation/gym3.jpg';

import coach from '../../assets/Staff/coach.jpg';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías enviar los datos del formulario a un servidor o API
    console.log('Registro enviado', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="home-content">
        {/* Sección del carrusel */}
        <section className="hero-carousel-section text-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gym}
                alt="Primera imagen"
              />
              <Carousel.Caption>
                <h3>Entrena con nosotros</h3>
                <p>Encuentra la motivación que necesitas para alcanzar tus objetivos de fitness.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gym3}
                alt="Segunda imagen"
              />
              <Carousel.Caption>
                <h3>Planes Personalizados</h3>
                <p>Obtén un plan de entrenamiento adaptado a tus necesidades.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gym1}
                alt="Tercera imagen"
              />
              <Carousel.Caption>
                <h3>Equipo de Expertos</h3>
                <p>Trabaja con nuestros entrenadores y nutricionistas certificados.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        <section className="hero-section text-center">
          <h1>Bienvenido a VirtualHardCore</h1>
          <p>🚀 ¡Prepárate para transformar tu cuerpo y mente! 💪 Con el respaldo de los mejores entrenadores, te ayudaremos a romper tus récords personales y llevar tu cuerpo al límite. 🌟 Nuestros planes de entrenamiento están diseñados para desafiarte y superarte en cada sesión. ¡Es el momento perfecto para alcanzar tus metas más ambiciosas y convertirte en una versión más fuerte, ágil y saludable de ti mismo! 🏆</p>
        </section>
        
        <section className="features-section d-flex flex-wrap justify-content-center">
          <Card className="feature m-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Planes de Entrenamiento Personalizados</Card.Title>
              <Card.Text>
                Nuestros entrenadores crean planes de entrenamiento adaptados a tus necesidades y objetivos individuales.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="feature m-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Entrenadores Expertos</Card.Title>
              <Card.Text>
                Trabaja con profesionales certificados que están dedicados a ayudarte a alcanzar tus metas de fitness.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="feature m-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Instalaciones Especializadas en Powerlifting</Card.Title>
              <Card.Text>
                Entrena en nuestro gimnasio dedicado al powerlifting, con un ambiente auténtico y especializado. Aquí encontrarás todo lo necesario para maximizar tu fuerza y rendimiento, con equipos de alta calidad y un entorno que te inspira a superar tus límites.
              </Card.Text>
            </Card.Body>
          </Card>
        </section>

        <section className="history-section text-center my-5">
          <h2>Nuestra Historia</h2>
          <p>Fundado en 2024, VirtualHardcoreGym comenzó con la visión de ofrecer soluciones de fitness de primer nivel para personas de todos los niveles de condición física. Nuestra misión es inspirar y apoyar a nuestros miembros en su camino hacia una vida más saludable y fuerte.</p>
        </section>

        <section className="team-section text-center my-5">
          <h2>Conoce a Nuestro Equipo</h2>
          <div className="team-member-cards d-flex flex-wrap justify-content-center">
            <Card className="team-member m-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={coach} className="team-member-img" />
              <Card.Body>
                <Card.Title>Mauricio Herrera - Entrenador</Card.Title>
                <Card.Text>
                  Entrenador experimentado en powerlifting, Mauricio te guiará en cada paso para maximizar tu fuerza y técnica.
                </Card.Text>
                <Button variant="primary" className="w-100">Ver Perfil Profesional</Button>
              </Card.Body>
            </Card>
            <Card className="team-member m-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={coach} className="team-member-img" />
              <Card.Body>
                <Card.Title>Madeleynne Florez - Nutricionista</Card.Title>
                <Card.Text>
                  Especialista en nutrición , Madeleynne te ayudará a optimizar tu dieta para alcanzar tus objetivos de fitness.
                </Card.Text>
                <Button variant="primary" className="w-100">Ver Perfil Profesional</Button>
              </Card.Body>
            </Card>
            <Card className="team-member m-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={coach} className="team-member-img" />
              <Card.Body>
                <Card.Title>Álvaro Herrera - Médico</Card.Title>
                <Card.Text>
                  Médico, Álvaro asegura que estés en óptimas condiciones para entrenar al máximo nivel.
                </Card.Text>
                <Button variant="primary" className="w-100">Ver Perfil Profesional</Button>
              </Card.Body>
            </Card>
            <Card className="team-member m-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={coach} className="team-member-img" />
              <Card.Body>
                <Card.Title>Hellen de la Ossa - Psicóloga</Card.Title>
                <Card.Text>
                  Psicóloga especializada en deporte y bienestar, Hellen te ayudará a mantener un equilibrio mental y emocional durante tu entrenamiento.
                </Card.Text>
                <Button variant="primary" className="w-100">Ver Perfil Profesional</Button>
              </Card.Body>
            </Card>
          </div>
        </section>

        {/* Sección de Gimnasios Asociados con Carrusel */}
        <section className="associated-gyms-carousel text-center my-5">
          <h2>Gimnasios Asociados</h2>
          <Carousel interval={3000}> {/* Intervalo de 3 segundos */}
            {[...Array(5)].map((_, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                  <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={gym3} className="associated-gym-img" />
                    <Card.Body>
                      <Card.Title>Gimnasio {index + 1}</Card.Title>
                      <Card.Text>
                         HardCoreGym. Sincelejo.
                      </Card.Text>
                      <Button variant="primary" className="w-100">Ver Más</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </div>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Home;
