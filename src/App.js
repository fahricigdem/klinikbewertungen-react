import './App.css';
import HeaderComponent from './components/HeaderComponent'
//import SentimentAnalyzer from './components/SentimentAnalyzer'
import Kommentare from './components/Kommentare'
import Dataset from './Data/Dataset'
import { KlinikNames, FachbereichNames, KlinikDeYears, GoogleMapsYears } from './Data/Lists'
import { Container } from 'reactstrap';
import JumbotronComponent from './components/JumbotronComponent'


function App() {
  return (
    <Container fluid={true}>
      <HeaderComponent />
      <JumbotronComponent />
      <Kommentare
        Dataset={Dataset}
        KlinikNames={KlinikNames}
        FachbereichNames={FachbereichNames}
        KlinikDeYears={KlinikDeYears}
        GoogleMapsYears={GoogleMapsYears}

      />
    </Container>
  );
}

export default App;
