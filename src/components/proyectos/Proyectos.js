import React, { useContext, useEffect } from "react";
import Barra from "../layout/Barra";
import Sidebar from "../layout/Sidebar";
import FromTarea from "../tareas/FromTarea";
import ListadoTarea from "../tareas/ListadoTarea";
import authContext from '../../context/autenticacion/authContext';

const Proyectos = () => {

  const {usuarioAutenticado} = useContext(authContext);

  useEffect(() => {
    usuarioAutenticado();
    //eslint-disable-next-line
  }, [])

  

  return (
    <>
      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
          <Barra />
          <main>
            <FromTarea />
            <div className="contenedor-tareas">
              <ListadoTarea />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
