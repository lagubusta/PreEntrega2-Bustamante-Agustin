import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImagenes from '../api';
import ListaDeImagenes from './components/ListaDeImagenes';


function Productos() {

    const handleSubmit = async (term) => {
        const resultado = await searchImagenes(term);
        setImg(resultado);
    }

    const [img, setImg] = useState([]);


    return (
        <>
            <SearchBar enSubmit={handleSubmit} />
            <ListaDeImagenes images= {img}/>
        </>
    );
}

export default Productos;