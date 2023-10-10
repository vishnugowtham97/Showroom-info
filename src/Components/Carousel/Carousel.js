import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function DarkVariantExample() {
  return (
    <div className="carousel-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 i20"
            src="../../../Assets/120.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="button-style">
              <Button>Know More</Button>
              <Button>Test Drive</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../Assets/118.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="button-style">
              <Button>Know More</Button>
              <Button>Test Drive</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../Assets/119.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="button-style">
              <Button>Know More</Button>
              <Button>Test Drive</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
