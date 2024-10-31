import React, { useState } from 'react';
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import './rankings.css';

const initialAthletes = [
  { name: 'Atleta 1', birthDate: '1990-05-14', age: 34, category: 'Senior', sex: 'Masculino', weightCategory: '83 kg', squat: 200, deadlift: 250, ipfPoints: 500 },
  { name: 'Atleta 2', birthDate: '1995-08-21', age: 29, category: 'Senior', sex: 'Femenino', weightCategory: '63 kg', squat: 180, deadlift: 230, ipfPoints: 450 },
  // Añade más atletas aquí
];

const categories = ['Todas las Categorías', 'Senior', 'Junior', 'Sub-Junior', 'Master'];
const sexes = ['Todos los Sexos', 'Masculino', 'Femenino'];
const weightCategories = {
  Masculino: ['59 kg', '66 kg', '74 kg', '83 kg', '93 kg', '105 kg', '120 kg', '120+ kg'],
  Femenino: ['47 kg', '52 kg', '57 kg', '63 kg', '72 kg', '84 kg', '84+ kg']
};

const RankingPowerlifting: React.FC = () => {
  const [athletes, setAthletes] = useState(initialAthletes);
  const [selectedCategory, setSelectedCategory] = useState('Todas las Categorías');
  const [selectedSex, setSelectedSex] = useState('Todos los Sexos');
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('Todas las Categorías');

  const filterAthletes = () => {
    let filtered = initialAthletes;
    if (selectedCategory !== 'Todas las Categorías') {
      filtered = filtered.filter(athlete => athlete.category === selectedCategory);
    }
    if (selectedSex !== 'Todos los Sexos') {
      filtered = filtered.filter(athlete => athlete.sex === selectedSex);
    }
    if (selectedWeightCategory !== 'Todas las Categorías') {
      filtered = filtered.filter(athlete => athlete.weightCategory === selectedWeightCategory);
    }
    setAthletes(filtered);
  };

  const generateCertificate = (athlete: typeof initialAthletes[0]) => {
    // Lógica para generar el certificado
    alert(`Certificado generado para ${athlete.name}`);
  };

  return (
    <div>
      <Navbar />
      <div className="ranking-powerlifting-content container my-5">
        <header className="ranking-powerlifting-header text-center mb-5">
          <h1>Ranking de la liga de Potencia de Sucre</h1>
        </header>
        <div className="filters mb-4 text-center">
          <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select onChange={(e) => setSelectedSex(e.target.value)} value={selectedSex}>
            {sexes.map(sex => (
              <option key={sex} value={sex}>{sex}</option>
            ))}
          </select>
          {selectedSex !== 'Todos los Sexos' && (
            <select onChange={(e) => setSelectedWeightCategory(e.target.value)} value={selectedWeightCategory}>
              <option value="Todas las Categorías">Todas las Categorías de Peso</option>
              {weightCategories[selectedSex].map(weightCategory => (
                <option key={weightCategory} value={weightCategory}>{weightCategory}</option>
              ))}
            </select>
          )}
          <button onClick={filterAthletes}>Filtrar</button>
        </div>
        <section className="ranking-powerlifting-section mb-5">
          <h3 className="section-title">Top 10 Atletas</h3>
          <div className="section-content">
            <div className="table-responsive">
              <table className="ranking-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Edad</th>
                    <th>Categoría</th>
                    <th>Sexo</th>
                    <th>Categoría de Peso</th>
                    <th>Sentadilla (kg)</th>
                    <th>Peso Muerto (kg)</th>
                    <th>Puntos IPF</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {athletes.sort((a, b) => b.ipfPoints - a.ipfPoints).slice(0, 10).map((athlete, index) => (
                    <tr key={index}>
                      <td data-label="Nombre">{athlete.name}</td>
                      <td data-label="Fecha de Nacimiento">{athlete.birthDate}</td>
                      <td data-label="Edad">{athlete.age}</td>
                      <td data-label="Categoría">{athlete.category}</td>
                      <td data-label="Sexo">{athlete.sex}</td>
                      <td data-label="Categoría de Peso">{athlete.weightCategory}</td>
                      <td data-label="Sentadilla (kg)">{athlete.squat}</td>
                      <td data-label="Peso Muerto (kg)">{athlete.deadlift}</td>
                      <td data-label="Puntos IPF">{athlete.ipfPoints}</td>
                      <td data-label="Acciones">
                        <button onClick={() => generateCertificate(athlete)}>Generar Certificado</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RankingPowerlifting;
