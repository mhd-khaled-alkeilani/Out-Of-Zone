import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Container fluid="md">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Logo
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown
                  title="Services"
                  id="offcanvasNavbarDropdown-expand-md"
                >
                  <NavDropdown.Item href="#action3">
                    Service One
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Service Two
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Service Three
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">Contact Us</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
