import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "../componentes/NavBar/NavBar";

function Layout() {
    return (
        <>
        <NavBar/>
        <Outlet/>      
        <footer>Footer</footer>  
        </>
    )
}

export default Layout;