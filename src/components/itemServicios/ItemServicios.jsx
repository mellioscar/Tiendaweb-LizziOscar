import React from 'react';

function ImageServicios({greeting}) {
    const imageUrl = '../images/DescripLimpieza.jpg'
    const imageUrl2 = '../images/DescripDesinfeccion.jpg'

    return (
        <div>
            <h1>{greeting}</h1>
            <div style={{display:'flex', justifyContent:"space-around", alignItems:'center', flexWrap:'wrap'}}>
                <img src={imageUrl} alt="Limpieza" style={{borderRadius: "15px"}}/>
                <img src={imageUrl2} alt="Desinfección" style={{borderRadius: "15px"}}/>
            </div>
        </div>
    );
}

export default ImageServicios;