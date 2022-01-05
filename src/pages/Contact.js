// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <Container id="Contact">
            <Row className="vh-100 align-items-center">
                <Col md>
                    <h2 className="text-primary">Contact</h2>
                    <p>Contact me!</p>
                </Col>
                <Col md></Col>
            </Row>
        </Container>
    );
}

export default Contact;