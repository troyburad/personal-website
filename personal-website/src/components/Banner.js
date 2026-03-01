import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import dogs from "../images/aprilRed.png";

function Banner() {
  return (
    <section className="hero-section" id="about-me">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="banner-left " xs={12} lg={6}>
            <div>
              <h5>- ABOUT ME</h5>
              <h1>Hey, I'm Troy - A Software Engineer from SoCal.</h1>
              <br></br>
              <p>
                I'm currently a student at UC Berkeley studying Computer
                Science. I have interest in a variety of subjects, including but
                not limited to swe, webdev, and computer security. I'm eager for any 
                opportunities, so please don't be afraid to reach out!
              </p>
              <br></br>
              <a href="mailto:buradtroy323@berkeley.edu" className="emailLink">
                buradtroy323@berkeley.edu
              </a>
            </div>
          </Col>
          <Col className="banner-right" xs={12} lg={6}>
            <div class="dog-container">
              <img src={dogs} alt="" style={{ width: "450px" }}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
