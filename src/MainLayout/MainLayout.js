import { Autores } from "../Pages/Autores";
import { Libros } from "../Pages/Libros";
import { Barra } from "./Barra";
import { HashRouter, Routes, Route } from "react-router-dom";

import { useContext, useEffect } from "react";
import { MainModal } from "../Modales/MainModal";
import { ContextoGlobal } from "../Contexto/Contexto";

export function MainLayout(){
    const {modalStates,setModalStates, setModalValue } = useContext(ContextoGlobal);
   

    
  return  (<>
  <HashRouter>
    <div className=" d-flex flex-row " style={{ height:'100%', width:'100%'}}>
    {modalStates &&
            <MainModal/>
            }
            

<Barra/>

<Routes>
<Route path="/" element={<Libros />} />
<Route path="/autores" element={<Autores />} />
</Routes>


    </div>
    </HashRouter>  
    
    </>)
}