import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';
import alertaContext from '../../context/alertas/alertaContext';

const Listado = () => {
    
    //Extraer Proyectos de StateInicial
    const {mensaje, proyectos,obtenerProyectos} = useContext( proyectoContext);

    //Context de alerta
    const { alerta, mostrarAlerta} = useContext(alertaContext);

    //obtener proyectos cuando carga el componente
    useEffect(()=>{
        //Si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerProyectos();
        //eslint-disable-next-line 
    },[mensaje]);

    //Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No Hay Proyectos</p>

    

    return (
        <>
            <ul className="Listado-proyectos">
                {alerta? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
                <TransitionGroup>
                    {proyectos.map(proyecto=>(
                        <CSSTransition
                            key={proyecto._id}
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
