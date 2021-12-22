import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import { CheckCircleFill, Person, PersonCircle } from 'react-bootstrap-icons';
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={require('../../imgs/app-logo.png')}
                            width="300"
                            height="300"
                            className="d-inline-block align-top"
                            alt="Build-A-Rig Logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/rigbuilds">Previous Rig Builds</Nav.Link>
                    </Nav>
                </Container>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Hello, Cameron!</Nav.Link> 
                    </Nav>
                    <Navbar.Brand>
                        <PersonCircle color="white" size={36} />
                    </Navbar.Brand>
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