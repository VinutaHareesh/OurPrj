import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../img/Logo.png";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="150"
            height="70"
            className="d-inline-block align-middle"
          />
          Keshav Foundation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* <LinkContainer to="/soon">
              <Nav.Link>AA</Nav.Link>
            </LinkContainer>               */}
            <Nav.Link as={Link} to="/AboutUs">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/ComingSoon">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/ComingSoon">
              <Button variant="danger">Donate</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;
