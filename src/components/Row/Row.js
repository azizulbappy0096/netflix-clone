import React, { useState, useEffect } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer";

import { instance } from "../../utils/Request";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [prevMovie, setPrevMovie] = useState({});
  const [showTrailer, setShowTrailer] = useState("");

  useEffect(() => {
    instance
      .get(props.fetch)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.fetch]);

  function displayMovies() {
    return movies.map((movie) => {
      if (movie.backdrop_path) {
        return (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${
              props.posterPath ? movie.poster_path : movie.backdrop_path
            }`}
            className={`row__poster ${
              props.posterPath ? "row__poster--large" : ""
            }`}
            alt={movie.title}
            onClick={() => {
              handleClick(movie);
            }}
          />
        );
      }
    });
  }

  function handleClick(movie) {
    if (showTrailer && movie.id === prevMovie) {
      setShowTrailer("");
    } else {
      MovieTrailer(
        movie?.name ||
          movie?.original_name ||
          movie?.title ||
          movie?.original_title
      )
        .then((id) => {
          let url = new URL(id);
          let params = new URLSearchParams(url.search);
          setShowTrailer(params.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setPrevMovie(movie.id);
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1 className="row__title"> {props.title} </h1>
      <div className="row__posters">{displayMovies()}</div>
      {showTrailer ? <YouTube videoId={showTrailer} opts={opts} /> : ""}
    </div>
  );
};

export default Row;
