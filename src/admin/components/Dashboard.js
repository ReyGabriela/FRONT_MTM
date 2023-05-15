import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [dreams, setDreams] = useState([
    { id: 1, childName: 'Juan', dream: 'Ser astronauta' },
    { id: 2, childName: 'María', dream: 'Conocer a un dinosaurio' },
    // ... add more dreams as needed
  ]);

  const addDream = () => {
    // Logic to add a new dream
  };

  const editDream = (id) => {
    // Logic to edit a dream
  };

  const deleteDream = (id) => {
    setDreams(dreams.filter((dream) => dream.id !== id));
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      
      <div className="dreams-list">
        {dreams.map((dream) => (
          <div key={dream.id} className="dream">
            <h3>{dream.childName}</h3>
            <p>{dream.dream}</p>
            <button onClick={() => editDream(dream.id)}>Editar</button>
            <button onClick={() => deleteDream(dream.id)}>Eliminar</button>
          </div>
        ))}
      </div>

      <button onClick={addDream}>Añadir sueño</button>
    </div>
  );
};

export default Dashboard;
