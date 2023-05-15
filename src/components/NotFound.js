// en src/components/NotFound.js
import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="container">
      <div className="box">
        <h1>Error 404</h1>
        <p>La página que buscas no existe.</p>
      </div>
    </div>
  );
};

export default NotFound;
