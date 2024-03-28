import React from 'react';
import { Link } from "react-router-dom";
import { convertirAMoneda } from "../helpers/toCurrency";

const Item = ({producto}) => {
    return(
        <div className="card" style={{justifyContent:'space-around', alignItems:'center', width: '18rem', padding:'5px', margin:'10px'}} >
            <img src={producto.imagen}  className="card-img-top" alt={producto.name} height="250px"/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <h4>{convertirAMoneda(producto.price)}</h4>
                <Link to={`/item/${producto.id}`} className="btn bg-info-subtle">Ver más</Link>
            </div>
        </div>
    )
}

export default Item