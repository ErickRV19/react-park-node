import { Link } from 'react-router-dom'

const Sidebar =()=> {
    return(
        <div className="sidebar">
            <ul>
            <h3>Parque de juegos</h3>
                <li>
                    <Link to ="/">Inicio</Link>
                </li>
                <li>
                    <Link to ="/empleados">Empleados</Link>
                </li>
                <li>
                    <Link to ="/sucursales">Sucursales</Link>
                </li>
                <li>
                    <Link to ="/usuarios">Usuarios</Link>
                </li>
            </ul>
        </div>

    );
}
export default Sidebar;