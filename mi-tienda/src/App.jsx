import Perfil from "./componentes/Perfil/Perfil";
import Marte from "./img/Marte.jpg"
import Montañas from "./img/Montañas.jpg";
import Nubes from "./img/Nubes.jpg"

export default function App() {
     
    return(
     <div>
        <h1> Asistentes</h1>
        <Perfil titulo ="Marte" arroba ="@Marte" img = {Marte}  />
        <Perfil titulo ="Montañas" arroba ="@Montañas"  img = {Montañas} />
        <Perfil titulo ="Nubes" arroba ="@Nubes" img = {Nubes}  />
     </div>   
    )
}
