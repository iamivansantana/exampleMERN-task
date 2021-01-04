import React from 'react'
import Proyecto from './Proyecto'

const Listado = () => {
    
    const proyectos = [
        {nombre: 'Tienda Viertual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño sitio web'}
    ]

    return (
        <>
            <ul className="Listado-proyectos">
                {proyectos.map(proyecto=>(
                    <Proyecto 
                        proyectos={proyecto} 
                    />
                ))}
            </ul>  
        </>
    )
}

export default Listado
