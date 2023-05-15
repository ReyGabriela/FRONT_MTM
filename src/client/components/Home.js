import React from 'react';
import './Home.css';

const Home = () => {
  // Datos de ejemplo para la lista de pacientes
  const patients = [
    {
      id: 1,
      name: 'Niño 1',
      status: 'Sueño cumplido',
      eps: 'EPS1',
      age: 8,
      city: 'Bogotá',
    },
    {
      id: 2,
      name: 'Niño 2',
      status: 'Sueño pendiente',
      eps: 'EPS2',
      age: 6,
      city: 'Medellín',
    },
    // ... más pacientes aquí
  ];

  return (
    <div>
      <h1>Listado de Pacientes</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del Niño</th>
            <th>Estado del Sueño</th>
            <th>EPS</th>
            <th>Edad del Niño</th>
            <th>Ciudad de Residencia</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.status}</td>
              <td>{patient.eps}</td>
              <td>{patient.age}</td>
              <td>{patient.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
