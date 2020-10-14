import React from 'react';
import './App.css';

import Row from './components/Row/Row';
import {Requests} from "./utils/Request";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Banner fetch={Requests.netflixOriginals} />
      <Row 
        title="Netflix Originals" 
        fetch={Requests.netflixOriginals}
        posterPath
      />
      <Row title="Trending Now" fetch={Requests.trendingNow}/>
      <Row title="Top Rated" fetch={Requests.topRated}/>
      <Row title="Action Movies" fetch={Requests.actionMovies}/>
      <Row title="Comedy Movies" fetch={Requests.comedymovies}/>
      <Row title="Horror Movies" fetch={Requests.horrorMovies}/>
      <Row title="Romantic Movies" fetch={Requests.romanceMovies}/>
      <Row title="Documentaries" fetch={Requests.documentaries}/>
    </div>
  );
}

export default App;
