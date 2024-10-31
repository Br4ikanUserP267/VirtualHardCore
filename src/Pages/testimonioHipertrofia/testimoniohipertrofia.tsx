import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './testimoniosHipertrofia.css';

const testimonies = [
  {
    name: 'Atleta de Hipertrofia 1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Ganador del Campeonato Nacional de Fisicoculturismo 2020',
      'Mejor Posador 2020',
      'Top 3 en la competencia mundial de Fisicoculturismo 2021',
    ],
  },
  {
    name: 'Atleta de Hipertrofia 2',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Ganador del Campeonato Regional de Fisicoculturismo 2019',
      'Mejor Desarrollo Muscular 2019',
      'Participante en la competencia continental de Fisicoculturismo 2022',
    ],
  },
  // Añadir más testimonios según sea necesario
];

const TestimoniosHipertrofia: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="testimonios-content container my-5">
        <header className="testimonios-header text-center mb-5">
          <h1>Testimonios de Atletas de Hipertrofia</h1>
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
                  title="Testimonio de Atleta de Hipertrofia"
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

export default TestimoniosHipertrofia;
