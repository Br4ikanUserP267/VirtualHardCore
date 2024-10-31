import React from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './nutricionista.css';

import fotoNutricionista from '../../assets/Staff/nutricionista.png'; // Cambia la ruta si es necesario
import WhatsappButton from '../../Components/whatsapp/whatsapp';

const NutricionistaCV: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="cv-content container my-5">
        <header className="cv-header text-center mb-5">
          <img src={fotoNutricionista} alt="Foto de Madeleynne Florez" className="cv-photo" />
          <h1>Madeleynne Florez</h1>
          <h2>Nutricionista Apasionada</h2>
          <p>MadeleynneFlorez@gmail.com | +57 300 987 6543 | Sincelejo, Colombia</p>
        </header>
        <section className="cv-section mb-5">
          <h3 className="section-title">Autobiografía</h3>
          <div className="section-content">
            <p>
              Soy Madeleynne Florez, una nutricionista apasionada por ayudar a las personas a alcanzar sus objetivos de fitness a través de una nutrición adecuada. Actualmente, estoy cursando mis estudios en la Universidad del Sinú y tengo más de 30 pacientes bajo mi cuidado.
              <br /><br />
              Mi carrera comenzó con una fuerte motivación para promover hábitos alimenticios saludables y sostenibles. Aunque no he terminado mi especialización, he trabajado con una amplia variedad de clientes, desde atletas de alto rendimiento hasta personas que buscan mejorar su salud general. Mi enfoque se centra en la personalización y la educación, asegurando que cada plan nutricional se adapte a las necesidades individuales y objetivos específicos.
              <br /><br />
              Mi filosofía de nutrición es equilibrar los nutrientes esenciales para mejorar el rendimiento físico y mental. Fuera del ámbito profesional, disfruto investigando sobre nuevas tendencias en nutrición, practicando deportes y compartiendo mis conocimientos para inspirar a otros a llevar una vida saludable y activa.
            </p>
          </div>
        </section>
        <section className="cv-section mb-5">
          <h3 className="section-title">Experiencia Profesional</h3>
          <div className="section-content">
            <div className="job mb-4">
              <h4>Nutricionista Senior</h4>
              <p><strong>NutriCenter</strong> | Enero 2019 - Presente</p>
              <ul>
                <li>Desarrollar y personalizar planes de alimentación para clientes individuales y grupos.</li>
                <li>Ofrecer asesoramiento en nutrición deportiva y bienestar general.</li>
                <li>Realizar evaluaciones nutricionales y seguimiento de progreso.</li>
              </ul>
            </div>
            <div className="job mb-4">
              <h4>Consultora de Nutrición</h4>
              <p><strong>Centro de Salud ABC</strong> | Marzo 2015 - Diciembre 2018</p>
              <ul>
                <li>Coordinar programas de nutrición para mejorar la salud y el rendimiento de los pacientes.</li>
                <li>Proporcionar educación sobre hábitos alimenticios y prevención de enfermedades.</li>
                <li>Colaborar con equipos médicos para ofrecer un enfoque integral en la salud del paciente.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Educación</h3>
          <div className="section-content">
            <div className="education mb-4">
              <h4>Licenciatura en Nutrición y Dietética (En curso)</h4>
              <p><strong>Universidad del Sinú</strong></p>
            </div>
            <div className="education mb-4">
              <h4>Especialización en Nutrición Deportiva (No terminada)</h4>
              <p><strong>Instituto de Nutrición Deportiva</strong></p>
            </div>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Habilidades</h3>
          <div className="section-content">
            <ul>
              <li>Diseño y personalización de planes nutricionales</li>
              <li>Asesoramiento en nutrición deportiva</li>
              <li>Evaluaciones y seguimiento nutricional</li>
              <li>Educación en hábitos alimenticios saludables</li>
              <li>Conocimientos en suplementos y optimización del rendimiento</li>
              <li>Habilidades de comunicación y motivación</li>
            </ul>
          </div>
        </section>
        
        <section className="cv-section mb-5">
          <h3 className="section-title">Logros</h3>
          <div className="section-content">
            <ul>
              <li>Desarrollo de programas de nutrición que han mejorado el rendimiento y la salud de numerosos atletas.</li>
              <li>Implementación de talleres educativos sobre nutrición en comunidades locales.</li>
              <li>Publicación de artículos sobre nutrición en revistas especializadas.</li>
              <li>Certificación en técnicas avanzadas de evaluación nutricional.</li>
              <li>Reconocida por la comunidad médica por la mejora significativa en la salud de sus pacientes.</li>
            </ul>
          </div>
        </section>
      </div>
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default NutricionistaCV;
