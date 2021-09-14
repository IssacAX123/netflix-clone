import React from 'react';
import axios from './Axios'
import requests from './requests'
import {useState} from "react";
import {useEffect} from "react";
import './Banner.css';
const BASE_URL = "https://image.tmdb.org/t/p/original/";

function truncate(str, n){
     return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() =>{
        async function getData() {
            const request = await axios.get(requests.getNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
            return request
        }
        getData()
    }, [])
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("${BASE_URL}${movie?.backdrop_path}")`,
            backgroundPosition: "center top"
        }}>
            <div className="banner__contents">
                <h1 className={"banner__title"}>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner__fadeBottom">

            </div>
        </header>
    );
}

export default Banner;