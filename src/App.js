import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div>
      <Header />
        <Container>
        <Row>
          <AboutMe />
        </Row>
        <Row>
          <Projects />
        </Row>
        <Row>        
          <Skills />
        </Row>
        </Container>
      <Footer />
    </div>
  );
}

export default App;