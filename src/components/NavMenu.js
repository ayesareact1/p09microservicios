import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavMenu(props) {




  return (
    <nav>
        {
            props.usuario !== null ?
                <div>
                    <button onClick={props.handleLogout}>
                        Logout
                    </button>
                    &nbsp;{props.usuario.nombre}
                </div>
            :
                <button onClick={props.handleLogin}>
                    Login
                </button>

        }
        <div>                        {/* La clase css activo esta en index.css */}
            <NavLink to="/" className={({isActive}) => isActive ? "activo" : ""}>
                Inicio
            </NavLink>
            {   
                props?.usuario?.rol === 'ventas' ?
                    <NavLink to="/ventas" className={({isActive}) => isActive ? "activo" : ""}>
                        Ventas
                    </NavLink>
                :
                null
            }
            {   
                props?.usuario?.rol === 'recursos humanos' ?
                    <NavLink to="/recursos-humanos" className={({isActive}) => isActive ? "activo" : ""}>
                        Recursos Humanos
                    </NavLink>
                :
                null
            }
            <NavLink to="/soporte" className={({isActive}) => isActive ? "activo" : ""}>
                Soporte
            </NavLink>
        </div>
    </nav>
  )
}
