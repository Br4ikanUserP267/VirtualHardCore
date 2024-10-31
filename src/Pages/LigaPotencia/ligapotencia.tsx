import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './ligapotencia.css';
import logoLigaPotencia from '../../assets/your fitness coach-Photoroom (1).png';

const LigaPotencia: React.FC = () => {
  const navigate = useNavigate();

  const handleInscriptionClick = () => {
    navigate('/inscripcion');
  };

  return (
    <div>
      <Navbar />
      <div className="liga-potencia-content container my-5">
        <header className="liga-potencia-header text-center mb-5">
          <img src={logoLigaPotencia} alt="Logo de la Liga de Potencia de Sucre" className="liga-potencia-logo" />
          <h1>Liga de Potencia de Sucre</h1>
        </header>
        <section className="liga-potencia-section mb-5">
          <h3 className="section-title">Historia</h3>
          <div className="section-content">
            <p>
              La Liga de Potencia de Sucre fue fundada con el objetivo de promover el deporte del powerlifting en la región. A lo largo de los años, hemos crecido en tamaño y reputación, convirtiéndonos en un referente nacional en el ámbito de la fuerza y el acondicionamiento físico. Nuestros atletas han competido y triunfado en diversos campeonatos nacionales, consolidando nuestra posición como líderes en el deporte.
            </p>
          </div>
        </section>
        <section className="liga-potencia-section mb-5">
          <h3 className="section-title">Misión</h3>
          <div className="section-content">
            <p>
              Nuestra misión es fomentar el desarrollo del powerlifting en Sucre, proporcionando un entorno de entrenamiento de alta calidad, apoyo técnico y motivacional a nuestros atletas. Nos esforzamos por inculcar los valores de disciplina, dedicación y respeto, y por promover un estilo de vida saludable y activo.
            </p>
          </div>
        </section>
        <section className="liga-potencia-section mb-5">
          <h3 className="section-title">Visión</h3>
          <div className="section-content">
            <p>
              Aspiramos a ser reconocidos como la mejor liga de powerlifting en Colombia, produciendo atletas de élite que compitan y triunfen en los escenarios más prestigiosos a nivel nacional e internacional. Nos comprometemos a mantener un estándar de excelencia en todos nuestros programas y actividades.
            </p>
          </div>
        </section>
        <div className="text-center mt-5">
          <button className="inscribete-btn" onClick={handleInscriptionClick}>
            ¡Inscríbete aquí! 🎉
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LigaPotencia;
