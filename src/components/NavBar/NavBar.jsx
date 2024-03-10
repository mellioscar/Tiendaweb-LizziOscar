import './navbar.css';
import CartWidget from '../cartWidget/CartWidget.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="success" data-bs-theme="light">
            <Container>
                <img alt="Logo" width= "15%" className="d-inline-block align-top rounded" src="./images/logo.png"/>
                <Navbar.Brand as={NavLink} to='/' className="fw-bolder fst-italic"> PETIT Servicios </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to='/Servicios' className="fw-medium">Servicios</Nav.Link>
                    <Nav.Link as={NavLink} to='/Productos' className="fw-medium">Productos</Nav.Link>
                    <Nav.Link as={NavLink} to='/Nosotros' className="fw-medium">Nosotros</Nav.Link>
                    <NavDropdown className="fw-medium" id="nav-dropdown-dark-example" title="Compra OnLine" menuVariant="ligth">
                        <NavDropdown.Item>Categorias de Productos
                            <NavDropdown.Item as={NavLink} to='/categories/trampas'>Trampas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/categories/insectos'>Insectos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/categories/aves'>Aves</NavDropdown.Item>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <Nav.Link as={NavLink} to='/Fumigaciones'>Fumigaciones</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link as={NavLink} to='/Control de Plagas'>Control de Plagas</Nav.Link>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to='/Contacto' className="fw-medium">Contacto</Nav.Link>
                </Nav>
                <Badge pill bg="light"><Nav.Link as={NavLink} to='/Carrito'><CartWidget counter={15}/></Nav.Link></Badge>
            </Container>
        </Navbar>
    );
}

export default NavBar