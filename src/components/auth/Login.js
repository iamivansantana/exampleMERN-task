import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import alertaContext from '../../context/alertas/alertaContext';
import authContext from "../../context/autenticacion/authContext";


const Login = (props) => {

  //Extraer los valores del context 
  const {alerta,mostrarAlerta} = useContext(alertaContext);
  
  //context de auth
  const {iniciarSesion,mensaje, autenticado} = useContext(authContext);

  //En caso que password o sea incorrecto o usuario no exista
  useEffect(() => {
    if (autenticado) {
      props.history.push('/proyectos'); 
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg,mensaje.categoria);
    }

    //eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);


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
      if (email.trim()===''|| password.trim()==='') {
        mostrarAlerta('Todos los campos son oblogatorios','alerta-error');
      }

      //Pasarlo al accion
      iniciarSesion({email,password});
  }

  return (
    <>
      <div className="form-usuario ">
        {alerta 
          ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> ) 
          :null}
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
