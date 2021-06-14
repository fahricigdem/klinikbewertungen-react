import './App.css';
import HeaderComponent from './components/HeaderComponent'
//import SentimentAnalyzer from './components/SentimentAnalyzer'
import Kommentare from './components/Kommentare'
import Dataset from './Data/Dataset'
import KlinikNames from './Data/KlinikNames'


function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <Kommentare
        Dataset={Dataset}
        KlinikNames={KlinikNames}
      />
    </div>
  );
}

export default App;
