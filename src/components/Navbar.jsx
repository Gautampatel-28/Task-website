import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
 const Navbarr = () => {
  
    return(
        <>
            {/* <nav className="navbar">
      <div className="navbar-container"> 
      Task Website
        <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
             Home
            </Link>
          </li>
               
          <li className="navbar-item">
          <Link to="/datapage" className="navbar-link">
              Datapage (API)
            </Link>
          </li>
        </ul>
      </div>
    </nav> */}
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand>Task Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
            <Link to="/" className="navbar-link">
             Home
            </Link>
            </Nav.Link>
            <Nav.Link >
            <Link to="/datapage" className="navbar-link">
              Datapage (API)
            </Link>
            </Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
};

export default Navbarr;