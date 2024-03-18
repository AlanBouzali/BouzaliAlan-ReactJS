import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
export const NavBar = () => {
  return (
    <Navbar bg="dark" className='container-fluid' data-bs-theme="dark">
        <Container>
          <Logo/>
          <Navbar.Brand href="#home">Alanding</Navbar.Brand>
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
