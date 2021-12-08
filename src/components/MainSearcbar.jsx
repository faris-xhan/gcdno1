import Modal from "react-bootstrap/Modal";
import { Searchbar } from "./Searchbar";

const MainSearchbar = (props) => {
  const { handleClose, show } = props;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <h4>Search in GCD No.1 DIK Website</h4>
      </Modal.Header>
      <Modal.Body>
        <Searchbar />
      </Modal.Body>
    </Modal>
  );
};

export default MainSearchbar;
