import './App.css';
import Row from './Row';
import requests from "./requests";

function App() {
  return (
    <div className="App">
        <Row title="Netflix Originals" fetchURL={requests.getNetflixOriginals}/>
        <Row title="Trending Now" fetchURL={requests.getTrending}/>
    </div>
  );
}

export default App;
