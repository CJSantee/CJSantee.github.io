import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Container>
            <Navbar collapseOnSelect variant="dark" expand="lg">
                <Navbar.Brand>Colin Santee</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                <Nav>
                    <Nav.Item>
                        <Nav.Link>About Me</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Projects</Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Skills</Nav.Link>  
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;