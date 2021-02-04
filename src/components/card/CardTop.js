import React from "react";
import "./CardTop.css";

function CardTop({
  imdbRating,
  imdbVotes,
  Title,
  Country,
  Year,
  Genre,
  Released,
}) {
  return (
    <div className="top-section">
      <div className="sub-nav">
        <div className="left">
          <a href="/">FULLCAST AND GREW </a>
          <span>|</span>
          <a href="/"> TRIVIA</a>
          <span>|</span>

          <a href="/">USER REVIEWS </a>
          <span>|</span>

          <a href="/">IMDbpro </a>
          <span>|</span>

          <span className="show_more">MORE</span>
        </div>
        <span className="right">
          <div className="share">
            <span>SHARE</span>
          </div>
        </span>
      </div>
      <div className="title-block">
        <div className="title-wrapper">
          <div className="rating-wrapper">
            <div className="rating-icon">
              <ion-icon name="star-outline"></ion-icon>
              <span> {imdbVotes}</span>
            </div>
            <div className="rating-value">
              <strong className="user-rating">{imdbRating}</strong>
              <span>/</span>
              <span>10</span>
            </div>
            <div className="star-icon">
              <div className="rating">
                <span className="add-star">
                  <ion-icon name="star-outline"></ion-icon>
                </span>
                <span>Rate this</span>
              </div>
            </div>
          </div>

          <div className="title-bar">
            <div className="title">
              <div className="add-icon">
                <ion-icon name="add-outline"></ion-icon>
              </div>
            </div>
            <div className="title-wrap">
              <h1>
                {" "}
                {Title}
                <span className="title-year">({Year})</span>
              </h1>
              <div className="sub-title-text">
                R<span>|</span>
                <time> 2h 52min </time>
                <span>|</span>
                <a href="/"> {Genre} </a>,<span>|</span>
                <a href="/">
                  {" "}
                  {Released} ({Country})
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTop;
