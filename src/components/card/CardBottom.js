import React from "react";
import "./CardBottom.css";
import imdbLogo from "../../imdblogo.png";

function CardBottom() {
  return (
    <div>
      <div className="titleReview_bar">
        <div className="titleReviewBarItem">
          <span className="score">55</span>

          <div className="reviews">
            <div>MetaScore</div>
            <div>
              <span className="subtext">
                <a href="#">from metacritim.com</a>
              </span>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="reviews">
          <div>Reviews</div>
          <div>
            <span className="subtext">
              <a href="#">10007 user</a>
              <span>|</span>
              <a href="#">523 critis</a>
            </span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="reviews">
          <div>Popularity</div>
          <div>
            <span className="subtext">
              <a href="#">10007 (19)</a>
            </span>
          </div>
        </div>
      </div>
      <div className="logo">
        <img src={imdbLogo} alt="logo" />
        <a href="#">
          <span>View production,box office & company info</span>
        </a>
      </div>
      <div className="award">
        <div><b>Nominated for 1 Golden Globe. </b></div> 
        <span> Another 16 wins & 77 nominations. </span>
        <a href="#">see more awards</a>
      </div>
    </div>
  );
}

export default CardBottom;
