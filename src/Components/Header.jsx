import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Namo from "../assets/dmf.png";
import Namo1 from "../assets/cglogo.jpg";
import useMediaQuery from "../hooks/useMediaQuery.js";
import './Header.css';

const Header = () => {
    const isSmallScreen = useMediaQuery("(max-width: 576px)");

    return (
        <Navbar expand="lg" style={{ backgroundColor: "#f8f9fa" }} variant="light">
            <Container fluid className="py-2">
                <Navbar.Brand href="#home">
                    <img
                        src={Namo}
                        alt="Dmf"
                        className={isSmallScreen ? "img-small" : "img-large"}
                        style={{ maxWidth: "90px", height: "auto", padding: "5px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Row className="align-items-center">
                        <Col xs={6} sm={4} className="text-center mb-3 mb-sm-0">
                            <img
                                src={Namo1}
                                alt="dmf2"
                                className="img-fluid logo"
                                style={{ maxWidth: "80px", height: "auto", padding: "5px" }}
                            />
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
