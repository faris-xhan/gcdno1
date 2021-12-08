import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router";
import { Header } from "./components/header/Header";
import Home from "./routes/home";

function App() {
  return (
    <Container fluid className="p-0">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
