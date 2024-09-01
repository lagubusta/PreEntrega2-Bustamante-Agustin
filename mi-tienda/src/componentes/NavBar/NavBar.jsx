import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(){

    return(
        <nav>
            <Link to="/home" className="listaNavInicio">Inicio</Link>
            <Link to="/home/carrito" className="listaNav">Carrito</Link>
            <Link to="/home/perfil" className="listaNav">Perfil</Link>
            <Link to="/home/productos" className="listaNav">Productos</Link>
        </nav>
    )
}

export default NavBar;