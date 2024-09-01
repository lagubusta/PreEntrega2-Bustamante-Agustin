import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "../componentes/NavBar/NavBar";
import Footer from "../componentes/Footer/Footer";

function Layout() {
    return (
        <>
        <NavBar/>
        <Outlet/>      
        <Footer></Footer>  
        </>
    )
}

export default Layout;