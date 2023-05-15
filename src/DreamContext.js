import React, { createContext, useState } from 'react';

export const DreamContext = createContext();

export const DreamProvider = ({ children }) => {
    const [dreams, setDreams] = useState([
        { id: 1, childName: 'Juan Perez', dream: 'Ser astronauta', status: 'active', eps: 'EPS1', age: 8, city: 'Bogotá', imageUrl: 'url-to-image-1' },
        { id: 2, childName: 'María Alibar', dream: 'Conocer a un dinosaurio', status: 'inactive', eps: 'EPS2', age: 6, city: 'Medellín', imageUrl: 'url-to-image-2' },
        { id: 2, childName: 'Cristhian Aranzales', dream: 'Ser Gay', status: 'active', eps: 'EPS', age: 24, city: 'Villavicencio', imageUrl: 'url-to-image-2' },
        // ... add more dreams as needed
      ]);
      

  return (
    <DreamContext.Provider value={[dreams, setDreams]}>
      {children}
    </DreamContext.Provider>
  );
};
