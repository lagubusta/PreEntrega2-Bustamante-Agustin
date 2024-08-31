import { useState, useEffect } from 'react';


import Perfil from "./componentes/Perfil/Perfil";
import Marte from "./img/Marte.jpg"
import Montañas from "./img/Montañas.jpg";
import Nubes from "./img/Nubes.jpg";
import Carrito from "./componentes/Carrito/Carrito";

export default function App() {
     
    return(
     <div>
        <Carrito></Carrito>
        <h1> Asistentes</h1>
        <Perfil titulo ="Marte" arroba ="@Marte" img = {Marte}  />
        <Perfil titulo ="Montañas" arroba ="@Montañas"  img = {Montañas} />
        <Perfil titulo ="Nubes" arroba ="@Nubes" img = {Nubes} />
        
     </div>   
     
    )
}
