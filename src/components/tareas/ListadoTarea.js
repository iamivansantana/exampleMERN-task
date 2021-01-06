import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import Tarea from "./Tarea";

const ListadoTarea = () => {

  //obtener el State de proyecto
  const {proyecto,eliminaProyectoActual} = useContext(proyectoContext);
 
  //obtener el State de tarea
  const {tareasProyecto} = useContext(tareaContext);

  
  //Si no hay proyecto seleccionado
  
  if(!proyecto) return <h2>Selecciona Un Proyecto</h2>;
  
  //arrayDestructuring
    const [proyectoActual]=proyecto;

    

  

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No Hay Tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => (
          <Tarea 
            key={tarea.id}
            tarea={tarea} 
          />
          ))
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
