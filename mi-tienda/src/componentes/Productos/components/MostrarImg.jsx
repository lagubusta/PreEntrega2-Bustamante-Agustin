import { useState } from 'react';
import "./ListaDeImagenes.css";

function MostrarImg({ image }) {

    /* */
    const [count, setCount] = useState(0);

    function handelClickSuma(suma) {
        setCount(count + 1);
    }
    function handelClickResta(resta) {
        setCount(count - 1);
    }
    
    return (
        <div className='Cards'>
            <img src={image.urls.small} alt={image.alt_description} className="detalle-img" />
            <h5> {image.id} </h5>
            <div className="Cards">
                <button onClick={handelClickSuma}>+</button>
                <span> {count} </span>
                <button onClick={handelClickResta}>-</button>
            </div>
        </div>

    )
}

export default MostrarImg;




