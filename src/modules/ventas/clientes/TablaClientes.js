import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFadeLoad } from '../../../hooks/useFadeLoad';
import { getClientes, searchClientes } from '../services/Clientes';

export default function TablaClientes() {

    const [clientes, setClientes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        term: ''
    })

    // useEffect(() => { 
    //     setIsLoading(() => true);
    //     getClientes() // Todos los registros sin paginar
    //         .then(res => {
    //             setIsLoading(() => false);
    //             setClientes(() => res.data.clientes)
    //         })
    //         .catch(err => {
    //             setIsLoading(() => false);
    //             console.log(err);
    //         })
    //     setIsLoading(() => false);
    // }, [])

    const handleOnChange = e => {
        setForm({term: e.target.value})
    }

    useEffect(() => {
        if(form.term.length > 0) {
            setIsLoading(() => true);
            searchClientes(form.term)
                .then(res => {
                    setClientes(() => res.data.clientes);
                    setIsLoading(() => false);
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(() => false);
                })
        } else {
            setClientes(() => []);
        }
    },[form.term])

  return (
    <div className='container' ref={useFadeLoad()}>
        <div className="row">
            <div className="col-100">
                <h1>Clientes</h1>
                <Link to="../">
                    <button>Regresar</button>
                </Link>
                <Link to="/ventas/crear-cliente">
                    <button>Nuevo cliente</button>
                </Link>
                <div className="row">
                    <form>
                        <input type="search" 
                               name="term"
                               value={form.term}
                               onChange={handleOnChange}/>
                    </form>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ?
                                <tr>
                                    <td colSpan={2}>Cargando clientes</td>
                                </tr>
                            :    
                                clientes.map(cliente => {
                                    return (
                                        <tr key={cliente._id}>
                                            <td>{cliente.nombre}</td>
                                            <td>
                                                <Link to={`/ventas/editar-cliente/${cliente.cif}`}>
                                                    Visualizar
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
