import Image from 'react-bootstrap/Image';

const Nosotros = () => {

    return (
        <div className="container">
            <h1 className="main-title">Nosotros</h1>
            <p><b>Petit Servicos</b> es una empresa que ha incorporado formas innovadoras para su desenvolvimiento en el mercado de fumigaciones y control de plagas. Nuestro profundo conocimiento del mercado hacen posible proveer a nuestros clientes de un servicio con valor agregado, en este especial campo de preservación de las condiciones sanitarias.
            <br></br>
            <b>Petit Servicos</b> ha crecido durante mas de quince años hasta convertirse en una empresa multifacética de fumigación, control de plagas y ventas de productos de fumigaciones.
            <br></br>
            El entrenamiento constante y la mejora de todos los aspectos que constituyen nuestros servicios son nuestro objetivo principal y el de la empresa en sí misma, para la satisfacción de nuestros clientes y el fortalecimiento de nuestras relaciones comerciales.</p>
            <br></br>
            <Image src='../images/Fumigacion-3.jpg' alt="Petit Servicios" className="mx-auto d-block" roundedCircle/>
        </div>
    )
}

export default Nosotros