import React, {useState, useEffect} from 'react';
import axios from './Axios';
import Youtube from 'react-youtube';
import './Row.css';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("")
    useEffect(() => {
        async function getData(){
            console.log("https://api.themoviedb.org/3" +fetchURL);
            const request = await axios.get(fetchURL);
            console.log(request);
            setMovies(request.data.results)
            return request
        }
        getData();
    }, [fetchURL])
    // eslint-disable-next-line no-lone-blocks
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    let setTrailerURLID = async (movie)=>{
        let urlFull = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=2e5f679a216aabe648b812bb7856cc9b`);
        console.table(urlFull)
        if (urlFull.data.results.length === 0){
            urlFull = await axios.get(`https://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=2e5f679a216aabe648b812bb7856cc9b`);
            console.table(urlFull)
        }
        if (urlFull.data.results.length > 0) {
            setTrailerURL(urlFull.data.results[0].key);
        }
    }
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map(movie =>(
                    <img
                        key={movie.id}
                         className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={isLargeRow ? BASE_URL + movie.poster_path : BASE_URL + movie.backdrop_path}
                        alt={movie.name}
                        onClick={() =>{
                            if (trailerURL){
                                setTrailerURL("");
                            }else{
                                setTrailerURLID(movie).then().catch();
                            }
                        }}/>
                ))}
            </div>
            {trailerURL && <Youtube videoId={trailerURL} opts={opts}/>}
        </div>
    );
}

export default Row;