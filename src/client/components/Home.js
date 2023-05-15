import React, { useContext } from 'react';
import { DreamContext } from '../../DreamContext';
import './Home.css';
import Header from './Header';

const Home = () => {
  const [dreams] = useContext(DreamContext);
  

  return (
    <div className="page-container">
      <Header />
      <header>
        <h1>Listado de Pacientes</h1>
      </header>

      <div className="table-container">
        <div className="grid-table">
          <div className="grid-row header">
            <div>Nombre del Niño</div>
            <div>Estado del Sueño</div>
            <div>EPS</div>
            <div>Edad del Niño</div>
            <div>Ciudad de Residencia</div>
          </div>

          {dreams.map((dream) => (
            <div key={dream.id} className="grid-row">
              <div className="child-data">
                <img className="child-image" src={dream.imageUrl} alt={`${dream.childName}'s dream`} />
                <div>{dream.childName}</div>
              </div>
              <div className={`status ${dream.status}`}>{dream.status === 'active' ? 'Activo' : 'No Activo'}</div>
              <div>{dream.eps}</div>
              <div>{dream.age}</div>
              <div>{dream.city}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
