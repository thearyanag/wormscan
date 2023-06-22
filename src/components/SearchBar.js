import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <Form>
      <br />
      <Stack direction="horizontal" gap={3}>
        <Form.Select aria-label="Chain">
          <option>Chain</option>
          <option value="1">Ethereum</option>
          <option value="2">Binance Smart Chain</option>
          <option value="3">Polygon</option>
        </Form.Select>
        <Form.Select aria-label="Contract Address">
          <option>Contract Address</option>
          <option value="1">0x1</option>
          <option value="2">0x2</option>
          <option value="3">0x3</option>
        </Form.Select>
        <Form.Control type="text" placeholder="Seq" size="small"/>
        <Button variant="primary" type="submit">
          Scan
        </Button>
      </Stack>
    </Form>
  );
}

export default SearchBar;
