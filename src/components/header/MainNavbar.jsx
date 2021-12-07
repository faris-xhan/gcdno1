import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const MainNavbar = (props) => {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Link
          </Nav.Link>
          <NavDropdown title="Deparments" id="departments">
            <NavDropdown.Item as={Link} to="/cs">
              Computer Science
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/urdu">
              Urdu
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/english">
              English
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/math">
              Mathematics
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
