import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  //State Para iniciar cesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });
  const { email, password } = usuario;

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

      //Pasarlo al accion
  }

  return (
    <>
      <div className="form-usuario ">
        <div className="contenedor-form sombra-dark">
          <h1>Iniciar Seción</h1>
          <form
            onSubmit={onSubmit}
          >
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
            <div className="campo-for">
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Iniciar Sesión"
              />
            </div>
          </form>
          <Link to={'/nueva-cuenta'} className="enlace-cuenta">
              Obtener Cuenta
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
