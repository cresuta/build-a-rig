import React, { Component } from "react";
import { Navbar, Container, Col } from "react-bootstrap";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="footer">
        <Col>
          <Container className="container">
            <Navbar.Brand
              href="https://github.com/cresuta/build-a-rig"
              target="_blank"
              className="footer-text"
            >
              <i class="bi bi-github github-icon"></i>Build-A-Rig | 2021
            </Navbar.Brand>
          </Container>
        </Col>
      </Navbar>
    );
  }
}

export default Footer;
