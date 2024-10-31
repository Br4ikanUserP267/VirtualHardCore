import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './testimoniosPower.css';

const testimonies = [
  {
    name: 'Atleta 1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Campeón Nacional 2020',
      'Récord de sentadilla 300kg',
      'Top 5 en el campeonato mundial 2021',
    ],
  },
  {
    name: 'Atleta 2',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Campeón Regional 2019',
      'Récord de peso muerto 280kg',
      'Participación en el campeonato continental 2022',
    ],
  },
  // Añadir más testimonios según sea necesario
];

const TestimonioOtrosDeportes: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="testimonios-content container my-5">
        <header className="testimonios-header text-center mb-5">
          <h1>Testimonios de Powerlifters</h1>
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
                  title="Testimonio de Atleta"
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

export default TestimonioOtrosDeportes;
