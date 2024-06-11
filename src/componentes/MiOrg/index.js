import "./Miorg.css"
import { useState } from "react";

const Miorg = (props)=>{
    console.log(props);
    const [mostrar,actualizar] = useState(true);
    // const click=()=>{
    
    //     console.log('mostrar ocultar',mostrar);
    // actualizar(!mostrar)
    // }

    return <section className="ogrsection">
        <h3 className="titulo">Mi organización</h3>
        <img src="/img/Boton-add.png" alt="org" onClick={props.cambiarEstado}/>

    </section>
}
export default Miorg