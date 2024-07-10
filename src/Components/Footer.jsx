import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import sho1 from '../assets/dmf.png';
import sho2 from '../assets/cglogo.jpg';

export default function Footer() {
  return (
    <div style={{
      backgroundColor: "#0073E6",
      color: "#fff",
      padding: "40px 20px",
      textAlign: "center",
    }}>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs="auto">
            <Image src={sho1} alt="IIT Bhilai" style={{ height: "60px" }} />
          </Col>
          <Col xs="auto">
            <div style={{ height: "60px", width: "1px", backgroundColor: "#fff", margin: "0 20px" }}></div>
          </Col>
          <Col xs="auto">
            <Image src={sho2} alt="Digital India" style={{ height: "60px" }} />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <p style={{ fontSize: "16px", margin: "0" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus placeat porro autem consequuntur sit rem.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus cum autem magni error esse aut.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <p style={{ fontWeight: "bold", fontSize: "14px", margin: "0" }}>
              Last Updated: July 09, 2024
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
