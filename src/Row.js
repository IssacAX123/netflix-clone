import React, {useState, useEffect} from 'react';
import axios from './Axios';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
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
            <div className="row_poster">
                {movies.map(movie =>(
                    <img src={BASE_URL + movie.poster_path} alt={movie.name}/>
                ))}
            </div>
        </div>
    );
}

export default Row;