import React, { useContext, useState } from 'react';
import ItemCount from '../itemCount/ItemCount.jsx';
import { convertirAMoneda } from "../helpers/toCurrency.js";
import { CartContext } from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [compra, setCompra] = useState(false)
    const {addItem, cartQuantity} = useContext(CartContext)

    const onAdd = (cantidad) =>{
        addItem(producto,cantidad)
        setCompra(true)
    }
    console.log(cantidadAgregada)
    console.log(compra)                 //NO SE USA
    console.log(setCantidadAgregada)    //NO SE USA

    return (
        <div>
            <h3 style={{textAlign:'center', margin:'0.7rem'}}>{producto.name}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
                <img className="rounded mx-auto d-block" alt={producto.name} src={producto.imagen}/>
                <p style={{padding: '6px',width: '50%', textAlign: 'justify', border: '2px solid black'}}>{producto.description}</p>
            </div>
            <h3 className="text-center">{convertirAMoneda(producto.price)}</h3>
            <h5 className="text-center" style={{color:'blue'}}>[ Stock Disponible: {producto.stock} ]</h5>
            <ItemCount stock={producto.stock} onAdd={onAdd}/>
            <br></br>
            {(cartQuantity() > 0) && <Link to="/carrito" className="btn bg-info-subtle d-grid col-3 mx-auto">IR AL CARRITO</Link>}
        </div>
    )
}

export default ItemDetail