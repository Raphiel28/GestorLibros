import { useContext } from "react"

import { RegistrarLibro } from "./RegistrarLibro ";
import { ContextoGlobal } from "../Contexto/Contexto";
import { RegistrarAutor } from "./RegistrarAutor";
import { EditarLibro } from "./EditarLibro";
import { EditarAutor } from "./EditarAutor";
import { Detalles } from "./DetallesModal";



export function MainModal() {
    

return(
    <>
    <div className="principal d-flex flex-row justify-content-center align-items-center"   style={{position:'fixed', height:'100%', width:'100%', zIndex:'50', background:'rgba(0, 0, 0, 0.8)'}}>
    <Modales />
    </div>
    
    </>
)

}

function Modales(){

    const {modalValue} = useContext(ContextoGlobal);
    
        switch(modalValue){
            case 1:
                return <RegistrarLibro/>

            case 2:
                return <RegistrarAutor/>
    
            case 3:
                return <EditarLibro/>

            case 4:
                return <EditarAutor/>

            case 5:
                return <Detalles/>
    
            default:
                return <></>
        }
    
    }