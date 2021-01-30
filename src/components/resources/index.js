import React from "react";
import ReactImageFallback from "react-image-fallback";
import DefaultImg from "../../imdblogo.webp";
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
        <ReactImageFallback
          src={Poster}
          fallbackImage={DefaultImg}
          initialImage="loader.gif"
          alt="cool image should be here"
          className="my-image"
        />
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
