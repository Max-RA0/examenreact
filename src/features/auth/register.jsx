import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../landing/components/navbar';

export const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    // Guardar en localStorage
    localStorage.setItem('user', JSON.stringify({
      name: formData.name,
      email: formData.email,
      password: formData.password
    }));
    
    alert('Registro exitoso');
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
          <img src="https://img.freepik.com/vector-gratis/diseno-logotipo-degradado-colorido-letra_474888-2309.jpg" alt="Logo" className='mx-auto w-24 mb-4' />
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Registro</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input name="name" onChange={handleChange} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" type="text" placeholder="Tu nombre" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Correo</label>
              <input name="email" onChange={handleChange} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" type="email" placeholder="Correo electrónico" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
              <input name="password" onChange={handleChange} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" type="password" placeholder="Contraseña" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirmar Contraseña</label>
              <input name="confirmPassword" onChange={handleChange} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" type="password" placeholder="Repite tu contraseña" />
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring">Registrarse</button>
          </form>
          <p className="mt-4 text-center text-gray-600">¿Ya tienes una cuenta? <a href="/login" className="text-blue-500 hover:underline">Inicia sesión</a></p>
        </div>
      </div>
    </>
  );
};
