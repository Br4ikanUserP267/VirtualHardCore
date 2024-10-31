import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './medico.css';

import fotoMedico from '../../assets/Staff/coach.jpg'; // Cambia la ruta si es necesario
import WhatsappButton from '../../Components/whatsapp/whatsapp';

const MedicoCV: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="cv-content container my-5">
        <header className="cv-header text-center mb-5">
          <img src={fotoMedico} alt="Foto de Álvaro Herrera" className="cv-photo" />
          <h1>Álvaro Herrera</h1>
          <h2>Médico</h2>
          <p>HardCoreGym@gmail.com | +57 300 987 6543 | Sincelejo, Colombia</p>
        </header>
        <section className="cv-section mb-5">
          <h3 className="section-title">Autobiografía</h3>
          <div className="section-content">
            <p>
              Soy Álvaro Herrera, médico con una sólida trayectoria en el ámbito de la salud deportiva. Mi objetivo es asegurar que estés en óptimas condiciones para entrenar al máximo nivel, proporcionando un enfoque integral en el bienestar físico y la prevención de lesiones.
              <br /><br />
              Con años de experiencia en medicina deportiva y un compromiso constante con la formación y actualización profesional, me dedico a trabajar en conjunto con atletas y entusiastas del fitness para optimizar su salud y rendimiento. Mi enfoque está en la prevención, diagnóstico y tratamiento de lesiones relacionadas con el ejercicio, así como en la promoción de un estilo de vida saludable.
              <br /><br />
              Mi trabajo se basa en la colaboración con entrenadores y nutricionistas para garantizar que cada cliente reciba una atención completa y personalizada. Además de mi práctica clínica, disfruto participando en eventos deportivos y promoviendo la salud y el bienestar en la comunidad.
            </p>
          </div>
        </section>
        <section className="cv-section mb-5">
          <h3 className="section-title">Experiencia Profesional</h3>
          <div className="section-content">
            <div className="job mb-4">
              <h4>Médico Especialista en Medicina Deportiva</h4>
              <p><strong>Clínica Deportiva ABC</strong> | Enero 2015 - Presente</p>
              <ul>
                <li>Evaluar y tratar lesiones deportivas en atletas de diferentes niveles.</li>
                <li>Desarrollar planes de rehabilitación y recuperación personalizados.</li>
                <li>Colaborar con entrenadores y nutricionistas para optimizar el rendimiento de los clientes.</li>
              </ul>
            </div>
            <div className="job mb-4">
              <h4>Médico General</h4>
              <p><strong>Hospital XYZ</strong> | Marzo 2010 - Diciembre 2014</p>
              <ul>
                <li>Proporcionar atención médica general a pacientes en un entorno hospitalario.</li>
                <li>Realizar exámenes físicos y diagnósticos para una variedad de condiciones de salud.</li>
                <li>Coordinar con especialistas para el tratamiento de enfermedades y lesiones.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Educación</h3>
          <div className="section-content">
            <div className="education mb-4">
              <h4>Medicina General</h4>
              <p><strong>Universidad de Sucre</strong> | 2009</p>
            </div>
            <div className="education mb-4">
              <h4>Especialización en Medicina Deportiva</h4>
              <p><strong>Universidad Nacional de Colombia</strong> | 2014</p>
            </div>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Habilidades</h3>
          <div className="section-content">
            <ul>
              <li>Evaluación y tratamiento de lesiones deportivas</li>
              <li>Desarrollo de planes de rehabilitación</li>
              <li>Prevención de lesiones relacionadas con el ejercicio</li>
              <li>Colaboración con equipos de entrenadores y nutricionistas</li>
              <li>Promoción de un estilo de vida saludable</li>
              <li>Conocimientos en medicina general y deportiva</li>
            </ul>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Logros</h3>
          <div className="section-content">
            <ul>
              <li>Especialista en Medicina Deportiva con más de 8 años de experiencia.</li>
              <li>Implementación de programas de prevención de lesiones en atletas profesionales.</li>
              <li>Colaboración en la mejora del rendimiento físico de clientes a nivel competitivo.</li>
              <li>Participación en conferencias y talleres sobre salud deportiva y prevención de lesiones.</li>
              <li>Reconocido por la comunidad médica por mi enfoque integral en la salud deportiva.</li>
            </ul>
          </div>
        </section>
      </div>
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default MedicoCV;
