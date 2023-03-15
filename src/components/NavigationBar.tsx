import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/Home">FarmFriend</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/add">Add User</Nav.Link>
                <Nav.Link href="/display">View List</Nav.Link>
                <Nav.Link href="/update">Update User</Nav.Link>
                <Nav.Link href="/delete">Delete User</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div></div>
        </>
      );
}

export default NavigationBar