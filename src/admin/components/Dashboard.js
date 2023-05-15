import React, { useContext, useState } from 'react';
import { DreamContext } from '../../DreamContext';
import './Dashboard.css';
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';

Modal.setAppElement('#root');

const Dashboard = () => {
  const [dreams, setDreams] = useContext(DreamContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDream, setNewDream] = useState({ childName: '', dream: '', status: '', eps: '', age: '', city: '', photo: null });
  const [editingDream, setEditingDream] = useState(null); // Nuevo estado para el sueño que se está editando

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setNewDream({ ...newDream, photo: acceptedFiles[0] });
    }
  });

  const addDream = () => {
    // Agrega el nuevo sueño a la lista de sueños
    setDreams([...dreams, { ...newDream, id: dreams.length + 1 }]);
    // Limpia el formulario y cierra el modal
    setNewDream({ childName: '', dream: '', status: '', eps: '', age: '', city: '', photo: null });
    setIsModalOpen(false);
  };


  const saveDream = () => {
    // Si estamos editando un sueño, actualizamos ese sueño; de lo contrario, añadimos un nuevo sueño
    if (editingDream) {
      setDreams(dreams.map((dream) => (dream.id === editingDream ? newDream : dream)));
      setEditingDream(null);
    } else {
      addDream();
    }
  };

  const deleteDream = (id) => {
    setDreams(dreams.filter((dream) => dream.id !== id));
  };


  const handleInputChange = (event) => {
    setNewDream({ ...newDream, [event.target.name]: event.target.value });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={handleOpenModal}>Añadir Paciente</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Añadir Sueño"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Añadir Nuevo Sueño</h2>
        <form>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Suelta la foto aquí...</p>
            ) : (
              <p>Arrastra y suelta la foto aquí, o haz click para seleccionar una foto</p>
            )}
          </div>
          <label>Nombre del paciente</label>
          <input name="childName" value={newDream.childName} onChange={handleInputChange} />
          <label>Sueño a cumplir</label>
          <input name="dream" value={newDream.dream} onChange={handleInputChange} />
          <label>Edad</label>
          <input name="age" value={newDream.age} onChange={handleInputChange} />
          <label>EPS</label>
          <input name="eps" value={newDream.eps} onChange={handleInputChange} />
          <label>Ciudad</label>
          <input name="city" value={newDream.city} onChange={handleInputChange} />
          
        </form>
        <button onClick={addDream}>Añadir sueño</button>
        <button onClick={handleCloseModal}>Cerrar</button>
      </Modal>

      <div className="dreams-list">
        {dreams.map((dream) => (
          <div key={dream.id} className="dream">
            {dream.photo && (
              <img src={URL.createObjectURL(dream.photo)} alt="Foto del niño" />
            )}
            <h3>{dream.childName}</h3>
            <p>{dream.dream}</p>
            <button onClick={saveDream}>{editingDream ? 'Guardar cambios' : 'Añadir sueño'}</button>
            <button onClick={() => deleteDream(dream.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

