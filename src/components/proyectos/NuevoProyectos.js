import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyectos = () => {
  //Obtener el state del Formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;

  //State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //Desestrucutacion de nombre en proyecto
  const { nombre } = proyecto;

  //lee los contenidos del imput
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Caundo el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar Proyecto

    //Agregar al state

    //Reiniciar el Form
  }

  return (
    <>
      <button 
        type="button" 
        className="btn btn-block btn-primario"
        onClick={()=>mostrarFormulario()}
      >Nuevo Proyecto
      </button>
      {formulario ?
          (
            <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
              <input
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
              />
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
              />
            </form>
          ) : null 
      } 
    </>
  );
};

export default NuevoProyectos;
