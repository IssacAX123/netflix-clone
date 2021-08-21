import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from "./requests";

function App() {
  return (
    <div className="App">
        <Row title="Netflix Originals" fetchUrl={requests.getNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl={requests.getTrending}/>
    </div>
  );
}

export default App;
