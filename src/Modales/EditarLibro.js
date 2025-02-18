import { useContext, useEffect, useState } from "react"
import { ContextoGlobal } from "../Contexto/Contexto"
import { getLibroById, updateLibro } from "../ApiContext/ApiContext";


export function EditarLibro(){
    const {setModalValue, setModalStates, modalContent} = useContext(ContextoGlobal)
    const CloseModal = () =>{

        setModalStates(false);
        setModalValue(0);
    }

    const [libro, setLibro] = useState({
        id: 0,
  title: "",
  description: "",
  pageCount: 0,
  excerpt: "",
  datePublish: "2025-02-18T04:23:42.123Z"

    });
       
      
        useEffect(() => {
            console.log(modalContent)
          async function fetchAutor() {
            try {
              const data = await getLibroById(modalContent.id); 
              setLibro({
                id: data.id,
                title: data.title,
                description: data.description,
                pageCount: data.pageCount,
                excerpt: data.excerpt,
                datePublish: data.datePublish
              });
            } catch (err) {
             console.log(err)
            } 
          }
      
          fetchAutor();
        }, [modalContent.id]);


        const handleChange = (e) => {
            const { name, value } = e.target;
            setLibro({
              ...libro,
              [name]: value,
            });
          };
        
          const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
              const updatedLibro = await updateLibro(modalContent.id, libro);
              
              alert('Libro actualizado con éxito');
              setModalStates(false);
              setModalValue(0);
            } catch (err) {
             console.log(err)
            }
          };

    return(<>
    
    <div className="d-flex flex-column rounded py-2 px-2" style={{backgroundColor:'#fff', height:'430px', width:'550px'}}>

        <div className=" d-flex flex-row justify-content-center align-items-start" style={{width:'100%', height:'10%'}}>

            <div style={{width:'20%', height:'auto'}}></div>
            <div className="d-flex flex-row justify-content-center" style={{width:'60%', height:'auto'}}><h6 style={{color:'#000'}}>Editar Libro</h6></div>
            <div className="d-flex flex-row justify-content-end " style={{width:'20%', height:'auto'}}>
            <svg  className="mb-1 "  style={{width:'1.2rem', cursor:'pointer'}} onClick={CloseModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
          fill="#5A5B5C" stroke="#5A5B5C" stroke-width="2" />
          
            </svg>
            </div>

        </div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" className="custom-input" value={libro.title} onChange={handleChange} />

<input type="number" name="pageCount" placeholder="PageCount" className="custom-input" value={libro.pageCount} onChange={handleChange} />

<input type="date" name="datePublish" placeholder="Fecha" className="custom-input" value={libro.datePublish} onChange={handleChange} />

<textarea name="description" placeholder="Description" className="custom-input" value={libro.description} onChange={handleChange} />

<textarea name="excerpt" placeholder="Excerpt" className="custom-input" value={libro.excerpt} onChange={handleChange} />
        
        <div className="d-flex flex-row justify-content-end mt-3" style={{width:'100%'}}>
        <button type="submit" className="btn btn-primary ">Editar</button>
        </div>
        </form>

    </div>

    
    </>)
}