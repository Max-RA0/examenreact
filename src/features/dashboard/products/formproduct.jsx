import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

export const FormProducts = () => {
    const navigate = useNavigate();
    const { addProduct } = useOutletContext(); 

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const saveProduct = (e) => {
        e.preventDefault();
        addProduct({ name, description, price, stock });
        navigate('/dashboard/products'); // Redirige a la lista de productos
    };

    return (
        <div>
            <h2>Registrar Producto</h2>
            <form onSubmit={saveProduct}>
                <div className="mb-3">
                    <label className="form-label">Nombre del Producto</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} required type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} required type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} required type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input onChange={(e) => setStock(e.target.value)} value={stock} required type="number" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success col-12">Guardar</button>
            </form>
        </div>
    );
};