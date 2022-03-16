import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFadeLoad } from '../../../hooks/useFadeLoad';
import { getClienteByCif, getClienteById } from '../services/Clientes';

export default function EditarCliente() {

    const params = useParams();
    const [values, setValues] = useState({
        nombre: '',
        actividades: '',
        direccion: '',
        localidad: ''
    })
    const [isEditMode, setEditMode] = useState(false);

    useEffect(() => {
        getClienteById(params._id)
            .then(res => { // Desestructuring all credits to Antonio!!!
                const {nombre, actividades, direccion, localidad} = res.data.cliente;
                setValues(() => ({
                        nombre,
                        actividades,
                        direccion,
                        localidad,
                    }));
            })
            .catch(err => {
                console.log(err)
            })
    }, [params])

    const handleOnChange = () => {}
    const handleOnSubmit = () => {}

    return (
        <div className="container" ref={useFadeLoad()}>
           <div className="row">
                <div className="col-100">
                    <form onSubmit={handleOnSubmit}>
                        <div className="row">
                            <div className="col-100">
                                <label>Nombre</label>
                                <input type="text" 
                                    name="nombre"
                                    value={values.nombre}
                                    onChange={handleOnChange}
                                    readOnly={!isEditMode}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-100">
                                <label>Actividades</label>
                                <input type="text" 
                                    name="actividades"
                                    value={values.actividades}
                                    onChange={handleOnChange}
                                    readOnly={!isEditMode}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-100">
                                <label>Dirección</label>
                                <input type="text" 
                                    name="direccion"
                                    value={values.direccion}
                                    onChange={handleOnChange}
                                    readOnly={!isEditMode}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-100">
                                <label>Localidad</label>
                                <input type="text" 
                                    name="localidad"
                                    value={values.localidad}
                                    onChange={handleOnChange}
                                    readOnly={!isEditMode}/>
                            </div>
                        </div>
                        <div className="row end">
                            <Link to="/ventas/tabla-clientes" >
                                <button className='outline'>Cancelar</button>
                            </Link>
                            <button type="submit">Añadir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
