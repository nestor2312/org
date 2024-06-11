import "./App.css";

// import Header from './componentes/header/header';
import Headerw from "./componentes/Header/Headere";
import {v4 as uuid} from "uuid";
import Formulario from "./componentes/Formulario/Formulario";

import Miorg from "./componentes/MiOrg";

import { useState } from "react";
import Equipo from "./componentes/Equipos";
import Footer from "./componentes/Footer2";

function App() {

  console.log('el id es',uuid());
  const [mostrarFormulario, actualizar] = useState(true);

  const [Colaboradores, actualizarColaborador] = useState([
    {
      id:uuid(),
      equipo:"Programación",
      foto:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnfJiOQz0sN9i1CFs1UN8-ROyyy9d1yku8ZaHC0WU-XaZnKBnj",
      nombre:"dfsf",
      puesto:"fff",
      fav: true
    },
    {
      id:uuid(),
      equipo:"Programación",
      foto:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnfJiOQz0sN9i1CFs1UN8-ROyyy9d1yku8ZaHC0WU-XaZnKBnj",
      nombre:"juan",
      puesto:"fff",
      fav: false
    },
    {
      id:uuid(),
      equipo:"Devops",
      foto:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnfJiOQz0sN9i1CFs1UN8-ROyyy9d1yku8ZaHC0WU-XaZnKBnj",
      nombre:"juan",
      puesto:"fff",
      fav: true
    }
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id:uuid(),
      titulo: "Programación",
      colorDestaque: "#57C278",
      fondo: "#D9F7E9",
    },
    {
      id:uuid(),
      titulo: "Front End",
      colorDestaque: "#82CFFA",
      fondo: "#E8F8FF",
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorDestaque: "#A6D157",
      fondo: "#F0F8E2",
    },
    {
      id:uuid(),
      titulo: "Devops",
      colorDestaque: "#E06B69",
      fondo: "#FDE7E8",
    },
    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorDestaque: "#DB6EBF",
      fondo: "#FAE9F5",
    },
    {
      id:uuid(),
      titulo: "Móvil",
      colorDestaque: "#FFBA05",
      fondo: "#FFF5D9",
    },
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorDestaque: "#FF8A29",
      fondo: "#FFEEDF",
    },
  ]);
  const cambiarEstado = () => {
    actualizar(!mostrarFormulario);
  };

  const crearequipo = (nuevoequipo) => {
console.log(nuevoequipo);
actualizarEquipos([...equipos, {...nuevoequipo, id:uuid() }])
  }

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);
    actualizarColaborador([...Colaboradores, colaborador]);
  };

  const eliminar = (id) => {
    console.log("eliminar",id );
const colaboradoresnuevos = Colaboradores.filter((colaborador)=> colaborador.id !== id)
// console.log(colaboradoresnuevos);  
actualizarColaborador(colaboradoresnuevos);  

};

  const color = (color, id)=>{
    console.log("actualizar color", color, id);
    const actualizarColor = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorDestaque = color
      }
return equipo
    })
    actualizarEquipos(actualizarColor)
  }

  const like =(id)=>{
    console.log("like", id);
    const colaboradorlike = Colaboradores.map((colaborador)=>{
      if (colaborador.id === id) {
       colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaborador(colaboradorlike)
  }

  // lista equipos
 

  return (
    <div>
      <Headerw></Headerw>
      {mostrarFormulario ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearequipo={crearequipo}
        />
      ) : (
        <div></div>
      )}

      <Miorg cambiarEstado={cambiarEstado}></Miorg>
      {/* <Equipo Equipo="programacion"></Equipo> */}
      {/* <Equipo Equipo="front end"></Equipo> */}
      {equipos.map((equipo) => {
        // console.log(equipo)
        return (
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={Colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaborador={eliminar}
            actualizarColor={color}
            like={like}
          ></Equipo>
        );
      })}
      <Footer></Footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hola mundo</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
