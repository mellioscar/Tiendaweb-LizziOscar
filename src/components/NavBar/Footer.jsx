import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
                <span>© 2024 Petit Servicios</span>
                <span> | </span>
                <Link to="/" >Términos y Condiciones</Link>
                <span> | </span>
                <Link to="/" >Política de Privacidad</Link>
        </footer>
    );
}

export default Footer;