import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import ProtectRoute from "./guards/ProtectRoute";
import AccesoNoPermitido from "./pages/AccesoNoPermitido";
import Inicio from "./pages/Inicio";
import Soporte from "./pages/Soporte";

// Carga del componente mediante lazy loading

const InicioVentas = React.lazy(() => import('./modules/ventas/InicioVentas'));
const InicioRRHH = React.lazy(() => import('./modules/rrhh/InicioRRHH'));


function App() {

  // Simulación o mock de un sistema de autenticación

  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    setUsuario({nombre: 'Juan Pérez', rol: 'ventas'});
    navigate('/');
  }

  const handleLogout = () => {
    setUsuario(null);
    navigate('/');
  }

  return (
    <>
      <NavMenu usuario={usuario} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Inicio />} /> {/* La correspondiente a la ruta base del dominio*/}
        <Route path="soporte" element={<Soporte />} />
        {/* Ruta para módulo lazy loading */}
        <Route path="/ventas/*" element={
          <ProtectRoute usuario={usuario}>
            <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
              <InicioVentas />
            </React.Suspense>
          </ProtectRoute>
        } />
        <Route path="/recursos-humanos/*" element={
          <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
            <InicioRRHH />
         </React.Suspense>
        } />
        <Route path="no-permitido" element={<AccesoNoPermitido />}/>
        {/* Para las rutas no existentes usamos máscara * al final */}
        <Route path="*" element={
          <div className="container">
            <p>Lo sentimos, la página no existe</p>
            <Link to="/" ><button>Volver a inicio</button></Link>
          </div>
        }/>
      </Routes>
    </>
  );
}

export default App;
