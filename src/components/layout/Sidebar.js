import React from 'react';
import NuevoProyectos from '../proyectos/NuevoProyectos';
import Listado from '../proyectos/Listado';

const Sidebar = () => {
    return (
        <>
            <aside>
                <h1>MERN<span>Task</span></h1>
                <NuevoProyectos /> 
                <div className="proyectos">
                    <h2>Tus Proyectos</h2>
                    <Listado />
                </div>
            </aside>  
        </>
    )
}

export default Sidebar
