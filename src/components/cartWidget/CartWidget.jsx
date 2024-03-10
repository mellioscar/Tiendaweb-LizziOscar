import {BsCartFill} from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({counter}) => {

    return(
        <button type="button" class="btn position-relative">
            <BsCartFill color='greenyellow' fontSize={'2.3rem'} title="Añadir al carrito"/>
            <span class="position-absolute top-0 start-100 translate-middle bg-success border border-1 border-light rounded">
                <Badge bg="success">{counter}</Badge>
            </span>
        </button>
    )
}
export default CartWidget