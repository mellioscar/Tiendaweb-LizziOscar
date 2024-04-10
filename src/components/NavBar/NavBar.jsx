import './navbar.css';
import CartWidget from '../cartWidget/CartWidget.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
        <Navbar bg="success" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={NavLink} to='/' className="fw-bolder fst-italic"> 
                    <img alt="Logo" width= "28%" className="d-inline-block align-top rounded" src="../images/logo.png"/> 
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to='/Servicios' style={{fontSize:'25px', lineHeight:'20px'}}>Servicios</Nav.Link>
                    <Nav.Link as={NavLink} to='/Productos' style={{fontSize:'25px', lineHeight:'20px'}}>Productos</Nav.Link>
                    <Nav.Link as={NavLink} to='/Nosotros' style={{fontSize:'25px', lineHeight:'20px'}}>Nosotros</Nav.Link>
                    <NavDropdown style={{fontSize:'25px', lineHeight:'20px'}} id="dropdown-item-button" title="Tienda OnLine" menuVariant="ligth">
                        <NavDropdown.ItemText>Categorias de Productos</NavDropdown.ItemText>
                            <NavDropdown.Item as={NavLink} to='/categories/trampas'>- Trampas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/categories/insectos'>- Insectos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/categories/aves'>- Aves</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <Nav.Link as={NavLink} to='/Fumigaciones'>Fumigaciones</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link as={NavLink} to='/Control de Plagas'>Control de Plagas</Nav.Link>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to='/Contacto' style={{fontSize:'25px', lineHeight:'20px'}}>Contacto</Nav.Link>
                </Nav>
                <Badge pill bg="light"><Nav.Link as={NavLink} to='/Carrito'> <CartWidget counter={0}/> </Nav.Link></Badge>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;