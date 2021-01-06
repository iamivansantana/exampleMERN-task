import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {

    //Obtener el context de proyecto
    const {proyectoActual } = useContext(proyectoContext);

    //Obtener el context de tareas
    const {obtenerTareas  } = useContext(tareaContext);

    //Funcion para agregar el proyecto actual

    const seleccionarProyecto = id =>{
        proyectoActual(id); //Fijar un proyecto actual
        obtenerTareas(id);  //Filtrar tareas al ahcer click
    }

    return (
        <>
            <li>
                <button
                    type="button"
                    className="btn btn-blank"
                    onClick={()=>seleccionarProyecto(proyecto.id)}
                >{proyecto.nombre}</button>
            </li>            
        </>
    )
}

export default Proyecto
