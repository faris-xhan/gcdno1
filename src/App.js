import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import Home from "./routes/home";

function App() {
  return (
    <Container fluid className="p-0 d-flex flex-column vh-100">
      <Header />
      <Container fluid className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
