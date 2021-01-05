import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FromTarea = () => {

  //extraer si un proyecto esta seleccionado del context
  const {proyecto} = useContext(proyectoContext);

  // si un proyecto esta seleccionado
  if(!proyecto) return null;

  //Array Destructuring del proyecto actual
  // const [proyectoActual]=proyecto;


  

  return (
    <>
    
      <div className="formulario">
        <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
        </form>  
      </div>
    </>
  );
};

export default FromTarea;
