import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { ContactLinks } from "./ContactLinks";

export const Header = (props) => {
  return (
    <header className="bg-dark text-white">
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Government Degree College No.1 Dera Ismail Khan
          </Navbar.Brand>
          <ContactLinks />
        </Container>
      </Navbar>
    </header>
  );
};
