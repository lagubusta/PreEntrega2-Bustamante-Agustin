import MostrarImg from "./MostrarImg";

function ListaDeImagenes ({images}){

    const renderImages = images.map((image)=>{
        return <MostrarImg key={image.key}  image = {image}/>
    })

return(
    <>
    <h1> {renderImages} </h1>
    </>
)
}

export default ListaDeImagenes;