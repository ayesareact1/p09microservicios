import React from 'react'
import { Link } from 'react-router-dom'
import { useFadeLoad } from '../hooks/useFadeLoad'

export default function Soporte() {
  return (
    <div className="container" ref={useFadeLoad()}>
        <h1>Soporte</h1>
        <Link to="/">
            <button>Volver a inicio</button>
        </Link>
    </div>
  )
}
