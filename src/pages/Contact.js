// React Imports
import { useState } from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';

function Contact() {
    const [showToast, setShowToast] = useState(false);

    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formContent, setFormContent] = useState("test");

    const toggleToast = () => setShowToast(!showToast);

    const formSubmit = () => {
        toggleToast();
    }

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
                            <Form.Control type="text" placeholder='Enter name' value={formName} onChange={(e) => setFormName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder={'Hi Colin!\n...\n...'} value={formContent} onChange={(e) => setFormContent(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" onClick={toggleToast}>
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Toast show={showToast} onClose={toggleToast} className="toast">
                <Toast.Header>
                    <strong className="me-auto">Message Sent</strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body>
                    <p>{`\"${formContent}\"`}</p>
                    <p>- {formName}</p>
                    <p>{formEmail}</p>
                </Toast.Body>
            </Toast>
        </Container>
    );
}

export default Contact;