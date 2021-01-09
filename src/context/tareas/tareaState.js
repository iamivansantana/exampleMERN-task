import React, { useReducer } from 'react'
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import uuid from 'uuid'; 
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA,
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
          tareaSeleccionada: null,
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
        tarea.id = uuid.v4();
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

    //Eliminar Tarea Seleeccionada por id
    const eliminarTarea = (id)=>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })

    }

    //Cambia el estado de cada tarea 
    const cambiaEstadoTarea = (tarea)=>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Extrae una tarea para edicion
    const guardarTareaActual = (tarea)=>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea 
        })
    }

    //edita o Modifica una tarea

    const actualizarTArea = (tarea)=>{
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
        
    }

    //Elimina la tarea seleccionada
    const limpiarTarea = ()=>{
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
    
    
    return (

    <TareaContext.Provider
        value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiaEstadoTarea,
        guardarTareaActual,
        actualizarTArea,
        limpiarTarea,

        }}
    >
        {props.children}
    </TareaContext.Provider>
        
    )
}

export default TareaState;
