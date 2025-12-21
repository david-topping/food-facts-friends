import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/donate", label: "Donate" },
    { path: "/contact", label: "Contact" },
    { path: "/supporters", label: "Our Supporters" },
  ];

  return (
    <Navbar expand="sm" className="custom-navbar mt-3">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto nav-links">
            {navLinks.map(({ path, label }) => {
              const isActive =
                path === "/"
                  ? location.pathname === path
                  : location.pathname.startsWith(path);

              return (
                <Nav.Link
                  as={Link}
                  to={path}
                  key={path}
                  className={isActive ? "fw-bold" : ""}
                >
                  {label}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
