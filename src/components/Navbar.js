
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function NavBar() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Apple</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto hello">
              <Nav.Link href="#features">Store</Nav.Link>
              <Nav.Link href="#pricing">Mac</Nav.Link>
              <Nav.Link href="#pricing">iPad</Nav.Link>
              <Nav.Link href="#pricing">iPhone</Nav.Link>
              <Nav.Link href="#pricing">Watch</Nav.Link>
              <Nav.Link href="#pricing">AirPods</Nav.Link>
              <Nav.Link href="#pricing">TV & Home</Nav.Link>
              <Nav.Link href="#pricing">Entertainment</Nav.Link>
              <Nav.Link href="#pricing">Acessories</Nav.Link>
              <Nav.Link href="#pricing">Support</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }






  