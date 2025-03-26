import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Clients = () => {
  const [clients, setClients] = useState([]);

  const addClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  return (
    <div>
      <h2>Listado de Clientes</h2>
      <Link to="new">
        <button className="btn btn-primary">Agregar Cliente</button>
      </Link>

      <table className="table border">
        <thead>
          <tr>
            <th>Ítem</th>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{client.documento}</td>
              <td>{client.name}</td>
              <td>{client.direccion}</td>
              <td>{client.telefono}</td>
              <td>{client.estado ? "Activo" : "Inactivo"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Aquí se mostrará el formulario si la ruta es /dashboard/clients/new */}
      <Outlet context={{ addClient }} />
    </div>
  );
};
