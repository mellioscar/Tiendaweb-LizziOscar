import { useForm } from "react-hook-form";
import "./contacto.css";
import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contacto = ({greeting}) => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div className="container">
            <h2 className="main-title" style={{color:'green'}}>{greeting}</h2>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <Row>
                    <Col>
                        <input className="bg-info-subtle d-grid col-2 mx-auto p-1 m-3" type="text" placeholder="<- Ingresá tu nombre" {...register("nombre")}/>
                        <input className="bg-info-subtle d-grid col-2 mx-auto p-1 m-3" type="email" placeholder="<- Ingresá tu e-mail" {...register("email")}/>
                        <input className="bg-info-subtle d-grid col-2 mx-auto p-1 m-3" type="phone" placeholder="<- Ingresá tu teléfono" {...register("telefono")}/>
                        <input className="bg-info-subtle d-grid col-2 mx-auto p-1 m-3" style={{ height:'130px'}} type="text" placeholder="<- Ingresá tu consulta" {...register("nombre")}/>
                    </Col>
                    <Col>
                        <Image src='../images/trabajos-1.jpg' alt="Petit Servicios" className="d-grid col-7 mx-auto d-block" thumbnail/>
                    </Col>
                </Row>
                <button className="btn bg-info-subtle d-grid col-2 mx-auto" type="submit">Enviar</button>
            </form>
            
        </div>
    )
}

export default Contacto;