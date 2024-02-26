import './navbar.css'
import CartWidget from '../cartWidget/CartWidget.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Badge} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="success" data-bs-theme="light">
            <Container>
                <img alt="Logo" width= "15%" className="d-inline-block align-top rounded" src="./images/logo.png"/>
                <Navbar.Brand href="#home" className="fw-bolder fst-italic"> PETIT Servicios </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#Servicios" className="fw-medium">Servicios</Nav.Link>
                    <Nav.Link href="#Cobertura" className="fw-medium">Cobertura</Nav.Link>
                    <Nav.Link href="#Nosotros" className="fw-medium">Nosotros</Nav.Link>
                    <NavDropdown className="fw-medium" id="nav-dropdown-dark-example" title="Compra OnLine" menuVariant="ligth">
                        <NavDropdown.Item href="#action/3.1">Categorias</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Fumigaciones</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Control de Plagas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Mantenimientos</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#Contacto" className="fw-medium">Contacto</Nav.Link>
                </Nav>
                
                <Badge pill bg="light"><Nav.Link href="#Carrito"><CartWidget/></Nav.Link></Badge>
            </Container>
        </Navbar>
    );
}

export default NavBar