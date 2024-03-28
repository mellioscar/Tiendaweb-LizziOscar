import React from 'react'
import {useState} from 'react';

const ItemCount = ({stock, onAdd}) =>{
    const [count, setCount]= useState(0)

    const sumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

    const enviarCantidad = () =>{
        onAdd(count)
    }

    return(
        <div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger rounded" onClick={restar}>-</button>
                <span className="btn bg-success-subtle rounded">{count}</span>
                <button className="btn btn-success rounded" onClick={sumar}>+</button>
            </div>
            <br></br>
            <button className="btn bg-info-subtle d-grid col-2 mx-auto" disabled={stock === 0 || count === 0} onClick={enviarCantidad}>Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount