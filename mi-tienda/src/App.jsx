// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Componentes////////////////////////////////////////////////
import Perfil from "./componentes/Perfil/Perfil";
import Carrito from "./componentes/Carrito/Carrito";
import Productos from './componentes/Productos/Productos';
import NavBar from "./componentes/NavBar/NavBar";
//Componentes////////////////////////////////////////////////
//Paginas////////////////////////////////////////////////
import CarritoPag from "./pages/CarritoPag";
import ErrorPag from "./pages/ErrorPag";
import HomePag from "./pages/HomePag";
import PerfilPag from "./pages/PerfilPag";
import ProductosPag from './pages/ProductosPag';
import Layout from "./pages/Layout";

//Paginas////////////////////////////////////////////////
export default function App() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/home" element={<Layout/>}>
                        <Route index element={<HomePag />} />
                        <Route path="carrito" element={<CarritoPag />} />
                        <Route path="productos" element={<ProductosPag />} />
                        <Route path="perfil" element={<PerfilPag />} />
                        <Route path="*" element={<ErrorPag />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
