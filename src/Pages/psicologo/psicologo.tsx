import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './psicologo.css';

import fotoPsicologa from '../../assets/Staff/coach.jpg'; // Cambia la ruta si es necesario
import WhatsappButton from '../../Components/whatsapp/whatsapp';

const PsicologoCV: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="cv-content container my-5">
        <header className="cv-header text-center mb-5">
          <img src={fotoPsicologa} alt="Foto de Hellen de la Ossa" className="cv-photo" />
          <h1>Hellen de la Ossa</h1>
          <h2>Psicóloga Especialista en Nutrición y Bienestar</h2>
          <p>HardCoreGym@gmail.com | +57 310 6417371 | Sincelejo, Colombia</p>
        </header>
        <section className="cv-section mb-5">
          <h3 className="section-title">Autobiografía</h3>
          <div className="section-content">
            <p>
              Soy Hellen de la Ossa, psicóloga con especialización en nutrición y bienestar. Mi carrera se ha centrado en apoyar a individuos a alcanzar un equilibrio mental y emocional óptimo, complementando sus objetivos de salud y bienestar. 
              <br /><br />
              Con más de 8 años de experiencia, he trabajado con una amplia gama de clientes, ayudándolos a superar obstáculos emocionales y mentales que afectan su calidad de vida. Mi enfoque se basa en técnicas de terapia cognitivo-conductual y enfoques integrales que consideran tanto el bienestar mental como el físico.
              <br /><br />
              Mi filosofía se basa en la creencia de que la salud mental es un pilar fundamental para el éxito en cualquier área de la vida. Me esfuerzo por proporcionar a mis clientes herramientas y estrategias prácticas para enfrentar los desafíos diarios y fomentar una mentalidad positiva.
            </p>
          </div>
        </section>
        <section className="cv-section mb-5">
          <h3 className="section-title">Experiencia Profesional</h3>
          <div className="section-content">
            <div className="job mb-4">
              <h4>Psicóloga Clínica</h4>
              <p><strong>Centro de Psicología y Bienestar</strong> | Enero 2016 - Presente</p>
              <ul>
                <li>Proveer sesiones de terapia individual y grupal para tratar diversos trastornos psicológicos.</li>
                <li>Desarrollar programas de bienestar emocional y manejo del estrés.</li>
                <li>Colaborar con otros profesionales de la salud para una atención integral al paciente.</li>
              </ul>
            </div>
            <div className="job mb-4">
              <h4>Psicóloga de Salud Mental</h4>
              <p><strong>Fundación Salud Mental</strong> | Marzo 2012 - Diciembre 2015</p>
              <ul>
                <li>Realizar evaluaciones psicológicas y proporcionar intervenciones para pacientes con problemas de salud mental.</li>
                <li>Facilitar talleres y grupos de apoyo sobre salud mental y bienestar.</li>
                <li>Desarrollar y aplicar estrategias de prevención para mejorar el bienestar emocional de los participantes.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Educación</h3>
          <div className="section-content">
            <div className="education mb-4">
              <h4>Licenciatura en Psicología</h4>
              <p><strong>Universidad de Sucre</strong> | 2010</p>
            </div>
            <div className="education mb-4">
              <h4>Especialización en Psicología de la Nutrición</h4>
              <p><strong>Universidad Nacional de Colombia</strong> | 2014</p>
            </div>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Habilidades</h3>
          <div className="section-content">
            <ul>
              <li>Asesoramiento psicológico individual y grupal</li>
              <li>Terapia cognitivo-conductual</li>
              <li>Desarrollo de programas de bienestar emocional</li>
              <li>Intervención en crisis y manejo del estrés</li>
              <li>Colaboración interdisciplinaria</li>
              <li>Facilitación de talleres sobre salud mental</li>
            </ul>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Logros</h3>
          <div className="section-content">
            <ul>
              <li>Implementación exitosa de programas de bienestar emocional en comunidades locales.</li>
              <li>Desarrollo de talleres educativos sobre manejo del estrés y salud mental.</li>
              <li>Reconocida por el impacto positivo en la calidad de vida de mis pacientes.</li>
              <li>Colaboración en estudios de investigación sobre salud mental y nutrición.</li>
            </ul>
          </div>
        </section>
      </div>
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default PsicologoCV;
