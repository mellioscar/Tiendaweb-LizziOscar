import React from 'react';
import "./loader.css";

export const Loader = () => {
    return (
        <div className="iconoloader">
            <h2>CARGANDO!!!</h2>
            <img src="../images/hormigas.gif" alt="Hormigas" style={{ borderRadius: 250}}/>
        </div>
    )
}