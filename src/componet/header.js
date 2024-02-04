import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from "../img/Logo.png";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 



function header() {
  return (
    <BrowserRouter>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="/">
         <img src={logo} alt="Logo" width="150" height="70" class="d-inline-block align-middle"></img> 
        </Navbar.Brand>
        <Navbar.Brand href="/">
         Keshav Foundation 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link  href="/comingSoon">About Us</Nav.Link>
            <Nav.Link href="/comingSoon">Contact Us</Nav.Link>
            <Nav.Link href="#memes">
              <Button variant="danger" > Donate </Button>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </BrowserRouter>
  );
}

export default header;