import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <span>© 2024 Petit Servicios</span>
                <span> | </span>
                <a href="https://www.ejemplo.com" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
                <span> | </span>
                <a href="https://www.ejemplo.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
            </div>
        </footer> //AGREGAR EFECTO MOVIMIENTO DE INSECTOS
    );
}

export default Footer;