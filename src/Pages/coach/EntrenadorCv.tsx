import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './cv.css';

import fotoTrainer from '../../assets/Staff/coach.jpg';
import WhatsappButton from '../../Components/whatsapp/whatsapp';

const EntrenadorCV: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="cv-content container my-5">
        <header className="cv-header text-center mb-5">
          <img src={fotoTrainer} alt="Foto de Mauricio Herrera Nassiff" className="cv-photo" />
          <h1>Mauricio Antonio Herrera Nassiff</h1>
          <h2>Entrenador Personal Certificado</h2>
          <p>HardCoreGym@gmail.com | +57 300 123 4567 | Sincelejo, Colombia</p>
        </header>
        <section className="cv-section mb-5">
          <h3 className="section-title">Autobiografía</h3>
          <div className="section-content">
            <p>
              Soy Mauricio Antonio Herrera Nassiff, un apasionado entrenador personal con más de 10 años de experiencia en el ámbito deportivo. Mi amor por el fitness y el bienestar comenzó a una edad temprana, y he dedicado mi vida a ayudar a las personas a alcanzar sus objetivos de salud y condición física.
              <br /><br />
              Desde que obtuve mi certificación en entrenamiento personal, he trabajado con una variedad de clientes y equipos, diseñando programas de entrenamiento personalizados y efectivos. Mi enfoque en la educación continua y mi compromiso con la excelencia me han permitido obtener resultados sobresalientes y mantenerme a la vanguardia de las últimas tendencias en fitness.
              <br /><br />
              Mi filosofía de entrenamiento se basa en el equilibrio entre la fuerza, la resistencia y la salud mental. Creo que el bienestar integral es fundamental para una vida plena, y me esfuerzo por inspirar a mis clientes a superar sus límites y alcanzar nuevas metas. Fuera del gimnasio, disfruto de la lectura, el aprendizaje continuo y el deporte, que me ayudan a mantenerme motivado y a compartir mi pasión por el fitness con el mundo.
              <br /><br />
              Actualmente soy el presidente de la liga de potencia de Sucre, he sido 3 veces campeón nacional y entreno a deportistas de powerlifting de 2 clubes de la liga de potencia de Sucre. Además, estoy certificado en levantamiento de potencia y he formado a varios campeones nacionales y regionales.
            </p>
          </div>
        </section>
        <section className="cv-section mb-5">
          <h3 className="section-title">Experiencia Profesional</h3>
          <div className="section-content">
            <div className="job mb-4">
              <h4>Entrenador Personal Senior</h4>
              <p><strong>Gym Elite</strong> | Enero 2018 - Presente</p>
              <ul>
                <li>Desarrollar y personalizar planes de entrenamiento para más de 50 clientes individuales.</li>
                <li>Implementar programas de fitness específicos para deportes como fútbol, rugby, artes marciales, boxeo y voleyball.</li>
                <li>Realizar evaluaciones físicas y asesorar en nutrición deportiva.</li>
              </ul>
            </div>
            <div className="job mb-4">
              <h4>Entrenador de Fuerza y Acondicionamiento</h4>
              <p><strong>Centro Deportivo XYZ</strong> | Marzo 2014 - Diciembre 2017</p>
              <ul>
                <li>Coordinar programas de fuerza y acondicionamiento para equipos deportivos locales.</li>
                <li>Instruir a los atletas en técnicas avanzadas de levantamiento de pesas y prevención de lesiones.</li>
                <li>Monitorear y ajustar regímenes de entrenamiento para maximizar el rendimiento y minimizar el riesgo de lesiones.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Educación</h3>
          <div className="section-content">
            <div className="education mb-4">
              <h4>Certificación en Entrenamiento Personal</h4>
              <p><strong>ISSA (International Sports Sciences Association)</strong> | 2015</p>
            </div>
            <div className="education mb-4">
              <h4>Certificación en Levantamiento de Potencia</h4>
              <p><strong>Federación Colombiana de Powerlifting</strong> | 2016</p>
            </div>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Habilidades</h3>
          <div className="section-content">
            <ul>
              <li>Diseño y personalización de programas de entrenamiento</li>
              <li>Evaluación de la condición física y pruebas de rendimiento</li>
              <li>Conocimientos en nutrición deportiva</li>
              <li>Entrenamiento de fuerza y acondicionamiento</li>
              <li>Coaching motivacional y soporte emocional</li>
              <li>Técnicas avanzadas de levantamiento de pesas</li>
            </ul>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Logros</h3>
          <div className="section-content">
            <ul>
              <li>Presidente de la liga de potencia de Sucre.</li>
              <li>3 veces campeón nacional de powerlifting.</li>
              <li>Entrenador de deportistas de powerlifting de 2 clubes de la liga de potencia de Sucre.</li>
              <li>Certificación en entrenamiento deportivo y formación de varios campeones nacionales y regionales.</li>
              <li>Implementación de un programa de acondicionamiento físico para personas mayores, mejorando significativamente la salud y el bienestar de los participantes.</li>
              
            </ul>
          </div>
        </section>
      </div>
      < WhatsappButton/>

      <Footer />
    </div>
  );
};

export default EntrenadorCV;
