import React, { useState } from 'react';
import './planificacion.css';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

interface Ejercicio {
  nombre: string;
  peso: string;
  repeticiones: string;
  accesorios: string;
  dificultadEsperada: string;
}

const planificacion = {
  Lunes: [
    {
      nombre: 'Sentadilla',
      peso: '100kg',
      repeticiones: '4x8',
      accesorios: 'Cinturilla de soporte',
      dificultadEsperada: 'Difícil'
    },
    {
      nombre: 'Press de Banca',
      peso: '80kg',
      repeticiones: '4x8',
      accesorios: 'Muñequeras',
      dificultadEsperada: 'Moderado'
    }
  ],
  Miércoles: [
    {
      nombre: 'Peso Muerto',
      peso: '120kg',
      repeticiones: '3x6',
      accesorios: 'Cinturilla de soporte',
      dificultadEsperada: 'Difícil'
    },
    {
      nombre: 'Remo con Barra',
      peso: '70kg',
      repeticiones: '4x10',
      accesorios: 'Guantes de entrenamiento',
      dificultadEsperada: 'Fácil'
    }
  ],
  Viernes: [
    {
      nombre: 'Sentadilla Frontal',
      peso: '90kg',
      repeticiones: '4x8',
      accesorios: 'Cinturilla de soporte',
      dificultadEsperada: 'Moderado'
    },
    {
      nombre: 'Press de Banca Inclinado',
      peso: '75kg',
      repeticiones: '4x10',
      accesorios: 'Muñequeras',
      dificultadEsperada: 'Moderado'
    }
  ]
};

const Planificacion: React.FC = () => {
  const [diaSeleccionado, setDiaSeleccionado] = useState<string | null>(null);
  const [alertas, setAlertas] = useState<{ mensaje: string; tipo: 'success' | 'danger' | 'info' }[]>([]);
  const [registro, setRegistro] = useState<{ [key: string]: { dificultadObtenida: string; cumplioObjetivo: string; fallo: boolean } }>({});

  const agregarAlerta = (mensaje: string, tipo: 'success' | 'danger' | 'info') => {
    setAlertas([...alertas, { mensaje, tipo }]);
  };

  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>, dia: string, nombre: string) => {
    e.preventDefault();
    agregarAlerta('Datos enviados correctamente.', 'success');
    setRegistro(prev => ({
      ...prev,
      [`${dia}-${nombre}`]: {
        dificultadObtenida: e.currentTarget.dificultadObtenida.value,
        cumplioObjetivo: e.currentTarget.cumplioObjetivo.checked ? 'Sí' : 'No',
        fallo: e.currentTarget.fallo.checked
      }
    }));
  };

  const handleDiaClick = (dia: string) => {
    setDiaSeleccionado(dia === diaSeleccionado ? null : dia);
  };

  return (
    <div className="planificacion-semanal">
      <Navbar />
      <div className="container my-5">
        <header className="text-center mb-5">
          <h1>Planificación Semanal de Powerlifting</h1>
        </header>

        <div className="dias-semana">
          {Object.keys(planificacion).map(dia => (
            <Button key={dia} onClick={() => handleDiaClick(dia)} className="mb-3">
              {dia}
            </Button>
          ))}
        </div>

        {diaSeleccionado && (
          <section className="dia-semana mb-5">
            <h2>{diaSeleccionado}</h2>
            {planificacion[diaSeleccionado].map((ejercicio, index) => (
              <div key={index} className="ejercicio-card mb-4">
                <h3>{ejercicio.nombre}</h3>
                <p><strong>Peso:</strong> {ejercicio.peso}</p>
                <p><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
                <p><strong>Accesorios:</strong> {ejercicio.accesorios}</p>
                <p><strong>Dificultad Esperada:</strong> {ejercicio.dificultadEsperada}</p>
                <div className="d-flex">
                  <Button variant="link" onClick={() => agregarAlerta(`Mostrar video de ${ejercicio.nombre}`, 'info')}>Mostrar Video</Button>
                  <Button variant="link" onClick={() => agregarAlerta(`Registrar desempeño para ${ejercicio.nombre}`, 'info')}>Registrar Desempeño</Button>
                  <Button variant="link" onClick={() => agregarAlerta(`Marcar fallo en ${ejercicio.nombre}`, 'danger')}>Marcar Fallo</Button>
                </div>

                <Form onSubmit={(e) => manejarEnvio(e, diaSeleccionado, ejercicio.nombre)} className="mt-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Dificultad Obtenida</Form.Label>
                    <Form.Control type="text" name="dificultadObtenida" placeholder="e.g., Fácil, Moderado, Difícil" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check type="checkbox" name="cumplioObjetivo" label="¿Cumplió con el objetivo?" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check type="checkbox" name="fallo" label="¿Falló en el ejercicio?" />
                  </Form.Group>
                  <Button type="submit" variant="primary">Registrar Desempeño</Button>
                </Form>
              </div>
            ))}
          </section>
        )}

        <section className="alertas">
          {alertas.map((alerta, index) => (
            <Alert key={index} variant={alerta.tipo} dismissible>
              {alerta.mensaje}
            </Alert>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Planificacion;
