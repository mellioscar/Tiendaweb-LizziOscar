import React from 'react'
//import hook
import {useState} from 'react'


export const ItemListContainer = (props) => {
    console.log('soy ItemListContainer')

    const [numero, setNumero]=useState(0)

    const sumar = () =>{
        setNumero (numero + 1)
}

    return(
        <div>
            <h1>{props.greeting}</h1>
            <h2>{props.saludo}</h2>

            <p>{numero}</p>
            <button className='btn btn-primary' onClick={sumar}>
                {'BOTON'}
            </button>
        </div>
    )
}