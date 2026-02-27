import { Nav, Navbar, Container } from "react-bootstrap";
import {useState} from "react";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#misc">Misc</Nav.Link>
          </Nav>
          <button className="vvd" onClick={() => console.log("connect")}>
            <span>Test</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
