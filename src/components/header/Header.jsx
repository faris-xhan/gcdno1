import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { ContactLinks } from "./ContactLinks";
import useMediaQuery from "../../hooks/useMediaQuery";

export const Header = (props) => {
  const match = useMediaQuery("(max-width:920px)");
  const title = match
    ? "GCD No.1 DIK"
    : "Government Degree College No.1 Dera Ismail Khan";
  return (
    <header>
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            {title}
          </Navbar.Brand>
          <ContactLinks />
        </Container>
      </Navbar>
    </header>
  );
};
