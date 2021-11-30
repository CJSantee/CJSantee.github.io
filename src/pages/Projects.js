import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Brewable from '../assets/Brewable.png';
import Nissan from '../assets/Nissan.png';
import Dormlife from '../assets/Dormlife.png';

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <Container>
                <Row>
                    <Col md> 
                        <div className="projectIcon">
                            <img src={Brewable} alt="Brewable icon" width={150}/>
                        </div>
                        <div>
                            <a href="http://brewableapp.com">
                                <h3>Brewable</h3>
                            </a>
                            <p>Personal project developing mobile app for coffee brewing. Designed to capture and improve your coffee brewing experiences.</p>
                        </div>
                    </Col>
                    <Col md>
                        <div className="projectIcon">
                            <img src={Nissan} alt="Nissan icon" width={150}/>
                        </div>
                        <div>
                            <h3>Nissan PQE Reserve</h3>
                            <p>Mobile and web application for Nissan North America's PQE (Parts Quality Engineering) team to manage their pool car reservations.</p>
                        </div>
                    </Col>
                    <Col md>
                        <div className="projectIcon">
                            <img src={Dormlife} alt="Dormlife icon" width={150}/>
                        </div>
                        <div>
                            <h3>Dormlife</h3>
                            <p>Project lead for team that developed a web platform for university residence-life programs, allowing residents to sign in and out of their dorms.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;

