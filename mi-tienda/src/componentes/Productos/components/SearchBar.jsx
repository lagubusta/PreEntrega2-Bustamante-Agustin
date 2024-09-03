import { useState } from 'react';
import "./SearchBar.css";


function SearchBar({ enSubmit }) {

    const [term, setTerm] = useState("");

    function handelForSubmit(event) {
        event.preventDefault();
        enSubmit(term);
    }

    function handleChange(event) {
        setTerm(event.target.value);
    }

    return (
        <>
            <form onSubmit={handelForSubmit}>
                <input value={term} type="text" onChange={handleChange} placeholder='Ingresa la palabra a buscar.'/>
            </form>
        </>
    );
}

export default SearchBar;