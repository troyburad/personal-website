import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import pack from "../images/pack2.png";
import git from "../images/git.png";
import enigma from "../images/enigma.jpg";
import traceroute from "../images/traceroute.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className xs={12} lg={6}>
            <h5>- PROJECTS</h5>
            <h3>Featured Work</h3>
            <p>
              Here are some projects I've worked on. Click on a project for more
              information.
            </p>
            <br></br>
            <br></br>
            <div className="circle-image mx-auto pack">
              <img src={pack} alt="" style={{ width: "450px" }} />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <a
              href="https://github.com/st0rmEX/gitlet"
              target="_blank"
              rel="noreferrer"
              className="cardLink"
            >
              <Card className="repo-card">
                <Card.Body>
                  <Card.Title className="cardTitle">
                    <img src={git} alt="" style={{ width: "25px" }} />
                    <span className="ms-2">troyburad/gitlet</span>
                  </Card.Title>
                  <Card.Text className="cardText">
                    Recreation of the widely used version-control system Git,
                    supporting committing, branching, and merging.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
            <br></br>
            <a
              href="https://github.com/st0rmEX/enigma"
              target="_blank"
              rel="noreferrer"
              className="cardLink"
            >
              <Card className="repo-card">
                <Card.Body>
                  <Card.Title className="cardTitle">
                    <img src={enigma} alt="" style={{ width: "25px" }} />
                    <span className="ms-2">troyburad/enigma</span>
                  </Card.Title>
                  <Card.Text className="cardText">
                    Improved version of the German enigma machine. Features
                    encryption, decryption, and dynamic rotor configs
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
            <br></br>
            <a
              href="https://github.com/st0rmEX/traceroute"
              target="_blank"
              rel="noreferrer"
              className="cardLink"
            >
              <Card className="repo-card">
                <Card.Body>
                  <Card.Title className="cardTitle">
                    <img src={traceroute} alt="" style={{ width: "25px" }} />
                    <span className="ms-2">troyburad/traceroute</span>
                  </Card.Title>
                  <Card.Text className="cardText">
                    Network diagnostic tool that displays possible routes from
                    your current IP address to a desired destination.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Projects;
