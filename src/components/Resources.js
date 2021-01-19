import React from "react";
import ReactImageFallback from "react-image-fallback";
import DefaultImg from "../imdblogo.webp";

function Resources({ resources, error }) {
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
    <div>
      {!error ? (
        <div className="card">
          {/* <img
            className="card-image"
            src={Poster}
            alt={Title + "poster"}
            onError={(e) => (
              (e.target.onerror = null), (e.target.src = {DefaultImg})
            )}
          /> */}
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
      ) : (
        <h2 style={{ color: "red", textAlign: "center" }}>{error}..</h2>
      )}
    </div>
  );
}

export default Resources;
