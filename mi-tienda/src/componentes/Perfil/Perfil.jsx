import { useState } from 'react';
import './Estilo Perfil.css';


function Perfil( { titulo, arroba, img } ) {

    const [count, setCount] = useState(0);

    function handelClickSuma(suma) {
        setCount(count + 1);
    }
    function handelClickResta(resta) {
        setCount(count - 1);
    }

    

    return (
        <>
            <div className="contenedorPerfil">
                <article>
                    <img src="../img/Marte" alt="" />
                    <h3> {titulo} </h3>
                    <p> {arroba} </p>
                </article>
                <div>
                <button onClick={handelClickSuma}>+</button>
                <span> {count} </span>
                <button onClick={handelClickResta}>-</button>
                </div>
            </div>
        </>
        
    )
}


export default Perfil;