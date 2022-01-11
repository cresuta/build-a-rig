import React, { Component } from "react";
import { Navbar, Container, Col, Dropdown } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" className="navbar">
        <Container className="container">
          <Col className="col-1">
            <Navbar.Brand>
              <img
                src={require("../../imgs/app-logo.png")}
                width="315"
                height="95"
                className="d-inline-block align-top logo"
                alt="Build-A-Rig Logo"
              />
            </Navbar.Brand>
          </Col>
          <Col className="col-3">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                <Navbar.Brand>
                  <PersonCircle className="person-icon" size={36} />
                </Navbar.Brand>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="/">Dashboard</Dropdown.Item>
                <Dropdown.Item href="/previous-rig-builds">
                  Previous Rig Builds
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/login">Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
