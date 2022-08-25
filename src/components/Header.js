import "../App.css";
import { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import the toggle icon

// on click of this toggle icon hide the nav bar

export const Header = ({
  handleAboutMe,
  handlePortfolioView,
  handleContactMe,
  isAboutMe,
  isContactMe,
  isPortfolioMe,
}) => {
  return (
    <>
      <Navbar className="nav-bar">
        <Nav className="me-auto nav-bar">
          <Nav.Link
            href="#about-me"
            className="me-auto nav-links"
            onClick={handleAboutMe}
          >
            {isAboutMe ? "Hide About Me" : "View About Me"}
            {isAboutMe}
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className="me-auto nav-links"
            onClick={handlePortfolioView}
          >
            {isPortfolioMe ? "Hide Portfolio" : "View Portfolio"}
            {isPortfolioMe}
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            className="me-auto nav-links"
            onClick={handleContactMe}
          >
            {isContactMe ? "Hide Contact Me" : "View Contact Me"}
            {isContactMe}
          </Nav.Link>
          <Nav.Link href="#portfolio" className="me-auto">
            <a
              className="me-auto nav-links"
              href="https://drive.google.com/file/d/19rPAfPuqbTWRAj-EtvZ7bFKv4PYFuY4i/view?usp=sharing"
            >
              View Resume
            </a>
          </Nav.Link>
        </Nav>
      </Navbar>

      <br />
    </>
  );
};
