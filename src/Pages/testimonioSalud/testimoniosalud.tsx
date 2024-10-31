import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './testimoniosSalud.css';

const testimonies = [
  {
    name: 'Paciente 1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Recuperación completa de una lesión de rodilla en 6 meses',
      'Mejoró su salud cardiovascular',
      'Pérdida de 10kg en 3 meses con dieta saludable',
    ],
  },
  {
    name: 'Paciente 2',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Control total de la diabetes tipo 2',
      'Reducción del colesterol en 20%',
      'Mejor calidad de vida con un plan de ejercicio regular',
    ],
  },
  // Añadir más testimonios según sea necesario
];

const TestimoniosSalud: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="testimonios-content container my-5">
        <header className="testimonios-header text-center mb-5">
          <h1>Testimonios de Salud</h1>
        </header>
        <div className="testimonios-list">
          {testimonies.map((testimony, index) => (
            <div key={index} className="testimonio-card">
              <h3 className="testimonio-name">{testimony.name}</h3>
              <div className="testimonio-video">
                <iframe
                  width="100%"
                  height="315"
                  src={testimony.videoUrl}
                  title="Testimonio de Salud"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <ul className="testimonio-achievements">
                {testimony.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestimoniosSalud;
