import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";

import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <img src={Logo} alt="logo" width="40" className="menu-top__logo" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/new-movies">Estrenos Cartelera</Link>
            <Link to="/popular">Peliculas Populares</Link>
            <Link to="/search">Buscador</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
