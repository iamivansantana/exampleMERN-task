import React from "react";
import Barra from "../layout/Barra";
import Sidebar from "../layout/Sidebar";
import FromTarea from "../tareas/FromTarea";
import ListadoTarea from "../tareas/ListadoTarea";

const Proyectos = () => {
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
