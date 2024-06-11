import "./colaborador.css"
import { TfiClose  } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const Colaborador = (props)=>{
const {nombre,puesto,foto, equipo, id, fav} = props.datos
const{colorFondo, eliminarColaborador, like} = props

    return <div className="colaborador" >
        <TfiClose onClick={() => eliminarColaborador(id)} className="eliminar" />
       
       <div className="encabezado" style={{background:colorFondo}} >
        <img src={foto} alt={nombre}/>
        
       </div>
       <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {
          fav ? <FaHeart color="red" onClick={()=>like(id)} /> :  <CiHeart onClick={()=>like(id)} />

        }

       </div>
    </div>
}

export default Colaborador