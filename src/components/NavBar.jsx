import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">NicoTech</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Arma Tu Pc</Nav.Link>
          <Nav.Link href="#action2">Pc Armadas</Nav.Link>
          <NavDropdown title="Hardware" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Procesadores</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Mothers</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Almacenamiento</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Ram</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Fuentes</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Perifericos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Teclados</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Mouses</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Monitores</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Auriculares</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action2">Consulta</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      <CartWidget />
    </Container>
  </Navbar>
);
