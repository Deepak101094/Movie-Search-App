import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbar-inner">
          <div className="leftBar">
            <div className="logo"><b>IMDB</b></div>
            <div className="menuIcon">
              <ion-icon
                style={{ fontSize: "20px" }}
                name="menu-outline"
              ></ion-icon>
              Menu
            </div>
          </div>

          <div className="searchBox">
            <input type="text" placeholder="search here" />
            <span>
              <ion-icon name="search-outline"></ion-icon>
            </span>
          </div>
          <ol>
            <li>
              <a href="#">IMDBpro</a>
            </li>
            <li style={{textAlign: "center"}}>
              <a href="#" > <ion-icon name="add-outline"></ion-icon> Watchlist</a>
            </li>
            <li>
              <a href="#">Signin</a>
            </li>
          </ol>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
