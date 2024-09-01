import MostrarImg from "./MostrarImg";
import "./ListaDeImagenes.css";

function ListaDeImagenes ({images}){

    const renderImages = images.map((image)=>{
        return <MostrarImg key={image.key}  image = {image}/>
    })

return(
    <>
    <div className="imgae-list"> {renderImages} </div>
    </>
)
}

export default ListaDeImagenes;