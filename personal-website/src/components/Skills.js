import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import red from "../images/red.png";

function Skills() {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8} className="skillsLeft align-items-left">
            <div>
              <h5>- SKILLS</h5>
              <div>
                <span style={{ fontSize: "25px", fontWeight: 600 }}>
                  Languages:
                </span>
                <span style={{ fontSize: "20px", marginLeft: "10px" }}>
                  Python, Java, C, JavaScript, SQL, RegEx, HTML, CSS
                </span>
              </div>
              <div>
                <span style={{ fontSize: "25px", fontWeight: 600 }}>
                  Frameworks/Tools:
                </span>
                <span style={{ fontSize: "20px", marginLeft: "10px" }}>
                  React.js, Node.js, Postman, MongoDB, Django
                </span>
              </div>
              <br></br>
              <div className="courses">
                <span style={{ fontSize: "25px", fontWeight: 600 }}>
                  Coursework:
                </span>
                <a
                  href="https://cs186berkeley.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Database Systems
                </a>
                ,
                <a href="https://cs170.org/" target="_blank" rel="noreferrer">
                  Efficient Algorithims
                </a>
                ,
                <a href="https://sp26.cs161.org/" target="_blank" rel="noreferrer">
                  Computer Security
                </a>
                ,
                <a href="https://cs61c.org/" target="_blank" rel="noreferrer">
                  Computer Architecture
                </a>
                ,
                <a href="https://cs168.io/" target="_blank" rel="noreferrer">
                  Internet Architecture
                </a>
                ,
                 <a href="https://inst.eecs.berkeley.edu/~cs188/" target="_blank" rel="noreferrer">
                  AI
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="redContainer">
              <img
                src={red}
                alt=""
                style={{ width: "300px" }}
                className="mx-auto d-block red"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
