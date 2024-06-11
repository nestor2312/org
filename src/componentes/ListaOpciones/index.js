import "./listaOpciones.css";
function ListaOpciones(props) {

  const cambios = (e)=>{
    // console.log('cambio',e.target.value);
    props.actualizarValor(e.target.value);
  }

  return (
    <div className="listaopciones">
      <label>Equipo</label>
      <select  onChange={cambios}>
        <option value="" disabled defaultValue="" hidden>seleccionar equipo</option>
        {props.equipos.map((equipo,index)=>
        <option key={index} value={equipo}>{equipo}</option>
        )}
      </select>
    </div>
  );
}

export default ListaOpciones;
