import { Search as SearchIcon } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { ContactLinks } from "./ContactLinks";
import { MainNavbar } from "./MainNavbar";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import MainSearchbar from "../MainSearcbar";

export const Header = (props) => {
  const match = useMediaQuery("(max-width:920px)");

  const [showSearchbar, setShowSearcbar] = useState(false);
  const handleShowSearcbar = (e) => setShowSearcbar(true);
  const handleCloseSearcbar = (e) => setShowSearcbar(false);

  const title = match
    ? "GCD No.1 DIK"
    : "Government Degree College No.1 Dera Ismail Khan";

  return (
    <header>
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="px-3 flex-grow-1">
            {title}
          </Navbar.Brand>
          <ContactLinks />
          <Button
            size="sm"
            variant="outline-success"
            onClick={handleShowSearcbar}
          >
            <SearchIcon />
          </Button>
        </Container>
      </Navbar>
      <MainNavbar />
      <MainSearchbar show={showSearchbar} handleClose={handleCloseSearcbar} />
    </header>
  );
};
