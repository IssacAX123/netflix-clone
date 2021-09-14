import React, {useState, useEffect} from 'react';
import axios from './Axios';
import './Row.css';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
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
    {console.table(movies)}
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map(movie =>(
                    <img key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={isLargeRow ? BASE_URL + movie.poster_path : BASE_URL + movie.backdrop_path} alt={movie.name}/>
                ))}
            </div>
        </div>
    );
}

export default Row;