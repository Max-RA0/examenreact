import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../landing/components/navbar';

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && email === storedUser.email && password === storedUser.password) {
      alert("Inicio de sesión exitoso");
      navigate('/dashboard', { replace: true });
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
          <img src="https://img.freepik.com/vector-gratis/diseno-logotipo-degradado-colorido-letra_474888-2309.jpg" alt="Logo" className='mx-auto w-24 mb-4' />
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Iniciar Sesión</h2>
          <form onSubmit={login}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Correo</label>
              <input onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" type="email" placeholder="Correo electrónico" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
              <input onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" type="password" placeholder="Contraseña" />
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring">Acceder</button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            ¿No tienes una cuenta? <Link to="/register" className="text-blue-500 hover:underline">Regístrate</Link>
          </p>
        </div>
      </div>
    </>
  );
};
