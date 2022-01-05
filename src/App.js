// Custom Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Row>
          <AboutMe />
        </Row>
        <Row>
          <Projects />
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;