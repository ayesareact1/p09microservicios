import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useFadeLoad } from '../../../hooks/useFadeLoad';
import { getClienteById, editCliente } from '../services/Clientes';

export default function EditarCliente() {

    const params = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        nombre: '',
        actividades: '',
        direccion: '',
        localidad: ''
    })
    const [isEditMode, setIsEditMode] = useState(false);

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

    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleIsEditMode = (e) => {
        e.preventDefault();
        setIsEditMode(!isEditMode);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        editCliente(params._id, values)
            .then(res => {
                console.log(res);
                navigate("/ventas/tabla-clientes");
            })
            .catch(err => {
                console.log(err);
            })  
    }

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
                            {
                                isEditMode ?
                                <>
                                    <button type="button" className="outline" onClick={handleIsEditMode}>Cancelar</button>
                                    <button type="submit" className="m-l">
                                        Guardar cambios
                                    </button>
                                </>
                                :
                                <>
                                    <Link to="/ventas/tabla-clientes">
                                        <button type="button" className="outline">Cancelar</button>
                                    </Link>
                                    <button type="button" className="m-l" onClick={handleIsEditMode}>
                                        Editar
                                    </button>
                                </>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
