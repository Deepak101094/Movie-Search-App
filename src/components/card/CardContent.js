import React from "react";
import "./CardContent.css";

function CardContent({ Plot, Director, Writer, Actors }) {
  return (
    <div>
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
      <div className="bottom-section">
        <button className="button">
          <ion-icon name="add-outline"></ion-icon>
          Add to WatchList
        </button>
      </div>
    </div>
  );
}

export default CardContent;
