import './Barra.css'
import { Link } from "react-router-dom";
export function Barra(){
    return(
        <>
        
        <div className="d-flex flex-column align-items-center" style={{height:'100%', width:'4%', backgroundColor:'#EAEDF0'}}>

        <img className='Presentacion-img mb-3' style={{width:'6rem'}} src={`${process.env.PUBLIC_URL}/Logo-Fondo.png`} alt=''/>
        
        <Link  style={{textDecoration:'none'}} to="/">  <svg className="mb-3 icon"  style={{width:'1.5rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
          fill="#5A5B5C" stroke="#5A5B5C" stroke-width="2" />
</svg>
</Link>

<Link  style={{textDecoration:'none'}} to="/autores">  <svg className="mb-1 icon"  style={{width:'1.5rem', cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
          fill="#5A5B5C" stroke="#5A5B5C" stroke-width="2" />
</svg>
</Link>
        
        </div>
        
        </>
    )
}