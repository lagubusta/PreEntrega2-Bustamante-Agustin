import './Estilo Perfil.css';
import { useState } from 'react';

function Perfil(propiedades) {

    let { titulo, arroba, img } = propiedades;

    function handelClick() {
        console.log("click");
    }

    return (
        <>
            <div className="contenedorPerfil">
                <article>
                    <img src={img} alt="" />
                    <h3> {titulo} </h3>
                    <p> {arroba} </p>
                </article>
                <button onClick={handelClick}>Cargar</button>
            </div>
        </>
    )
}


export default Perfil;