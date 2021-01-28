import React from "react";
import ReactImageFallback from "react-image-fallback";
import DefaultImg from "../imdblogo.webp";
import "./Resources.css";

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
      <div className="card">
        <div className="top-section">
          <div className="sub-nav">
            <div className="left">
              <a href="#">FULLCAST AND GREW </a>
              <span>|</span>
              <a href="#"> TRIVIA</a>
              <span>|</span>

              <a href="#">USER REVIEWS </a>
              <span>|</span>

              <a href="#">IMDbpro </a>
              <span>|</span>

              <span className="show_more">MORE</span>
            </div>
            <span className="right">
              <div className="share">
                  <span>
                   SHARE
                  </span>
                </div>
                </span>
          </div>
          <div className="title-block">
           <div className="title-wrapper">
            <div className="rating-wrapper">
              <div className="rating-icon">
              <ion-icon name="star-outline"></ion-icon>
              <span>425,645</span>
              </div>
              <div className="rating-value">
                <strong className="user-rating">
                7.4
                </strong>
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
               <h1>Cloud Atlas
                  <span className="title-year">
                    (2012)
                 </span> 
                 </h1>
                 <div className="sub-title-text">
                    
                           R
                    
                    <span>|</span>
                    <time>    2h 52min </time>
                    <span>|</span>
                    <a href="#">Action</a>
                    ,
                    <a href="#">Drama</a>
                    ,
                    <a href="#">Comedy</a>
                    <span>|</span>
                    <a href="#">26 october 2012 (USA)</a>
                 </div>
             </div>
           </div>
           </div>
          </div>
        </div>
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
