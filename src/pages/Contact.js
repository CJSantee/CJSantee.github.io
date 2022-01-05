// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <Container id="Contact">
            <Row className="vh-100 align-items-center">
                <Col md>
                    <h2 className="text-primary">Contact</h2>
                    <p>Interested in working together? Contact me!</p>
                </Col>
                <Col md>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" placeholder='Enter name'/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder={'Hi Colin!\n...\n...'}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;