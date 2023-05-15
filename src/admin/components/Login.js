import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // Esta es una función ficticia que debes reemplazar con tu lógica de autenticación real.
  const authenticate = (credentials) => {
    // Verifica las credenciales del usuario y devuelve true si son correctas y false en caso contrario.
    // En un escenario real, probablemente harías una solicitud a tu servidor aquí.
    return credentials.username === 'admin' && credentials.password === 'password';
  };

  const onSubmit = (data) => {
    // Intenta autenticar al usuario con las credenciales proporcionadas.
    if (authenticate(data)) {
      // Si la autenticación es exitosa, actualiza el estado y redirige al usuario al dashboard.
      setIsLoggedIn(true);
      navigate('/admin/dashboard');
    } else {
      // Si la autenticación falla, muestra un mensaje de error o maneja el error de alguna otra manera.
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Usuario:
        <input type="text" {...register('username')} required />
      </label>
      <label>
        Contraseña:
        <input type="password" {...register('password')} required />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
