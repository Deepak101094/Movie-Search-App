import React from "react";
import "./Navbar.css";

function Navbar({
  handleInputChange,
  value,
  handleKeyDown,
  handleClick,
  handleRedioChange,
  selectedValue,
}) {
  return (
    <div>
      <div className="label">
        <input
          type="radio"
          name="title"
          value="t"
          checked={selectedValue === "t"}
          defaultChecked
          onChange={(event) => handleRedioChange(event.target.value)}
        />
        <label>Search By Title </label>
        <input
          type="radio"
          name="id"
          value="i"
          checked={selectedValue === "i"}
          onChange={(event) => handleRedioChange(event.target.value)}
        />
        <label>Search By Id</label>
      </div>
      <nav>
        <div className="navbar-inner">
          <div className="leftBar">
            <div className="logo">
              <b>IMDB</b>
            </div>
            <div className="menuIcon">
              <ion-icon name="menu-outline"></ion-icon>
              <b>Menu</b>
            </div>
          </div>

          <div className="searchBox">
            <input
              type="text"
              name="movieName"
              placeholder="Search IDBM"
              value={value}
              onKeyDown={(event) => handleKeyDown(event)}
              onChange={(event) => handleInputChange(event.target.value)}
            />
            <span>
              <ion-icon name="search-outline" onClick={handleClick}></ion-icon>
            </span>
          </div>
          <ol>
            <li>
              <a href="#">
                <b>IMDBPro</b>
              </a>
            </li>
            <li style={{ textAlign: "center" }}>
              <a href="#">
                <ion-icon name="add-outline"></ion-icon> Watchlist
              </a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ol>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
