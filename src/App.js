import './App.css';
import HeaderComponent from './components/HeaderComponent'
//import SentimentAnalyzer from './components/SentimentAnalyzer'
import Kommentare from './components/Kommentare'
import Dataset from './Data/Dataset'
import KlinikNames from './Data/KlinikNames'
import { Container } from 'reactstrap';


function App() {
  return (
    <Container>
      <HeaderComponent />
      <Kommentare
        Dataset={Dataset}
        KlinikNames={KlinikNames}
      />
    </Container>
  );
}

export default App;
