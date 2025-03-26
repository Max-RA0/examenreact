import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h2>Listado de Productos</h2>
      <Link to="new">
        <button className="btn btn-primary">Agregar Producto</button>
      </Link>

      <table className="table border">
        <thead>
          <tr>
            <th>Ítem</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Aquí se mostrará el formulario si la ruta es /dashboard/products/new */}
      <Outlet context={{ addProduct }} />
    </div>
  );
};
