import { useContext, useEffect, useState } from "react"
import { ContextoGlobal } from "../Contexto/Contexto"
import { getLibroById } from "../ApiContext/ApiContext";


export function Detalles(){
    const {setModalValue, setModalStates, modalContent} = useContext(ContextoGlobal)
    const CloseModal = () =>{

        setModalStates(false);
        setModalValue(0);
    }

    const [libro, setLibro] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        console.log(modalContent)
      async function fetchAutor() {
        try {
          const data = await getLibroById(modalContent.id); 
          setLibro(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
  
      fetchAutor();
    }, [modalContent.id]);
  
    if (loading) return <p>Cargando autor...</p>;
    if (error) return <p>Error: {error}</p>;

    return(<>
    
    <div className="d-flex flex-column rounded py-2 px-2" style={{backgroundColor:'#fff', height:'430px', width:'550px'}}>

        <div className=" d-flex flex-row justify-content-center align-items-start" style={{width:'100%', height:'10%'}}>

            <div style={{width:'20%', height:'auto'}}></div>
            <div className="d-flex flex-row justify-content-center" style={{width:'60%', height:'auto'}}><h6 style={{color:'#000'}}>Detalles</h6></div>
            <div className="d-flex flex-row justify-content-end " style={{width:'20%', height:'auto'}}>
            <svg  className="mb-1 "  style={{width:'1.2rem', cursor:'pointer'}} onClick={CloseModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
          fill="#5A5B5C" stroke="#5A5B5C" stroke-width="2" />
          
            </svg>
            </div>

        

        </div>

        <div className="d-flex flex-row align-items-center mb-3" style={{width:'100%'}}>
        <h6 className="me-1 my-0"  style={{color:'#000'}}>Title: </h6>
        <span>{libro.title}</span>

        </div>

        <div className="d-flex flex-row align-items-center mb-3" style={{width:'100%'}}>
        <h6 className="me-1 my-0"  style={{color:'#000'}}>PageCount: </h6>
        <span>{libro.pageCount}</span>

        </div>

        <div className="d-flex flex-row align-items-center mb-3" style={{width:'100%'}}>
        <h6 className="me-1 my-0"  style={{color:'#000'}}>Fecha: </h6>
        <span>{libro.datePublish}</span>

        </div>

        <div className="d-flex flex-column  mb-3" style={{width:'100%'}}>
        <h6 className="me-1 my-0"  style={{color:'#000'}}>Description: </h6>
        <textarea value={libro.description} placeholder="Description" className="custom-input" readOnly />
        
        

        </div>
        <div className="d-flex flex-column  mb-3" style={{width:'100%'}}>
        <h6 className="me-1 my-0"  style={{color:'#000'}}>Excerpt: </h6>
        <textarea value={libro.excerpt} placeholder="Excerpt" className="custom-input" readOnly />
        
        

        </div>

</div>

    
    </>)
}