import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFadeLoad } from '../../../hooks/useFadeLoad';
import { getClienteByCif } from '../services/Clientes';

export default function EditarCliente() {

    const params = useParams();
    const [cliente, setCliente] = useState({})

    useEffect(() => {
        setCliente(getClienteByCif(params.cif))
    }, [params])

    return (
        <div className="container" ref={useFadeLoad()}>
            <div className="row">
                <div className="col-100">
                    <h1>Detalle de cliente</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>CIF</th>
                                <th>Localidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.cif}</td>
                                <td>{cliente.localidad}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/ventas/tabla-clientes">
                        <button>Atrás</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
