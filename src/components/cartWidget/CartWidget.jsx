import './cartWidget.css'

const CartWidget = () => {
    return(
        <div className='container'>
        <img className='cart' src='./images/CartOutline.png' alt='carrito'/>
        <span className='badge'> 6 </span>
        </div>
    )
}

export default CartWidget