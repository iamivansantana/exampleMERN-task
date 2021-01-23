import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import clienteAxios from "../../config/axios";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINA_ACTUAL,
  PROYECTO_ERROR
} from "../../types";




const ProyectoState = (props) => {


  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null,
    mensaje: null
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
  const obtenerProyectos = async () =>{
    try {

      const respuesta = await clienteAxios.get('api/proyectos'); 

      dispatch({
        type: OBTENER_PROYECTOS,
        payload: respuesta.data.proyectos
      })
    } catch (error) {
      const alerta ={
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }

      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      })
    }
  }

  //Agregar nuevo Proyecto
  const agregarProyecto = async proyecto =>{

    try {
        const resultado = await clienteAxios.post('/api/proyectos',proyecto);
        console.log(resultado);
        
        //Agregar el Proyecto en el State
        dispatch({
          type: AGREGAR_PROYECTO,
          payload: resultado.data
        }); 
    } catch (error) {
      const alerta ={
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }

      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      })
    }
    
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
  const eliminaProyectoActual = async proyectoId =>{
    try {
      
      await clienteAxios.delete(`/api/proyectos/${proyectoId}`);

      dispatch({
        type: ELIMINA_ACTUAL,
        payload: proyectoId
      })

    } catch (error) {
      const alerta ={
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      }

      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta
      })
    }
  }


  return (
      <proyectoContext.Provider
        value={{
            proyectos: state.proyectos,
            formulario: state.formulario,
            errorFormulario: state.errorFormulario,
            proyecto: state.proyecto,
            mensaje: state.mensaje,
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
