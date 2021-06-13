import './App.css';
import HeaderComponent from './components/HeaderComponent'
//import SentimentAnalyzer from './components/SentimentAnalyzer'
import Kommentare from './components/Kommentare'
import Dataset from './Data/Dataset'


function App() {
  return (
    <div className="container">
      <HeaderComponent />

      <Kommentare Dataset={Dataset} />


    </div>
  );
}

export default App;
