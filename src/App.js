import './App.css';
import HeaderComponent from './components/HeaderComponent'
//import SentimentAnalyzer from './components/SentimentAnalyzer'
import Kommentare from './components/Kommentare'
import { Container } from 'reactstrap';
import JumbotronComponent from './components/JumbotronComponent'


function App() {
  return (
    <Container fluid={true}>
      <HeaderComponent />
      <JumbotronComponent />
      <Kommentare />
    </Container>
  );
}

export default App;
