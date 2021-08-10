import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import logo from "./logo.png";

const Header = () => {
  return (
    <Navbar
      className="nav-bar justify-content-md-center "
      variant="dark"
      expand="lg"
    >
      <Link style={{ textDecoration: "none" }} as={Link} to={`/`}>
        <Navbar.Brand>
          <img
            src={logo}
            alt=""
            width="32"
            height="32"
            className="d-inline-block align-top"
          />
          SOSmap
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <Nav.Link href="#aboutus">About us</Nav.Link>
          <Nav.Link href="#successstories">Success stories</Nav.Link>
          <Nav.Link href="./Banktransfer">Donate</Nav.Link>
        </Nav>
        <div className=" justify-content-md-center">
          <Nav className="mr-auto justify-content-end">
            <Nav.Link href="#login">LogIn</Nav.Link>
            <Nav.Link href="#register">Sign up</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
