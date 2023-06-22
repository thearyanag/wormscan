import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <SearchBar />
      </Container>
    </div>
  );
}

export default App;
