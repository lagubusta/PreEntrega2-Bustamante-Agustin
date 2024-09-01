import { Link } from "react-router-dom";

function NavBar(){

    return(
        <nav>
            <Link to="/home">Inicio</Link>
            <Link to="/home/carrito">Carrito</Link>
            <Link to="/home/perfil">Perfil</Link>
            <Link to="/home/productos">Productos</Link>
        </nav>
    )
}

export default NavBar;