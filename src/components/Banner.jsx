import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export const Banner = (props) => {
  const { img, title, message } = props;
  return (
    <Card text="black">
      <Row className="justify-content-center">
        <Col xs="auto">
          <Card.Img
            variant="top"
            src={img}
            style={{ maxWidth: "250px", height: "260px" }}
          />
        </Col>

        <Col>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{message}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Container;
