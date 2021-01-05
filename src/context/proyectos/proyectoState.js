import React, { useReducer } from "react";
import uuid from 'uuid';
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINA_ACTUAL
} from "../../types";




const ProyectoState = (props) => {

  const proyectos = [
    {id:1, nombre: 'Tienda Viertual'},
    {id:2, nombre: 'Intranett'},
    {id:3, nombre: 'Diseño sitio web'},
    {id:4, nombre: 'MERN'}
  ]


  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null
  };

  //Dispatch para ejecutar las acciones

  const [state,dispatch] = useReducer(proyectoReducer,initialState );

  //Serie de funciones para el CRUD
  const mostrarFormulario = ()=>{
       dispatch({
           type: FORMULARIO_PROYECTO
       })
  }

  //obtenerProyectos
  const obtenerProyectos = () =>{
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }

  //Agregar nuevo Proyecto
  const agregarProyecto = proyecto =>{

    proyecto.id = uuid.v4();

    //Agregar el Proyecto en el State

    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    });
  }

  //Validar Formulario por errores
  const mostrarError = ()=> {
    dispatch({
      type: VALIDAR_FORMULARIO,
      
    })
  }

  //Seleccionar el Proyecto 
  const proyectoActual = proyectoId =>{
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    })
  }

  //ELIMINA Proyecto Actual
  const eliminaProyectoActual = proyectoId =>{
    dispatch({
      type: ELIMINA_ACTUAL,
      payload: proyectoId
    })
  }


  return (
      <proyectoContext.Provider
        value={{
            proyectos: state.proyectos,
            formulario: state.formulario,
            errorFormulario: state.errorFormulario,
            proyecto: state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminaProyectoActual
        }}
      >
          {props.children }
      </proyectoContext.Provider>
  )
};

export default ProyectoState;
