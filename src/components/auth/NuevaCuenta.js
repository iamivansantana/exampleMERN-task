import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import alertaContext from '../../context/alertas/alertaContext';
import authContext from "../../context/autenticacion/authContext";

const NuevaCuenta = (props) => {

  
  //Extraer los valores del context 
  const {alerta,mostrarAlerta} = useContext(alertaContext);
  
  //context de auth
  const {registrarUsuario,mensaje, autenticado} = useContext(authContext);

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
      if (nombre.trim()==='' || 
          email.trim()==='' ||  
          password.trim()==='' || 
          confirmar.trim()==='') {

            mostrarAlerta('Todos los campos son Obligatorios','alerta-error');
            return;
      }

      //password minimo 6 caracteres
      if (password.length < 6) {
        mostrarAlerta('El password debe ser de almenos 6 caracteres','alerta-error');
        return;
      }

      //Los 2 passwords sean iguales
      if (password !== confirmar) {
        mostrarAlerta('Los passwords no coinciden','alerta-error');
        return; 
      }

      //Pasarlo al accion
      registrarUsuario({
        nombre,
        email,
        password
      });
  }

  return (
    <>
      <div className="form-usuario">
        {alerta 
        ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> ) 
        :null}
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
