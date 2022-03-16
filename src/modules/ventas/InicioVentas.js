import React, {useEffect} from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { useFadeLoad } from '../../hooks/useFadeLoad'
import CrearCliente from './clientes/CrearCliente'
import EditarCliente from './clientes/EditarCliente'
import TablaClientes from './clientes/TablaClientes'

export default function InicioVentas() {

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<InicioVentasLayout />}/>
        <Route path="tabla-clientes" element={<TablaClientes />} />
        <Route path="crear-cliente" element={<CrearCliente />} />
        <Route path="editar-cliente/:cif" element={<EditarCliente />} />
      </Route>
    </Routes>
  )
}

function InicioVentasLayout() {
  return (
    <div className="container" ref={useFadeLoad()}>
      <h1>Ventas</h1>
      {/* <Link to="tabla-clientes"> Con ruta relativa */}
      <Link to="/ventas/tabla-clientes">
        <button>Clientes</button>
      </Link>
    </div>
  )
}
