import React, { useContext } from 'react';
import CartView from '../cartView/CartView.jsx';
import { CartContext } from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart}= useContext(CartContext)
    return (
        <div>
            {!cart.length 
            ? <div className="text-center" style={{padding: '16px'}}>
                <h2>Tu carrito esta vacio!</h2>
                <br></br>
                <h4>Te invitamos a ver todos nuestros productos 😊</h4>
                <br></br>
                <Link className='btn bg-info-subtle' to='/'>VER PRODUCTOS</Link>
            </div>
            : <CartView/>}
        </div>
    )
}

export default Cart