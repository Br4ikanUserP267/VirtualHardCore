import React, { useState } from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './inscripcion.css';

const Inscripcion: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setShowPayment(true);
    }, 2000); // Mostrar alerta por 2 segundos antes de ir a la sección de pago
  };

  const handlePaymentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Pago realizado con éxito");
  };

  return (
    <div>
      <Navbar />
      <div className="inscripcion-content container my-5">
        <header className="inscripcion-header text-center mb-5">
          <h1>Beneficios de estar afiliado a la Liga de Potencia de Sucre</h1>
          <ul className="beneficios-list text-left">
            <li>Participación en competencias nacionales e internacionales.</li>
            <li>Formar parte de una comunidad de atletas dedicados.</li>
            <li>Acceso a servicios del IMDER (Instituto Municipal de Deporte y Recreación).</li>
          </ul>
        </header>
        {!showPayment ? (
          <section className="form-section">
            <h2 className="form-title text-center mb-4">Formulario de Inscripción</h2>
            <form className="inscripcion-form" onSubmit={handleFormSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre completo" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="telefono" className="form-label">Número de Teléfono</label>
                <input type="tel" className="form-control" id="telefono" placeholder="Ingresa tu número de teléfono" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="fecha-nacimiento" className="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="fecha-nacimiento" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="tipo-documento" className="form-label">Tipo de Documento</label>
                <select className="form-control" id="tipo-documento" required>
                  <option value="">Selecciona el tipo de documento</option>
                  <option value="cedula">Cédula de Ciudadanía</option>
                  <option value="tarjeta-identidad">Tarjeta de Identidad</option>
                  <option value="cedula-extranjeria">Cédula de Extranjería</option>
                  <option value="pasaporte">Pasaporte</option>
                  <option value="registro-civil">Registro Civil</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="documento" className="form-label">Número de Documento</label>
                <input type="text" className="form-control" id="documento" placeholder="Ingresa tu número de documento" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="direccion" placeholder="Ingresa tu dirección" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="ciudad" placeholder="Ingresa tu ciudad" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="comentarios" className="form-label">Comentarios Adicionales</label>
                <textarea className="form-control" id="comentarios" rows={3} placeholder="Ingresa cualquier comentario adicional"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn inscribete-btn">Enviar Inscripción</button>
              </div>
            </form>
            {showAlert && (
              <div className="alert alert-success mt-4">
                Estamos procesando tu solicitud.
              </div>
            )}
          </section>
        ) : (
          <section className="form-section">
            <h2 className="form-title text-center mb-4">Pago de Inscripción</h2>
            <p className="text-center mb-4">El costo de la anualidad es de $100.000</p>
            <form className="payment-form" onSubmit={handlePaymentSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="card-number" className="form-label">Número de Tarjeta</label>
                <input type="text" className="form-control" id="card-number" placeholder="Ingresa el número de tu tarjeta" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="card-name" className="form-label">Nombre en la Tarjeta</label>
                <input type="text" className="form-control" id="card-name" placeholder="Ingresa el nombre como aparece en la tarjeta" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="expiry-date" className="form-label">Fecha de Expiración</label>
                <input type="text" className="form-control" id="expiry-date" placeholder="MM/AA" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cvv" placeholder="Ingresa el CVV" required />
              </div>
              <div className="text-center">
                <button type="submit" className="btn inscribete-btn">Realizar Pago</button>
              </div>
            </form>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Inscripcion;
