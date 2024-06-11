import Colaborador from "../Colaborador"
import "./equipos.css"
import hexToRgba from "hex-to-rgba"


const Equipo = (props)=>{
    const {titulo,fondo,colorDestaque, id} = props.datos
    const { eliminarColaborador, actualizarColor, like}=props
const color ={
    backgroundColor:hexToRgba(colorDestaque,0.6)
    
}



    // cost

    return <div>


     {props.colaboradores.length > 0 && 
     <section className="equipo" style={color}>
        <input type="color" className="input-boton" value={colorDestaque} onChange={(event)=> {
            actualizarColor(event.target.value, id);
        }}/>
        <h3 style={{borderColor:colorDestaque}}>{titulo}</h3>
        <div className="colaboradores">
        
        {props.colaboradores.map((colaborador,index)=><Colaborador colorFondo={colorDestaque} eliminarColaborador={eliminarColaborador} datos={colaborador} like={like} key={index}></Colaborador>)}
              
        </div>
    </section>
    }
    </div>
}


export default Equipo
