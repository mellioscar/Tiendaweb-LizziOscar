import { useForm } from "react-hook-form";
import "./contacto.css";
import React from 'react';

const Contacto = ({greeting}) => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div className="container">
            <h2 className="main-title" style={{color:'green'}}>{greeting}</h2>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input className="bg-info-subtle d-grid col-2 mx-auto" type="text" placeholder="<- Ingresá tu nombre" {...register("nombre")} />
                <input className="bg-info-subtle d-grid col-2 mx-auto" type="email" placeholder="<- Ingresá tu e-mail" {...register("email")} />
                <input className="bg-info-subtle d-grid col-2 mx-auto" type="phone" placeholder="<- Ingresá tu teléfono" {...register("telefono")} />

                <button className="btn bg-info-subtle d-grid col-2 mx-auto" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto