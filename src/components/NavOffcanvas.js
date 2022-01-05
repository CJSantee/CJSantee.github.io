import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavOffcanvas() {
    return (
        <Navbar variant="dark" expand={false}>
        <Container>
            <Navbar.Brand href="#">Colin Santee</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas data-bs-scroll="true" data-bs-backdrop="false" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Colin Santee</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#AboutMe">About Me</Nav.Link>
                        <Nav.Link href="#Projects">Contact</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
    );
}

export default NavOffcanvas;