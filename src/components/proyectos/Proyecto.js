import React from 'react'

const Proyecto = ({proyectos}) => {
    return (
        <>
            <li>
                <button
                    type="button"
                    className="btn btn-blank"
                >{proyectos.nombre}</button>
            </li>            
        </>
    )
}

export default Proyecto
