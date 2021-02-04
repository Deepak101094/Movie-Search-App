import React from "react";
import ReactImageFallback from "react-image-fallback";
import "./Resources.css";
import CardTop from "../card/CardTop";
import CardBottom from "../card/CardBottom";
import CardContent from "../card/CardContent";

function Resources({ resources }) {
  const {
    Title,
    Actors,
    Writer,
    Director,
    Poster,
    Plot,
    Released,
    imdbRating,
    Genre,
    Year,
    Country,
    imdbVotes,
  } = resources;
  return (
    <div className="container">
      <div className="card">
        <CardTop
          Title={Title}
          Released={Released}
          imdbRating={imdbRating}
          imdbVotes={imdbVotes}
          Genre={Genre}
          Year={Year}
          Country={Country}
        />
        <div className="poster-image-container">
          <ReactImageFallback
            src={Poster}
            fallbackImage="/images/imdb-logo.webp"
            initialImage="loader.gif"
            alt="Poster Image"
            className="poster-image"
          />
        </div>
        <CardContent
          Plot={Plot}
          Director={Director}
          Writer={Writer}
          Actors={Actors}
        />
        <CardBottom />
      </div>
    </div>
  );
}

export default Resources;
