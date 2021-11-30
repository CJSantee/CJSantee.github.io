import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
    const skills = ['React', 'React Native', 'NodeJS', 'Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'REST APIs', 'PostgreSQL', 'NodeJS', 'Linux', 'Git', 'Docker', 'Adobe CC'];

    return (
        <Container>
            <h2>Skills</h2>
            <Row>
                {skills.map(skill => (
                    <Col>
                        <div className="skill">
                            <p>{skill}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Skills;