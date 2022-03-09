import React from 'react';
import logo from '../assets/img/logo-DH.png';
const Encabezado = () => {
    return (
        <header className="encabezado">
            <nav id="logo">
            <a href="/"><img src={logo} alt="Logo Digital House"/></a>
            </nav>
            <nav id="opciones">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Encabezado;
