import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './testimoniopowerbuilding.css';

const testimonies = [
  {
    name: 'Powerbuilder 1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Campeón Nacional 2021',
      'Récord de press de banca 200kg',
      'Top 3 en el campeonato mundial 2022',
    ],
  },
  {
    name: 'Powerbuilder 2',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    achievements: [
      'Campeón Regional 2020',
      'Récord de peso muerto 290kg',
      'Participación en el campeonato continental 2023',
    ],
  },
  // Añadir más testimonios según sea necesario
];

const TestimoniosPowerbuilding: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="testimonios-content container my-5">
        <header className="testimonios-header text-center mb-5">
          <h1>Testimonios de Powerbuilders</h1>
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
                  title="Testimonio de Powerbuilder"
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

export default TestimoniosPowerbuilding;
