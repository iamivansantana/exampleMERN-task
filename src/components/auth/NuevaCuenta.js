import React, { useState } from "react";
import { Link } from "react-router-dom";


const NuevaCuenta = () => {
  //State Para iniciar cesion
  const [usuario, guardarUsuario] = useState({
    nombre:"",
    email: "",
    password: "",
    confirmar:""
  });
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  //cuando el usuario quiere iniciar sesion
  const onSubmit = e =>{
      e.preventDefault();

      //Vaclidar que no haya campos vacíos

      //password minimo 6 caracteres

      //Los 2 passwords sean iguales

      //Pasarlo al accion
  }

  return (
    <>
      <div className="form-usuario ">
        <div className="contenedor-form sombra-dark">
          <h1>Obtener una Cuenta</h1>
          <form
            onSubmit={onSubmit}
          >
            <div className="campo-form">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu Nombre"
                value={nombre}
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Tu Email"
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Tu Password"
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="confirmar">Confirmar Password</label>
              <input
                type="password"
                id="confirmar"
                name="confirmar"
                value={confirmar}
                placeholder="Confirma tu Password"
                onChange={onChange}
              />
            </div>
            <div className="campo-for">
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Registrarme"
              />
            </div>
          </form>
          <Link to={'/'} className="enlace-cuenta">
              Volver a Inicia Sesión
          </Link>
        </div>
      </div>
    </>
  );
};

export default NuevaCuenta;
