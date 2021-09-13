import  API_KEY from './APIKEY';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getActionMovies: `/discover/movie/?api_key=${API_KEY}&ith_genres=28`,
    getHorrerMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    getComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    getDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
    getRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
}