import React, { useState, useEffect } from "react";
import "./Banner.css";

import { instance } from "../../utils/Request";

function Banner(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    instance
      .get(props.fetch)
      .then((response) => {
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1>
          {" "}
          {movie?.name ||
            movie?.original_name ||
            movie?.title ||
            movie?.original_title}{" "}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(`${movie.overview}`, 250)}
        </div>
      </div>
      <div className="banner__fadeOut"> </div>
    </header>
  );
}

export default Banner;
