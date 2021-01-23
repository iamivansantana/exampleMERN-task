import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";


const Tarea = ({ tarea }) => {

  //Obtener Context de Tarea
  const {eliminarTarea, obtenerTareas,actualizarTArea,guardarTareaActual} = useContext(tareaContext);

  //Obtener Context de Proyecto
  const {proyecto} = useContext(proyectoContext);

  //Array Destructuring del proyecto actual
  const [proyectoActual]=proyecto;

  //Funcion para eliminar Tarea
  const tareaEliminar = id =>{
    eliminarTarea(id, proyectoActual._id);

    obtenerTareas(proyectoActual.id);

  }

  //funcion que modidifica el estado de las tareas

  const cambiarEstado = (tarea)=>{
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    actualizarTArea(tarea);
  }

  //Agrega una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = (tarea)=>{
    guardarTareaActual(tarea);
    
  }

  return (
    <>
      <li className="tarea sombra">
        <p>{tarea.nombre}</p>
        <div className="estado">
          {tarea.estado ? (
            <button 
              type="button " 
              className="completo"
              onClick={()=>cambiarEstado(tarea)}
            >
              Completo
            </button>
          ) : (
            <button 
              type="button " 
              className="incompleto"
              onClick={()=>cambiarEstado(tarea)}
            >
              Incompleto
            </button>
          )}
        </div>
        <div className="acciones">
          <button 
            type="button" 
            className="btn btn-primario"
            onClick={()=>seleccionarTarea(tarea)}  
          >
            Editar
          </button>
          <button 
            type="button" 
            className="btn btn-secundario"
            onClick={()=>tareaEliminar(tarea._id)}
          >
            Eliminar
          </button>
        </div>
      </li>
    </>
  );
};

export default Tarea;
