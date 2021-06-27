import './App.css';
import HeaderComponent from './components/HeaderComponent'
//import SentimentAnalyzer from './components/SentimentAnalyzer'
import Kommentare from './components/Kommentare'
import { Container } from 'reactstrap';
import JumbotronComponent from './components/JumbotronComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <>
      <HeaderComponent />
      <JumbotronComponent />
      <Kommentare />
      <FooterComponent />
    </>
  );
}

export default App;
