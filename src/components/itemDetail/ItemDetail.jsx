import React from 'react';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({producto}) => {
    return (
        <div>
            <h3>Detalle de: {producto.name} </h3>
            <img class="rounded mx-auto d-block" alt={producto.name} src={producto.imagen}/>
            <p>{producto.description}</p>
            <h3 class="text-center">${producto.price},00</h3>
            <ItemCount stock={producto.stock}/>
        </div>
    )
}

export default ItemDetail