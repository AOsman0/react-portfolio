import Card from "react-bootstrap/Card";
import profileMe from "../images/my-profile.jpeg";

import App from "../App.css";

export const AboutMe = ({ firstName }) => {
  return (
    <Card style={{ width: "18rem" }} className="about-me-card">
      <Card.Body>
        <Card.Title className="first-name">
          Hey My Name Is {firstName} 👋🏾
        </Card.Title>
        <Card.Text>
          <h2 className="skills">
            My skills
            <li className="key-skills">Back-End-Development 🖥️</li>
            <li className="key-skills">Front-End-Development 💻</li>
            <li className="key-skills">DataBases 🖱️</li>
            <li className="key-skills">Server Rendering💡</li>
          </h2>
        </Card.Text>
        <div className="about-me-body">
          <Card.Img variant="top" src={profileMe} width="280rem" />
        </div>
      </Card.Body>
    </Card>
  );
};
