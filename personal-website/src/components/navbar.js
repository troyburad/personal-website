import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faSquareLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import "../css/custom.css";

function NavBar() {
  return (
    <Navbar fixed="top" className="bg-black navbar-dark">
      <Container>
        <Navbar.Brand href="#home" className="nameLabel">
          troy burad
        </Navbar.Brand>
        <Nav className="navLabels mx-auto">
          <Nav.Link href="#about-me">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
        </Nav>
        <span>
          <div className="socials">
            <a href="https://github.com/troyburad" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/troyburad/" target="_blank">
              <FontAwesomeIcon icon={faSquareLinkedin} />
            </a>
            <a
              href="https://open.spotify.com/user/buradtroy323"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </div>
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBar;
