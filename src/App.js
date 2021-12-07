import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router";
import { Header } from "./components/header/Header";

function App() {
  return (
    <Container fluid className="p-0">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hello </h1>} />
      </Routes>
    </Container>
  );
}

export default App;
