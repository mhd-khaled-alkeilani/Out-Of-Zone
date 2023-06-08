import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bg1 from "../../../assets/bg1.jpg";
import bg2 from "../../../assets/bg2.jpg";
import bg3 from "../../../assets/bg3.jpg";

const CarouselHero = () => {
  const CarouselHero = {
    id: 1,
    url: bg1,
    title: "Land shipping",
    id: 2,
    url: bg2,
    title: "Sea freight",
    id: 3,
    url: bg3,
    title: "Air freight",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselHero.url}
          alt={CarouselHero.title}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bg2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bg3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHero;
