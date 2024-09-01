import { Link } from "react-router-dom";

function ErrorPag (){
    return(
        <>
        <main>
        <h1>Error</h1>
        <p>Esta Pagina es de error</p>
        <Link to="/home">Volver al Inicio</Link>
        </main>
        </>
    )
}

export default ErrorPag;