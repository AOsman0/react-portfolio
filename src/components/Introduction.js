import Carousel from "react-bootstrap/Carousel";

import Coding from "../images/coding.jpeg";

import Sports from "../images/sports.jpeg";

//hide carousel on click of any nav bar item

export const Introduction = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
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
      <Carousel.Item interval={3000}>
        <div className="interest-image">
          <img src={Sports} alt="Second slide" className="interest-image" />
        </div>
        <Carousel.Caption>
          <h3 className="my-interest-title">My Personal Interest</h3>
          <li className="my-interest">BasketBall</li>
          <li className="my-interest">Football</li>
          <li className="my-interest">Swimming</li>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
