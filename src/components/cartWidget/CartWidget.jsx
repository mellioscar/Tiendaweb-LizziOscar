import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.jsx';
import Badge from 'react-bootstrap/Badge';
import { BsCartFill } from 'react-icons/bs';

const CartWidget = ({counter}) => {
    const {cartQuantity}= useContext(CartContext)

    return(
        <Link to="/carrito">
            {cartQuantity() > 0 && <div type="button" className="btn position-relative">
            <BsCartFill color='greenyellow' fontSize={'2.3rem'} title="Carrito"/>               
            <span className="position-absolute top-0 start-100 translate-middle bg-success border border-1 border-light rounded">
                {cartQuantity() > 0 &&  <Badge bg="success">{cartQuantity()}</Badge>}
            </span>
            </div>}
        </Link>
    )
}
export default CartWidget