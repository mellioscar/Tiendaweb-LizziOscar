//DETALLE DE FUNCIONES:
// - addItem: Añade un producto al carrito o incrementa su cantidad si ya está en el carrito.
// - clear: Limpia el carrito.
// - removeItem: Remueve un producto específico del carrito.
// - isInCart: Verifica si un producto está en el carrito.
// - cartQuantity: Calcula la cantidad total de productos en el carrito.
// - cartPriceTotal: Calcula el precio total de todos los productos en el carrito.

import {createContext, useState} from "react";

//CREA EL CONTEXTO
export const CartContext = createContext()

//CREA EL PROVEEDOR DEL CONTEXTO
export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])

//AGREGA CANTIDAD DE UN ITEM AL CARRITO
    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            //SUMA CANTIDADES
            const nuevoCarrito = cart.map((compra)=>{
                if(compra.id === item.id){
                    return {...compra, quantity: compra.quantity + quantity}
                }else{
                    return compra
                }
            })
            setCart(nuevoCarrito)
        }else{
            setCart([...cart,{...item, quantity}])
        }
    }

//LIMPIA CARRITO
    const clear = () =>{
        setCart([])
    }

//REMUEVE UN ITEM DEL CARRITO
    const removeItem = (itemId)=>{
        setCart(cart.filter((compra)=> compra.id !== itemId))
    }

    const isInCart = (itemId)=>{
        return cart.some((compra)=> compra.id === itemId)
    }

//SUMA LA CANTIDAD TOTAL
    const cartQuantity = () =>{
        return cart.reduce((acc, compra)=> acc + compra.quantity, 0)
    }

//SUMA EL TOTAL A PAGAR
    const cartPriceTotal = () =>{
        return cart.reduce((acc, compra)=> acc += (compra.price * compra.quantity), 0)
    }

    return(
        //LE ASIGNAMOS EL CONTEXTO QUE PROVEE
        <CartContext.Provider value={{cart,addItem, clear, removeItem, isInCart, cartQuantity, cartPriceTotal}}>
            {children}
        </CartContext.Provider>
    )
}