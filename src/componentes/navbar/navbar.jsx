import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const navbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Nombre de la pag</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
