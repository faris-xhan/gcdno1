import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon,
} from "react-bootstrap-icons";

export const ContactLinks = (props) => {
  return (
    <Nav>
      <Nav.Link as={Link} to="#">
        <FacebookIcon fontSize="1.5rem" />
      </Nav.Link>
      <Nav.Link as={Link} to="#">
        <TwitterIcon fontSize="1.5rem" />
      </Nav.Link>
      <Nav.Link as={Link} to="#">
        <LinkedinIcon fontSize="1.5rem" />
      </Nav.Link>
    </Nav>
  );
};
