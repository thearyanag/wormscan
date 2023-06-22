import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/worm.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          Scan
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Form.Select aria-label="Mainnet">
              <option>Mainnet</option>
              <option value="2">Devnet</option>
              <option value="3">Testnet</option>
            </Form.Select>
          </Navbar.Text>
          <Navbar.Text>
             powered by{" "}
            <a href="https://wormhole.com/" target="_blank" rel="noreferrer">
              Wormhole
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
