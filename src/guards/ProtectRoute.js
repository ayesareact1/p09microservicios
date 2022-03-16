import { Navigate } from "react-router-dom";



export default function ProtectRoute({usuario, children}) {

    if(usuario?.rol !== 'ventas') {
        return <Navigate to="/no-permitido" replace/>
    }

    return children;

}