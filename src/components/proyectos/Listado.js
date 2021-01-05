import React, { useContext, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import Proyecto from './Proyecto'

const Listado = () => {
    
    //Extraer Proyectos de StateInicial
    const {proyectos,obtenerProyectos} = useContext( proyectoContext);

    useEffect(()=>{
        obtenerProyectos();
    },[]);

    //Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No Hay Proyectos</p>

    

    return (
        <>
            <ul className="Listado-proyectos">
                {proyectos.map(proyecto=>(
                    <Proyecto 
                        key={proyecto.id}
                        proyecto={proyecto} 
                    />
                ))}
            </ul>  
        </>
    )
}

export default Listado
