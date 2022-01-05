import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Container>
            <Navbar collapseOnSelect variant="dark" expand="lg">
                <Navbar.Brand className="text-secondary">Colin Santee</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="#AboutMe">About Me</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#Projects">Projects</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#Contact">Contact</Nav.Link>  
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;