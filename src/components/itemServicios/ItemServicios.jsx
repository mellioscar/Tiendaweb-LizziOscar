import React from 'react';

function ImageServicios({greeting}) {

    return (
        <div>
            <h1>{greeting}</h1>
            <div style={{display:'flex', justifyContent:"space-around", alignItems:'center', flexWrap:'wrap'}}>
                <img src='../images/DescripLimpieza.jpg' alt="Limpieza" style={{borderRadius: "15px"}}/>
                <img src='../images/DescripDesinfeccion.jpg' alt="Desinfección" style={{borderRadius: "15px"}}/>
            </div>
        </div>
    );
}

export default ImageServicios;