import Carousel from "react-bootstrap/Carousel";

import Coding from "../images/coding.jpeg";

//hide carousel on click of any nav bar item

export const Introduction = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <div className="first-slide">
          <img src={Coding} alt="First slide" className="first-slide" />
        </div>
        <Carousel.Caption className="carousel-text">
          <h3>Welcome To My Portfolio</h3>
          <p>
            Please choose any of the nav links above to find out more about me
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
