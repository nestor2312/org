import "./Formulario.css";
import ListaOpciones from "../ListaOpciones";
import Campo from "../campoTexto/campoTexto";
import Boton from "../Boton";
import { useState } from "react";
const Formulario = (props) => {
  const [nombre, actualizarnombre] = useState("");
  const [puesto,actualizarpuesto] = useState("")
  const [foto,actualizarfoto] = useState("")
  const [equipo,actualizarequipo] = useState("")

  const [titulo,actualizartitulo] = useState("")
  const [color,actualizarcolor] = useState("")

  const envio = (e) => {
    console.log("envio . .", e);
    e.preventDefault();
    let datos ={
      nombre:nombre,
      foto:foto,
      puesto:puesto,
      equipo
    }
    props.registrarColaborador(datos)
    console.table('datos', datos)
  };

  const manejarnuevoequipo = (e) => {
    e.preventDefault();
    props.crearequipo({titulo, colorDestaque:color});
   
    // let datos ={
    //   nombre:nombre,
    //   foto:foto,
    //   puesto:puesto,
    //   equipo
    // }
    // props.registrarColaborador(datos)
  };


  return (
    <section className="formulario">
      <form onSubmit={envio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="nombre"
          placeholder="ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarnombre}
        ></Campo>
        <Campo
          titulo="puesto"
          placeholder="ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarpuesto}
        ></Campo>
        <Campo
          titulo="foto"
          placeholder="ingresar foto"
          required
          valor={foto}
          actualizarValor={actualizarfoto}
        ></Campo>
        <ListaOpciones
          valor={equipo}
          actualizarValor={actualizarequipo}
          equipos={props.equipos}>
           
          </ListaOpciones>
        <Boton text="Crear"></Boton>
      </form>
      <form onSubmit={manejarnuevoequipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="titulo"
          placeholder="ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizartitulo}
        ></Campo>
        <Campo className="campo-color"
          titulo="Color"
          placeholder="ingresar el color"
          required
          valor={color}
          actualizarValor={actualizarcolor}
          type="color"
        ></Campo>
          <Boton text="Registrar equipo"></Boton>
        </form>
    </section>
  );
};

export default Formulario;
