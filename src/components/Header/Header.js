import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./styles.css";

import logo from "./logo.png";

const Header = () => {
  return (
    <Navbar className="nav-bar" variant="dark" expand="lg">
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
        <Nav className="mr-auto">
          <Nav.Link href="#aboutus">About us</Nav.Link>
          <Nav.Link href="#successstories">Success stories</Nav.Link>
          <Nav.Link href="#howtodonate">How to Donate</Nav.Link>
        </Nav>
        <Nav className="mr-auto toprigh">
          <SearchBar className="searchBar" />

          <Nav.Link href="#login">LogIn</Nav.Link>
          <Nav.Link href="#register">Sign up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
