import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';


const Listado = () => {
    
    //Extraer Proyectos de StateInicial
    const {proyectos,obtenerProyectos} = useContext( proyectoContext);

    useEffect(()=>{
        obtenerProyectos();
        //eslint-disable-next-line 
    },[]);

    //Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No Hay Proyectos</p>

    

    return (
        <>
            <ul className="Listado-proyectos">
                <TransitionGroup>
                    {proyectos.map(proyecto=>(
                        <CSSTransition
                            key={proyecto.id}
                            timeout={400}
                            classNames="proyecto"
                        >
                            <Proyecto 
                                proyecto={proyecto} 
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>  
        </>
    )
}

export default Listado
