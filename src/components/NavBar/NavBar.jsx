import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';

import { CartWidget } from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
export const NavBar = () => {
  return (
    <Navbar bg="dark" className="container-fluid" data-bs-theme="dark">
      <Container>
        <Logo />
        <Navbar.Brand to="/" as={NavLink}>
          Alanding
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to={`/category/electricidad`} as={NavLink}>
            Electricidad
          </Nav.Link>
          <Nav.Link to={`/category/construccion`} as={NavLink}>
            Construcción
          </Nav.Link>
          <Nav.Link to={`/category/iluminacion`} as={NavLink}>
            Iluminación
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
