import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { convertirAMoneda } from "../helpers/toCurrency.js";
import { Link } from 'react-router-dom';

const CartView = ({counter}) => {
    const {cart, removeItem, cartPriceTotal, clear}= useContext(CartContext)
    
    return (
    <div>
        <h1>Carrito de Compra:</h1>
        <div>
            {cart.map((compra)=>{
                return(
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-around', alignItems:'center', margin:'0.7rem', border: '2px solid black'}}>
                        <img src={compra.imagen} alt={compra.name} height="150px"/> 
                        <span>{compra.name}</span>
                        <span>{compra.quantity}</span>
                        <span>{convertirAMoneda(compra.price)}</span>
                        <span>Precio final: {convertirAMoneda(compra.price * compra.quantity)}</span>
                        <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
                    </div>
                )
            })}
        </div>
        <h3 style={{margin: '10px'}}>TOTAL A PAGAR:{convertirAMoneda(cartPriceTotal())}</h3>
        <button className='btn btn-danger' style={{margin: '10px'}} onClick={clear}>Vaciar carrito</button>
        <br></br>
        <Link to={"/Checkout"} className="btn btn-success" style={{margin: '10px'}}>Ir a Pagar</Link>
    </div>
    )
}

export default CartView;