import "./ListaDeImagenes.css";

function MostrarImg({ image }) {
    return (
        <div>
        <img src={image.urls.small} alt= {image.alt_description} className="detalle-img"/>
        <h5> {image.id} </h5>
        </div>

    )
}

export default MostrarImg;