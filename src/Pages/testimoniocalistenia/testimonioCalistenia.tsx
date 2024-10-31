import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './testimoniosCalistenia.css';

const testimonies = [
  {
    name: 'Atleta de Calistenia 1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Ganador del Campeonato Nacional 2020',
      'Récord de Muscle-Ups 30 en un minuto',
      'Top 5 en la competencia mundial 2021',
    ],
  },
  {
    name: 'Atleta de Calistenia 2',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Ganador del Campeonato Regional 2019',
      'Récord de Planche 60 segundos',
      'Participante en la competencia continental 2022',
    ],
  },
  // Añadir más testimonios según sea necesario
];

const TestimoniosCalistenia: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="testimonios-content container my-5">
        <header className="testimonios-header text-center mb-5">
          <h1>Testimonios de Atletas de Calistenia</h1>
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
                  title="Testimonio de Atleta de Calistenia"
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

export default TestimoniosCalistenia;
