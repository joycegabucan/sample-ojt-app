import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">FarmFriend</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/add">View User</Nav.Link>
                <Nav.Link href="/display">View Ratings</Nav.Link>
                <Nav.Link href="/reports">View Reports</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div></div>
        </>
      );
}

export default NavigationBar