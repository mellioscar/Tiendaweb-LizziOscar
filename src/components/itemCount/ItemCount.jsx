import React from 'react'
import {useState} from 'react';

const ItemCount = ({stock}) =>{
    const [count, setCount]= useState(1)

    const onAdd = ()=>{
            console.log('COMPRASTE UN ARTICULO')
    }

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

    return(
        <>
        <div className="d-flex justify-content-center">
            <button className="btn btn-danger rounded-circle" onClick={restar}>-</button>
            <span className="btn bg-success-subtle">{count}</span>
            <button className="btn btn-success rounded-circle" onClick={sumar}>+</button>
        </div>
        <br></br>
        <button className="btn bg-info-subtle d-grid col-2 mx-auto" disabled={stock === 0 || count === 0} onClick={onAdd}>Comprar</button>

        </>
    )
}
export default ItemCount