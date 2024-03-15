import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from '../CartWidget/CartWidget';
export const NavBar = () => {
  return (
    <Navbar bg="dark" className='container-fluid' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce Alan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Electricidad</Nav.Link>
            <Nav.Link href="#features">Construcción</Nav.Link>
            <Nav.Link href="#pricing">Iluminación</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
  );
};
