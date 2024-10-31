import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Main/Home';
import QuickLink from './Pages/QuickLink/QuickLink';
import WhatsappButton from './Components/whatsapp/whatsapp';
import Powerbuilding from './Pages/powerbuilding/powerbuilding';
import Powerlifting from './Pages/powerlifting/powerlifting';
import Bodybuilding from './Pages/culturismo/culturismo';
import Streetlifting from './Pages/streetlifting/streetlifting';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HealthBenefits from './Pages/salud/salud';
import DeportesAdaptados from './Pages/otrosdeportes/DeportesAdaptados';
import EntrenadorCV from './Pages/coach/EntrenadorCv';
import LigaPotencia from './Pages/LigaPotencia/ligapotencia';
import RankingPowerlifting from './Pages/rankings/rankings';
import Inscripcion from './Pages/inscripcion/inscripcion';
import PowerliftingEvent from './Pages/eventos/eventos';
import Login from './Pages/login/login';
import NutricionistaCV from './Pages/nutricionista/nutricionista';
import PsicologoCV from './Pages/psicologo/psicologo';
import MedicoCV from './Pages/medico/medico';
import Planificacion from './Pages/planificacion/planificacion';
import TestimoniosPower from './Pages/testimonioOtrosDeportes/testimonioOtrosDeportes';
import TestimoniosPowerbuilding from './Pages/testimonioPowerbuilding/testimonioPowerbuilding';
import TestimoniosCalistenia from './Pages/testimoniocalistenia/testimonioCalistenia';
import TestimoniosHipertrofia from './Pages/testimonioHipertrofia/testimoniohipertrofia';
import TestimoniosSalud from './Pages/testimonioSalud/testimoniosalud';
import TestimonioOtrosDeportes from './Pages/testimonioOtrosDeportes/testimonioOtrosDeportes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuickLink" element={<QuickLink />} />
        <Route path="/whatsapp" element={<WhatsappButton />} />
        <Route path="/powerbuilding" element={<Powerbuilding />} />
        <Route path="/powerlifting" element={<Powerlifting />} />
        <Route path="/culturismo" element={<Bodybuilding />} />
        <Route path="/streetlifting" element={<Streetlifting />} />
        <Route path="/salud" element={<HealthBenefits />} />
        
        <Route path="/otrosdeportes" element={<DeportesAdaptados />} />
        <Route path="/entrenadores" element={<EntrenadorCV />} />
        <Route path="/Ligapotencia" element={<LigaPotencia />} />
        <Route path="/rankings" element={<RankingPowerlifting />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
        
        <Route path="/eventos" element={<PowerliftingEvent />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/nutricionista" element={<NutricionistaCV />} />
        <Route path="/psicologo" element={<PsicologoCV />} />
        <Route path="/medico" element={<MedicoCV />} />
        <Route path="/planificacion" element={<Planificacion />} />
        <Route path="/testimonios-powerlifting" element={<TestimoniosPower/>} />
        {/* Add more routes here if needed */}

        <Route path="/testimonios-powerbuilding" element={<TestimoniosPowerbuilding/>} />
        
        <Route path="/testimonios-calistenia" element={<TestimoniosCalistenia/>} />
        <Route path="/testimonios-hipertrofia" element={<TestimoniosHipertrofia/>} />
        <Route path="/testimonios-salud" element={<TestimoniosSalud/>} />
        
        <Route path="/testimonios-otrosdeportes" element={<TestimonioOtrosDeportes/>} />

      </Routes>
    </Router>
  );
}

export default App;
