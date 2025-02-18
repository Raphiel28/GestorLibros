import { useContext, useEffect, useState } from "react";
import { deleteAutor, getAutores } from "../ApiContext/ApiContext";
import { ContextoGlobal } from "../Contexto/Contexto";

export function Autores(){

    const {setModalValue, setModalStates} = useContext(ContextoGlobal)
    const operModal = () =>{

        setModalStates(true);
        setModalValue(2);
    }
    return(<>
    
    <div className="d-flex flex-column align-items-center" style={{width:'96%', height:'100%'}}>
    <div className="d-flex flex-row mt-5 justify-content-between" style={{width:'90%'}}>

        <h3 style={{color:'#000'}}>Lista de Autores</h3>

        <button onClick={operModal} className="btn btn-primary">Agregar Autor</button>


    </div>

    <div className="mt-2 pt-2 pb-3 overflow-auto" style={{width:'90%', flexGrow:'1'}}>

        <TablaAutores/>
    </div>

    </div>
    
    
    </>)
}



function TablaAutores(){

    const {setModalValue, setModalStates, setModalContent} = useContext(ContextoGlobal)

    const editarClick = (id) =>{

        setModalStates(true);
        setModalValue(4);
        setModalContent({
            id: id
        });
    }

     const [autores, setAutores] = useState([]);
      
        useEffect(() => {
          async function fetchData() {
            const data = await getAutores();
            setAutores(data); 
          }
          fetchData();
        }, []);
      
        return (
          <>
            <table className="table" style={{width:'100%',  tableLayout: 'fixed'}}>
              <thead>
                <tr>
                <th style={{ width: '5%' }}>#</th>
          <th style={{ width: '40%' }}>First Name</th>
          <th style={{ width: '45%' }}>Last Name</th>
         
          <th style={{ width: '5%' }}></th>
          <th style={{ width: '5%' }}></th>
          
                </tr>
              </thead>
              <tbody>
                {autores && autores.length > 0 ? (
                  autores.map((autor) => (
                    <tr key={autor.id}>
                      <th scope="row">{autor.id}</th>
                      <td>{autor.firstName}</td>
                      <td style={{textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap', maxWidth:'50%'}}>{autor.lastName}</td>
                      
                      <td><svg onClick={()=>editarClick(autor.id)} className="mb-1 icon-edit"  style={{width:'1.2rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
              fill="#5A5B5C" stroke="#5A5B5C" stroke-width="2" />
              
    </svg></td>
    <td><svg onClick={
       async () => {
           const eliminado = await deleteAutor(autor.id);
           if (eliminado) {
             setAutores(autores.filter((l) => l.id !== autor.id));
           }
         } 
    } className="mb-1 icon-trash"  style={{width:'1.2rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
              fill="#5A5B5C" stroke="#5A5B5C" stroke-width="2"  />
              
    </svg></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">Cargando...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        );
}