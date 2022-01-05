// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Projects() {
    return (
        <Row className="section" id="Projects">
            <Col md></Col>
            <Col md>
                <h2 className="text-secondary">Projects</h2>
                <p>Brewable</p>
                <p>Personal project developing mobile app for coffee brewing. Designed to capture and improve your coffee brewing experiences.</p>
                <Button variant="outline-secondary" href="http://brewableapp.com">Homepage</Button>
            </Col>
        </Row>
    );
}

export default Projects;

