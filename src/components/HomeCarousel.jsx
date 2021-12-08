import Carousel from "react-bootstrap/Carousel";

export const HomeCarousel = (props) => {
  return (
    <Carousel>
      <Carousel.Item style={{ maxHeight: "300px" }} interval={1000}>
        <img className="d-block w-100" src="/holder.svg" alt="First slide" />
        <Carousel.Caption>
          <h3>1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ maxHeight: "300px" }} interval={500}>
        <img className="d-block w-100" src="/holder.svg" alt="Second slide" />
        <Carousel.Caption>
          <h3>2</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ maxHeight: "300px" }}>
        <img className="d-block w-100" src="/holder.svg" alt="Third slide" />
        <Carousel.Caption>
          <h3>3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
