import  API_KEY from './APIKEY';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getActionMovies: `/discover/movie/?api_key=${API_KEY}&ith_genres=28`,
    getFamilyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10751`,
    getComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    getAdventureMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=12`,
    getAnATV: `/discover/tv/?api_key=${API_KEY}&with_genres=10759`,
}