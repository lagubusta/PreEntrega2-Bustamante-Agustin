import { Link } from "react-router-dom";
import "./Error.css";

function Errorr (){
    return(
        <div className="contenedor-error">
        <h1>¡Ups!</h1>
        <p>La pagina que estas buscando no puede ser encontrada</p>
        <Link to="/home">Volver al Inicio</Link>
        </div>
    )
}

export default Errorr;