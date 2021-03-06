import  './App.css';
import Row from './Row';
import Banner from './Banner'
import requests from "./requests";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
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
