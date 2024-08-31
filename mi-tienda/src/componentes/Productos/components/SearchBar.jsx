import { useState } from 'react';



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
                <input value={term} type="text" onChange={handleChange} />
            </form>
        </>
    );
}

export default SearchBar;