import "./ListaDeImagenes.css";

function MostrarImg({ image }) {
    return (
        <>
        <img src={image.urls.small} alt= {image.alt_description} className="detalle-img"/>
        </>

    )
}

export default MostrarImg;