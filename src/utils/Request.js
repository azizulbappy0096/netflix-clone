import axios from "axios";
const api_key = "946ca227df32854504d7d074c2570ca2";

export const Requests = {
     netflixOriginals: `/discover/tv?api_key=f81980ff410e46f422d64ddf3a56dddd&with_networks=213`,
     trendingNow: `/trending/all/day?api_key=${api_key}`,
     topRated: `/movie/top_rated?api_key=${api_key}&page=1&language=en-US`,
     actionMovies: `discover/movie?api_key=${api_key}&with_genres=28`,
     comedymovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
     horrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
     romanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
     documentaries: `/discover/movie?api_key=${api_key}&with_genres=99`
}

export const instance = axios.create({
     baseURL: 'https://api.themoviedb.org/3',
});

