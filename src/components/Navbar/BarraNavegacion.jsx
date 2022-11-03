import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./barraNavegacion.css"

const BarraNavegacion = () => {
  return (
    <Navbar bg='secondary' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='#'>
          <img id='logoNavbar' src="https://freepngimg.com/download/mario_bros/28746-8-mario-bros-photos.png" alt="Mario bros" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Inicio</Nav.Link>
            <Nav.Link href='#'>Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;
