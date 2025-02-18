import { useContext, useEffect, useState } from "react"
import { ContextoGlobal } from "../Contexto/Contexto"
import { getAutorById, updateAutor } from "../ApiContext/ApiContext";


export function EditarAutor(){
    const {setModalValue, setModalStates, modalContent} = useContext(ContextoGlobal)
    const CloseModal = () =>{

        setModalStates(false);
        setModalValue(0);

    }

const [autor, setAutor] = useState({
        id: 0,
        idBook: 0,
        firstName: "",
        lastName: 0,



    });
       
      
        useEffect(() => {
            console.log(modalContent)
          async function fetchAutor() {
            try {
              const data = await getAutorById(modalContent.id); 
              setAutor({
                id: data.id,
        idBook: data.idBook,
        firstName: data.firstName,
        lastName: data.lastName,
              });
            } catch (err) {
             console.log(err)
            } 
          }
      
          fetchAutor();
        }, [modalContent.id]);


        const handleChange = (e) => {
            const { name, value } = e.target;
            setAutor({
              ...autor,
              [name]: value,
            });
          };
        
          const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
              const updateAutors = await updateAutor(modalContent.id, autor);
              
              alert('Autor actualizado con éxito');
              setModalStates(false);
              setModalValue(0);
            } catch (err) {
             console.log("ErrorUltimo " + err)
            }
          };

    return(<>
    
    <div className="d-flex flex-column rounded py-2 px-2" style={{backgroundColor:'#fff', height:'430px', width:'550px'}}>

        <div className=" d-flex flex-row justify-content-center align-items-start" style={{width:'100%', height:'10%'}}>

            <div style={{width:'20%', height:'auto'}}></div>
            <div className="d-flex flex-row justify-content-center" style={{width:'60%', height:'auto'}}><h6 style={{color:'#000'}}>Editar Autor</h6></div>
            <div className="d-flex flex-row justify-content-end " style={{width:'20%', height:'auto'}}>
            <svg  className="mb-1 "  style={{width:'1.2rem', cursor:'pointer'}} onClick={CloseModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
          fill="#5A5B5C" stroke="#5A5B5C" stroke-width="2" />
          
            </svg>
            </div>

        </div>
        <form onSubmit={handleSubmit}>
        <input name="firstName" type="text" placeholder="First Name" className="custom-input" value={autor.firstName} onChange={handleChange} />
        <input name="lastName" type="text" placeholder="Last Name" className="custom-input" value={autor.lastName} onChange={handleChange} />
        
        <div className="d-flex flex-row justify-content-end mt-3" style={{width:'100%'}}>
        <button type="submit"  className="btn btn-primary ">Editar</button>
        </div>
        </form>

    </div>

    
    </>)
}