import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import authContext from '../../context/autenticacion/authContext';


const RutaPrivada = ({component: Component, ...props}) => {

    //Context de auth
    const {autenticado, usuarioAutenticado, cargando} = useContext(authContext);

    useEffect(() => {
        usuarioAutenticado(); 
        //eslint-disable-next-line 
    }, [])

    return (
        // <Route {...props} render={props=> !autenticado  ? (
        <Route {...props} render={props=> !autenticado && !cargando ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        ) }
        />
    )
}

export default RutaPrivada;
