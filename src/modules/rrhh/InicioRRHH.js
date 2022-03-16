import React from 'react'
import { useFadeLoad } from '../../hooks/useFadeLoad'

export default function InicioRRHH() {
  return (
    <div className="container" ref={useFadeLoad()}>
        <h1>Recursos Humanos</h1>
    </div>
  )
}
