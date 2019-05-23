import { Link } from "gatsby"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const WebNavbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">
            logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/contact-us/" className="nav-link">Contact Us</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default WebNavbar