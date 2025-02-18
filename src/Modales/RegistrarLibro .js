import { useContext, useState } from "react"
import { ContextoGlobal } from "../Contexto/Contexto"
import "./RegistrarLibro.css";
import { postLibro } from "../ApiContext/ApiContext";

export function RegistrarLibro(){
    const {setModalValue, setModalStates} = useContext(ContextoGlobal)
    const CloseModal = () =>{

        setModalStates(false);
        setModalValue(0);
    }

    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [pageCount, setPageCount] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [datePublish, setDatePublish] = useState('')

    const Registrar = async (e) => {
        e.preventDefault(); 
    
        const libro = {
            id,
          title,
          description,
          pageCount,
          excerpt,
          datePublish

        };
    
        const result = await postLibro(libro); 
        if (result) {
          alert('Libro registrado con éxito');
         
        setModalStates(false);
        setModalValue(0);
        } else {
          alert('Error al registrar el libro');
        }

      };
    


    return(<>
    
    <div className="d-flex flex-column rounded py-2 px-2" style={{backgroundColor:'#fff', height:'430px', width:'550px'}}>

        <div className=" d-flex flex-row justify-content-center align-items-start" style={{width:'100%', height:'10%'}}>

            <div style={{width:'20%', height:'auto'}}></div>
            <div className="d-flex flex-row justify-content-center" style={{width:'60%', height:'auto'}}><h6 style={{color:'#000'}}>Registrar Libro</h6></div>
            <div className="d-flex flex-row justify-content-end " style={{width:'20%', height:'auto'}}>
            <svg  className="mb-1 "  style={{width:'1.2rem', cursor:'pointer'}} onClick={CloseModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
          fill="#5A5B5C" stroke="#5A5B5C" stroke-width="2" />
          
            </svg>
            </div>

        </div>
        <input type="text" placeholder="Títle" className="custom-input" onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder="PageCount" className="custom-input" onChange={(e) => setPageCount(e.target.value)} />
        <input type="date" placeholder="Fecha" className="custom-input" onChange={(e) => setDatePublish(e.target.value)} />
        <textarea placeholder="Description" className="custom-input" onChange={(e) => setDescription(e.target.value)} />
        <textarea placeholder="Excerpt" className="custom-input" onChange={(e) => setExcerpt(e.target.value)} />
        
        <div className="d-flex flex-row justify-content-end mt-3" style={{width:'100%'}}>
        <button onClick={Registrar} className="btn btn-primary ">Registrar</button>
        </div>
        

    </div>

    
    </>)
}