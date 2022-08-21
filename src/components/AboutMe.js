import profileMe from "../images/my-profile.jpeg";

export const AboutMe = ({ firstName, colour }) => {
  return (
    <div className="container-fluid bg-light text-dark p-5">
      <div className="container bg-light p-5">
        <h1 className="display-4 fw-bold" className="first-name">
          Hi My Name Is {firstName} 👋🏾
        </h1>
        <p className="about-me-info">
          I am an eager individual who is willing to learn new skills that will
          help improve my overall performance. Always forward looking and
          wanting to achieve great things.
        </p>
        <p className="skills">
          <li>Back-End Development 💻</li>
          <li>Front-End Development 💡</li>
          <li>Server Rendering 🖱️</li>
          <li>DataBase Management 🖥️</li>
        </p>
        <hr />
        <div className="isAboutMeImg">
          <img src={profileMe} alt={colour} />
        </div>
      </div>
    </div>
  );
};
