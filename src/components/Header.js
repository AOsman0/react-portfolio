import "../App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AboutMe } from "./AboutMe";

export const Header = () => {
  const [isAboutMe, setIsAboutMe] = useState(false);

  // setting state variable name of state to be false
  const [isContactMe, setIsContactMe] = useState(false);

  // set up state variable name of state to be false

  const [isPortfolioMe, setisPortfolioMe] = useState(false);

  const handlePortfolioView = () => {
    console.log("clicked on portfolio");
  };

  const handleAboutMe = () => {
    // on click function
    console.log("clicked");
    // calling the function and setting variable to be true
    setIsAboutMe(!isAboutMe);
  };

  const handleContactMe = () => {
    // on click function
    console.log("clicked-on-contact");
    // calling the function and setting variable to be true
    setIsContactMe(!isContactMe);
  };

  // contact function to be rendered
  const contact = () => {
    return (
      <div>
        <li>My Name</li>
      </div>
    );
  };

  return (
    <>
      <Navbar className="nav-bar">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              href="#about-me"
              className="me-auto"
              onClick={handleAboutMe}
            >
              {isAboutMe ? "Hide About Me" : "View AboutMe"}
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="me-auto"
              onClick={handlePortfolioView}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className="me-auto"
              onClick={handleContactMe}
            >
              View Contact Information
            </Nav.Link>
            <Nav.Link href="#portfolio" className="me-auto">
              <a
                className="me-auto"
                href="https://drive.google.com/drive/folders/1wYdy6L-cLO_LW9MlBuOz7TYlMWaxB9oN?usp=sharing"
              >
                View Resume
              </a>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div>{isAboutMe && <AboutMe colour="red" firstName="Osman" />}</div>
      {/* setting variable name to be true and rendering the contact function  */}
      <div>{isContactMe && contact()}</div>
    </>
  );
};
