import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { ContactLinks } from "./header/ContactLinks";
import { Link } from "react-router-dom";

export const Footer = (props) => {
  return (
    <footer>
      <Navbar bg="light">
        <Container fluid className="flex-wrap ">
          <Navbar.Brand as={Link} to="/" className="px-3 flex-grow-1 text-wrap">
            Copyrights &copy; Gonverment Degree College No.1 Dera Ismail Khan *
            2021
          </Navbar.Brand>
          <ContactLinks />
        </Container>
      </Navbar>
    </footer>
  );
};
