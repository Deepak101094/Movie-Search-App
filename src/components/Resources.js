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
       <div className="card-top">
         <nav>
         <a href="#">FULLCAST AND GREW</a>
          <a href="#">TRIVIA </a>
          <a href="#">USER REVIEW</a>
          <a href="#">IDMBM</a>
          <a href="#">MORE</a>
          <div style={{marginLeft: "6rem",marginRight:"3rem"}}>
          <a href="#">SHARE</a>
          </div>
         </nav>
         <div className="card-inner-div1">
           <nav>
           <ion-icon name="add-outline" style= {{fontSize: "30px"}} />
          <h1 style={{fontSize: "40px",fontFamily: "serif"}}>Cloud Atlas (2021) </h1>
           </nav>
           <div style={{display:'flex',justifyContent: "space-between",marginLeft:"60px", padding:0}}>
           <p>R</p>
           <p>2h 52min</p>
           <p>Action ,Drama,Mystery</p>
           <p>26 october 2012 USA</p>
           </div>       
           <div>
         
           </div>
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
      </div>
    </div>
    
      
      
    </div>
  );
}

export default Resources;
