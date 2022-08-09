import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar className="nav-bar">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#about-me" className="me-auto">
              About Me
            </Nav.Link>
            <Nav.Link href="#contact" className="me-auto">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#portfolio" className="me-auto">
              Contact
            </Nav.Link>
            <Nav.Link href="#portfolio" className="me-auto">
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};
