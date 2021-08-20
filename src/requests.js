const API_KEY = require('./APIKEY');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getTrending: `/trending/all/week?api_keys=${API_KEY}&language=en-US`,
    getTopRated: `/movie/top_rated?api_keys=${API_KEY}&language=en-US`,
    getNetflixOriginals: `/discover/tv?api_keys=${API_KEY}&with_networks=213`,
    getActionMovies: `/discover/movie/?api_keys=${API_KEY}&with_genres=28`,
    getHorrerMovies: `/discover/movie/?api_keys=${API_KEY}&with_genres=27`,
    getComedyMovies: `/discover/movie/?api_keys=${API_KEY}&with_genres=35`,
    getDocumentaries: `/discover/movie/?api_keys=${API_KEY}&with_genres=99`,
    getRomanceMovies: `/discover/movie/?api_keys=${API_KEY}&with_genres=10749`,
}