import { Container } from "react-bootstrap";
import { Banner } from "../components/Banner";

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque amet totam aliquam quae nostrum nam rerum voluptatum! Natus quis nostrum tempore voluptatibus commodi praesentium distinctio quia ullam iusto molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dicta.";

const Home = (props) => {
  return (
    <Container fluid className="p-0">
      <Banner
        img="/holder.svg"
        title="Message from Principal"
        message={content}
      />
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
