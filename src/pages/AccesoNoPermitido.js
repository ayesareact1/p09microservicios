import React from 'react'
import { useFadeLoad } from '../hooks/useFadeLoad'

export default function AccesoNoPermitido() {
  return (
    <div className="container" ref={useFadeLoad()}>
        <p>No dispone de permisos de acceso. Inicie sesión o contacte con su administrador</p>
    </div>
  )
}
