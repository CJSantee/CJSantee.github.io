// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AboutMe() {
    return (
        <Row className="section justify-content-center" id="AboutMe">
            <Col md>
                <h2 className="text-primary">About Me</h2>
                <p>Creative and technically minded student inspired by software solutions with significant societal impact. Passionate about projects in web engineering, mobile applications, and full-stack development.</p>
                <Button variant="outline-primary">Resume</Button>
            </Col>
            <Col md>
                <Row className="justify-content-center">
                    <div className="graphic" />
                </Row>
                <Row className="text-center">
                    <a href="https://www.vecteezy.com/free-vector/programming" className="hidden-link">Programming Vectors by Vecteezy</a>
                </Row>
            </Col>
        </Row>
    );
}

export default AboutMe;