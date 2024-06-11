import "./campoTexto.css";
import { useState } from "react";

function Campo(props) {
  // const [setvalor] = useState("");
  // console.log(props);
const {type="text"}= props
  const cambios = (e)=>{
    // console.log('cambio',e.target.value);
    props.actualizarValor(e.target.value)
  }
  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
       type= {type}
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={cambios}
      />
    </div>
  );
}

export default Campo;
