import React from "react";
import ReactImageFallback from "react-image-fallback";
import DefaultImg from "../imdblogo.webp";

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
  } = resources;
  return (
    <div className="container">
      <div className="card-top">
        <nav>
          <a href="#">FULLCAST AND GREW</a>
          <a href="#">TRIVIA </a>
          <a href="#">USER REVIEW</a>
          <a href="#">IDMbpro</a>
          <a href="#">MORE</a>
          <div className="share-button">
            <a href="#">SHARE</a>
          </div>
        </nav>

        <div className="card-inner-div1">
          <nav>
            <ion-icon name="add-outline" style={{ fontSize: "30px" }} />
            <h1>
              {Title} ({Year}){" "}
            </h1>
        <div className="rating"><ion-icon name="star-outline"></ion-icon> <p>{imdbRating}</p>  </div>

          </nav>
          <div className="details">
            <p>R |</p>
            <p>2h 52min |</p>
            <p> {Genre} |</p>
            <p>
              {Released} {Country}{" "}
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="card">
        <ReactImageFallback
          src={Poster}
          fallbackImage={DefaultImg}
          initialImage="loader.gif"
          alt="cool image should be here"
          className="my-image"
        />
        <div className="card-content">
          <p className="card-description"> {Plot} </p>

          <p>
            <b>Director:</b> <small>{Director} </small>
          </p>
          <p>
            <b>Writer:</b>
            <small> {Writer} </small>
          </p>
          <p>
            <b>Actors:</b>
            <small>{Actors} </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resources;
