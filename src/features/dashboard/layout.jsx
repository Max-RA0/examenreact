import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './styleDashboard.css';

export const Layout = () => {
    const navigate = useNavigate();

    let storedUser;
    try {
        storedUser = JSON.parse(localStorage.getItem('user')) || {};
    } catch (error) {
        console.error("Error parsing user data:", error);
        storedUser = {};
    }

    const userName = storedUser.name || 'Usuario';

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/', { replace: true });
    };

    return (
        <div className='dashboard'>
            <nav>
                <ul>
                    <li>
                        <Link className='font-semibold text-xl tracking-tight text-white' to="/dashboard/products">Products</Link>
                    </li>
                    <li>
                        <Link className='font-semibold text-xl tracking-tight text-white' to="/dashboard/clients">Clients</Link>
                    </li>
                </ul>
            </nav>
            <div className="contenedor">
                <div className="navbar">
                    <p>Bienvenido, {userName}</p> 
                    <small>
                        <button onClick={logout} className="logout-btn">Salir</button>
                    </small>
                </div>
                <div className="contenidos">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
