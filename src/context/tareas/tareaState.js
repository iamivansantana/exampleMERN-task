import React, { useReducer } from 'react'
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
} from '../../types';


const TareaState = (props) => {

    //Estado Inicial
    const initialState={
        tareas:[
            { id: 1, nombre: "Elegir Plataforma", estado: true,proyectoId:1},
            { id: 2, nombre: "Elegir Colores", estado: false,proyectoId:2},
            { id: 3, nombre: "Elegir Plataforma de Pago", estado: false,proyectoId:3},
            { id: 4, nombre: "Elegir Hosting", estado: true,proyectoId:4},
            { id: 5, nombre: "Elegir Plataforma", estado: true,proyectoId:4},
            { id: 6, nombre: "Elegir Colores", estado: false,proyectoId:3},
            { id: 7, nombre: "Elegir Plataforma de Pago", estado: false,proyectoId:2},
            { id: 8, nombre: "Elegir Hosting", estado: true,proyectoId:1},
          ], 
          tareasProyecto: null,
          errorTarea: false,
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(tareaReducer , initialState);

    //Crear Las Funciones
     
    //Crear Las Tareas De un Proyecto

    const obtenerTareas = proyectoId =>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar tarea al proyecto seleccionado
    const agregarTarea = tarea =>{
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Valida y muestra un error de ser necesario 
    const validarTarea =()=>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar Tarea Seleeccionada
    const eliminarTarea = (id)=>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })

    }
    
    
    return (

    <TareaContext.Provider
        value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea

        }}
    >
        {props.children}
    </TareaContext.Provider>
        
    )
}

export default TareaState;
