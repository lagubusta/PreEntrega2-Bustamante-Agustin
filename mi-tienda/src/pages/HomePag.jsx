import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PagInicio from "../componentes/PagInicio/PagInicio";


function HomePag() {
    return (
        <>
        <main>
        <PagInicio></PagInicio>
        </main>
        </>  
    )
}

export default HomePag;