import penguines from "../images/penguines.jpeg";

export const AboutMe = ({ firstName, colour }) => {
  return (
    <div>
      <h1>{firstName}</h1>
      <div>
        <img src={penguines} alt={colour} />
      </div>
    </div>
  );
};
