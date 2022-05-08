import { Navbar, Container, Nav, NavItem, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        className="text-secondary fs-4 fw-bold"
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Logo"
              src="/logo-wide.svg"
              width="130"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/" className="mx-3">
                Payload
              </Nav.Link>
              <Nav.Link as={NavLink} to="/verify-signature" className="mx-3">
                Signature
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sign-message" className="mx-3">
                Sign
              </Nav.Link>
            </Nav>
            <Nav>
              <NavItem>
                <Button variant="secondary" className="fw-bold fs-5 mx-3">
                  Connect Your Wallet
                </Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
