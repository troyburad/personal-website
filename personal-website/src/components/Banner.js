import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Banner() {
  return (
    <section className="banner hero-section" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={20} md={6} xl={7}>
            <div>
              <h1>
                Hi I'm Troy
              </h1>
              <p>
                
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}></Col>
        </Row>
      </Container>
      <Container></Container>
    </section>
  );
}

export default Banner;
