import React, { Component } from "react"
import { Navbar, Container, Nav, Col, Dropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
import { PersonCircle } from 'react-bootstrap-icons';
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    
    render() {
        return (
            <Navbar fixed="top" bg="dark" variant="dark" className="navbar">
                <Container className="container">
                    <Col className="col-1">
                        <Navbar.Brand>
                            <img
                                src={require('../../imgs/app-logo.png')}
                                width="400"
                                height="400"
                                className="d-inline-block align-top"
                                alt="Build-A-Rig Logo"
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                <Navbar.Brand>
                                    <PersonCircle className="person-icon" size={36} />
                                </Navbar.Brand>
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#/action-1">Previous Rig Builds</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="/login">Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Container>    
            </Navbar>

            
            
            // <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
            //     <ul className="nav nav-pills nav-fill">
            //         <li className="nav-item">
            //             <Link className="nav-link" to="/rigbuilds">Rig Builds</Link>
            //         </li>
            //     </ul>
            //     <span className="navbar-text">
            //         <ul className="nav nav-pills nav-fill">
            //             <li className="nav-item">
            //                 <Link className="nav-link" to="/login">Sign Out</Link>
            //             </li>
            //         </ul>
            //     </span>
            // </nav>
    
        )
    }
}

export default NavBar