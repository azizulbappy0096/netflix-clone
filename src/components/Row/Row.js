import React, {useState, useEffect} from 'react';
import "./Row.css";

import {instance} from "../../utils/Request";

const Row = (props) => {
     const [movies, setMovies] = useState([]);

     useEffect(() => {
          instance.get(props.fetch).then(response => {
               setMovies(response.data.results)
          }).catch(error => {
               console.log(error);
          })
     }, [props.fetch]);
     console.log(movies, "backdrop_path")
     function displayMovies() {
          return movies.map(movie => {
               return <img key={movie.id} src={`https://image.tmdb.org/t/p/original${props.posterPath ? movie.poster_path : movie.backdrop_path}`} className={`row__poster ${props.posterPath ? "row__poster--large" : "" }`} alt={movie.title} />
          })
     }

     return (
          <div className="row">
               <h1> {props.title} </h1>
               <div className="row__posters">
                    {displayMovies()}
               </div>
          </div>
     )
}

export default Row;
