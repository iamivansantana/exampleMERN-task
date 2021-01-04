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
    if(proyectos.length === 0) return null;

    

    return (
        <>
            <ul className="Listado-proyectos">
                {proyectos.map(proyecto=>(
                    <Proyecto 
                    key={proyecto.id}
                        proyectos={proyecto} 
                    />
                ))}
            </ul>  
        </>
    )
}

export default Listado
