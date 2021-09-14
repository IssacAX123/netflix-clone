import  './App.css';
import Row from './Row';
import requests from "./requests";

function App() {
  return (
    <div className="App">
        <Row title="Netflix Originals" fetchURL={requests.getNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchURL={requests.getTrending}/>
        <Row title="Top Rated" fetchURL={requests.getTopRated}/>
        <Row title="Action" fetchURL={requests.getActionMovies}/>
        <Row title="Adventure" fetchURL={requests.getAdventureMovies}/>
        <Row title="Family" fetchURL={requests.getFamilyMovies}/>
        <Row title="Comedy" fetchURL={requests.getComedyMovies}/>
        <Row title="Action & Adventure TV" fetchURL={requests.getAnATV}/>

    </div>
  );
}

export default App;
