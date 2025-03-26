    import React, { useState } from 'react';
    import { useOutletContext, useNavigate } from 'react-router-dom';

    export const Formclient = () => {
        const navigate = useNavigate();
        const { addClient } = useOutletContext(); 

        const [documento, setDocumento] = useState("");
        const [name, setName] = useState("");
        const [direccion, setDireccion] = useState("");
        const [telefono, setTelefono] = useState("");
        const [estado, setEstado] = useState(true);

        const saveData = (e) => {
            e.preventDefault();
            addClient({ documento, name, direccion, telefono, estado });
            navigate('/dashboard/clients'); // Redirige a la lista de clientes
        };

        return (
            <div>
                <h2>Registrar Cliente</h2>
                <form onSubmit={saveData}>
                    <div className="mb-3">
                        <label className="form-label">Documento</label>
                        <input onChange={(e) => setDocumento(e.target.value)} value={documento} required type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombres</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} required type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dirección</label>
                        <input onChange={(e) => setDireccion(e.target.value)} value={direccion} required type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input onChange={(e) => setTelefono(e.target.value)} value={telefono} required type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Estado</label>
                        <select className="form-select" value={estado} onChange={(e) => setEstado(e.target.value === "true")}>
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success col-12">Guardar</button>
                </form>
            </div>
        );
    };
