import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return(
            <div className="card" style={{width: '18rem'}} >
                <img src={producto.imagen}  className="card-img-top" alt={producto.name} />
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <h4>$ {producto.price}</h4>
                    <Link to={`/item/${producto.id}`} className="btn bg-info-subtle">Ver más</Link>
                </div>
            </div>
        )
}

export default Item