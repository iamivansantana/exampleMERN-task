import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Tarea from "./Tarea";

const ListadoTarea = () => {

  //obtener el State
  const {proyecto,eliminaProyectoActual} = useContext(proyectoContext);

  
  //Si no hay proyecto seleccionado
  
  if(!proyecto) return <h2>Selecciona Un Proyecto</h2>;
  
  //arrayDestructuring
    const [proyectoActual]=proyecto;

    


  
  

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataforma de Pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No Hay Tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button 
        type="button" 
        className="btn btn-eliminar"
        onClick={()=>eliminaProyectoActual(proyectoActual.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTarea;
