import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../custom css/Navigation.css'; 

const pages = ['Home', 'District', 'Report', 'Login'];

function Navigation() {
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenuIcon(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar variant="dark" expand="sm" sticky="top" className="py-4" >
      <Container >
        <Navbar.Brand as={Link} to="/" className="semibold fs-4 text-uppercase">
          District Mineral Foundation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {pages.map((page, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={`/${page.toLowerCase()}`}
                className="nav-link mx-2 text-uppercase"
              >
                {page}
              </Nav.Link>
            ))}
            {showMenuIcon && (
              <NavDropdown title="Menu" id="collasible-nav-dropdown" className="ms-auto">
                {pages.map((page, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    to={`/${page.toLowerCase()}`}
                    className="text-uppercase"
                  >
                    {page}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
