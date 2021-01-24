import React from "react";
import ReactImageFallback from "react-image-fallback";
import DefaultImg from "../imdblogo.webp";

function Resources({ resources }) {
  const {
    Title,
    Actors,
    Awards,
    Writer,
    Director,
    Poster,
    Plot,
    Released,
    imdbRating,
  } = resources;
  return (
    <div className="container">
      <div className="card">
      <ReactImageFallback
        src={Poster}
        fallbackImage={DefaultImg}
        initialImage="loader.gif"
        alt="cool image should be here"
        className="my-image"
      />
      <div className="card-content">
        <h3 className="card-title"> {Title} </h3>
        <p>
          <small>Release Date: {Released} </small>
        </p>
        <p>
          <small>Actors: {Actors} </small>
        </p>
        <p>
          <small>Director: {Director} </small>
        </p>
        <p>
          <small>Writer:{Writer} </small>
        </p>
        <p>
          <small>Rating: {imdbRating} </small>
        </p>
        <p>
          <small>Awards:{Awards} </small>
        </p>
        <p className="card-description"> {Plot} </p>
      </div>
    </div>
    
      
      
    </div>
  );
}

export default Resources;
