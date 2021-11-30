import GitHub from '../assets/GitHub.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <Container> 
            <Navbar variant="dark" className="justify-content-center align-items-center">
                <Nav>
                    <Nav.Link href="https://github.com/CJSantee/cjsantee.github.io">
                        {"Developed by "}
                        <img src={GitHub} alt="" width={16}/>
                        {" Colin Santee"} 
                    </Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default Footer;