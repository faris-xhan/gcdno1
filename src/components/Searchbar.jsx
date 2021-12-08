import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export const Searchbar = (props) => {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
};
