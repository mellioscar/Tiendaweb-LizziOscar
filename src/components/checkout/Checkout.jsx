import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase.js';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [user, setUser] = useState ({})
    const [orderId, setOrderId] = useState('')
    const [validateEmail, setValidateEmail]=useState('')
    const {cart, cartPriceTotal, clear} = useContext(CartContext)

    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name || !user.email){
            alert('Campos obligatorios!')
        }else if(user.email !== validateEmail){
            alert('Los mails deben ser iguales!')
        }else{
            let order ={
                user,
                items:cart,
                total:cartPriceTotal(),
                date:serverTimestamp()
            }

            const ventas = collection(db, 'orders')

            addDoc(ventas,order)
            .then((res)=> {
                cart.forEach((item)=>{
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
                    })
                })
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
    
    return (
        <div>
            {orderId !== '' 
                ?<div>
                    <h4 style={{color:'blue'}}>Generaste tu orden!</h4>
                    <h5>El id es: {orderId}</h5>
                    <Link className='btn bg-info-subtle d-grid col-3 mx-auto' to ='/'>Volver a Home</Link>
                </div>
                :
                <div>
                    <h2>Complete sus datos:</h2>
                    <form className='d-flex flex-column align-items-center' onSubmit={finalizarCompra}>
                        <input style={{ marginBottom: '10px', width: '300px' }} name="name" type="text" placeholder="<- Ingresá tu Nombre y Apellido" onChange={userData}/>
                        <input style={{ marginBottom: '10px', width: '300px' }} name="email" type="email" placeholder="<- Ingresá tu e-mail" onChange={userData}/>
                        <input style={{ marginBottom: '10px', width: '300px' }} name="second-email" type="email" placeholder="<- repite tu e-mail" onChange={(e)=>setValidateEmail(e.target.value)}/>
                        <input style={{ marginBottom: '10px', width: '300px' }} name="phone" type="phone" placeholder="<- Ingresá tu teléfono" onChange={userData}/>
                        <input style={{ marginBottom: '10px', width: '300px' }} name="direction" type="text" placeholder="<- Ingresá tu dirección" onChange={userData}/>

                        <button className="btn bg-info-subtle d-grid col-2 mx-auto" type="submit">Enviar</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Checkout;