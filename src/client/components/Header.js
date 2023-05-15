import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Aquí puedes implementar la lógica para filtrar los sueños según el término de búsqueda.
  };

  const handleToggleDarkMode = () => {
    // Aquí puedes implementar la lógica para cambiar al modo oscuro.
  };

  return (
    <header>
      <input 
        type="search" 
        placeholder="Buscar sueños..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleToggleDarkMode}>Cambiar a modo oscuro</button>
      <button onClick={() => window.location.href="/admin/login"}>Iniciar Sesión</button>
    </header>
  );
};

export default Header;
