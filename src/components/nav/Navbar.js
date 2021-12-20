import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/rigbuilds">Rig Builds</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Sign Out</Link>
                        </li>
                    </ul>
                </span>
            </nav>
        )
    }
}

export default NavBar