import "../App.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AboutMe } from "./AboutMe";
import { ContactMe } from "./ContactMe";
import { Portfolio } from "./Porfolio";

export const Header = () => {
  const [isAboutMe, setIsAboutMe] = useState(false);

  // setting state variable name of state to be false
  const [isContactMe, setIsContactMe] = useState(false);

  // set up state variable name of state to be false

  const [isPortfolioMe, setisPortfolioMe] = useState(false);

  const handlePortfolioView = () => {
    console.log("clicked on portfolio");

    setisPortfolioMe(!isPortfolioMe);
    setIsAboutMe(false);
    setIsContactMe(false);
  };

  const handleAboutMe = () => {
    // on click function
    console.log("clicked");
    // calling the function and setting variable to be true
    setIsAboutMe(!isAboutMe);
    setIsContactMe(false);
    setisPortfolioMe(false);

    // if isAboutMe is clicked set is contactMe To False
  };

  const handleContactMe = async () => {
    // on click function
    console.log("clicked-on-contact");
    // calling the function and setting variable to be true
    setIsContactMe(!isContactMe);
    setIsAboutMe(false);
    setisPortfolioMe(false);
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
              {isAboutMe ? "Hide About Me" : "View About Me"}
              {isAboutMe}
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="me-auto"
              onClick={handlePortfolioView}
            >
              {isPortfolioMe ? "Hide Portfolio" : "View Portfolio"}
              {isPortfolioMe}
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className="me-auto"
              onClick={handleContactMe}
            >
              {isContactMe ? "Hide Contact Me" : "View Contact Me"}
              {isContactMe}
            </Nav.Link>
            <Nav.Link href="#portfolio" className="me-auto">
              <a
                className="me-auto"
                href="https://drive.google.com/file/d/19rPAfPuqbTWRAj-EtvZ7bFKv4PYFuY4i/view?usp=sharing"
              >
                View Resume
              </a>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div>{isAboutMe && <AboutMe colour="red" firstName="Osman" />}</div>
      <div>{isContactMe && <ContactMe />}</div>
      {/* setting variable name to be true and rendering the contact function  */}
      <div>{isPortfolioMe && <Portfolio />}</div>
    </>
  );
};
