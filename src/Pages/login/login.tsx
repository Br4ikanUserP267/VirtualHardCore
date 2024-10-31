import React, { useState } from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { auth } from '../../config/firebaseconfig'; // Asegúrate de que la ruta sea correcta
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import './login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Iniciado sesión con éxito');
      // Aquí puedes redirigir al usuario o hacer otra acción
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  const handleResetSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert('Enlace de restablecimiento enviado al correo electrónico.');
      setShowModal(false);
    } catch (error) {
      console.error('Error al enviar el enlace de restablecimiento:', error);
      alert('Error al enviar el enlace de restablecimiento. Verifica el correo electrónico.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-content container my-5">
        <h1 className="text-center mb-4">Iniciar Sesión</h1>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
          <div className="text-center mt-3">
            <Button variant="link" onClick={() => setShowModal(true)}>
              ¿Olvidaste tu contraseña?
            </Button>
          </div>
        </Form>
      </div>
      <Footer />

      <Modal show={showModal} onHide={() => setShowModal(false)} className="reset-password-modal">
        <Modal.Header closeButton>
          <Modal.Title>Restablecer Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleResetSubmit}>
            <Form.Group className="mb-3" controlId="formResetEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar Enlace de Restablecimiento
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
