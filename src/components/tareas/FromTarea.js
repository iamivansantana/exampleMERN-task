import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FromTarea = () => {

  //Context de Proyecto
  const {proyecto} = useContext(proyectoContext);
  
  //Context de Tarea
  const {agregarTarea,validarTarea,errorTarea,obtenerTareas} = useContext(tareaContext);

  //State del Formulario
  const [tarea, setTarea] = useState({
    nombre:''
  });

  const {nombre}=tarea;
  

  // si un proyecto esta seleccionado
  if(!proyecto) return null;

  //Array Destructuring del proyecto actual
  const [proyectoActual]=proyecto;

  
  //Leer los valores del formulario
  const handleChange = (e)=>{
    setTarea({
       ...tarea,
       [e.target.name]:e.target.value
    })
  }
  
  //Agregar Tarea onSubmit del formulario
  const onSubmit = (e)=>{
    e.preventDefault();

    //validar
    if(nombre.trim() === ''){
      validarTarea();
      return;
    }

    //pasar la validacion

    //agregar nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    //obtener y filtrar tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    //reiniciar el form
    setTarea({
      nombre:''
    })

  }
  

  return (
    <>
    <h1>ioss</h1>
      <div className="formulario">
        <form
          onSubmit={onSubmit}
        >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="AgregarTarea"
          />
        </div>
        </form>  
        {errorTarea? <p className="mensaje error">El nombre de la tarea es Obligatorio</p> :null}
      </div>
    </>
  );
};

export default FromTarea;
