import React, { useState } from "react";
import axios from "axios";
import Resources from "./Resources";

function MovieSearch() {
  const [searchText, setSearchText] = useState("");
  const [searchMethod, setSearchMethod] = useState("");
  const [resources, setResources] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [loader, setLoader] = useState(false);

  const validate = () => {
    let text = searchText;
    let isValid = true;
    let errors = "";
    if (!text) {
      isValid = false;
      errors = "pls search your fav movie";
    }
    setInputError(errors);
    return isValid;
  };

  const clickHandler = (text) => {
    setLoader(true);
    setShowCard(false);
    const token = "114529ed";
    const key = searchMethod;
    if (validate()) {
      if (key === "t") {
        axios
          .get("http://www.omdbapi.com", {
            params: {
              apikey: token,
              t: text,
            },
          })
          .then((res) => {
            // console.log(res);
            setResources(res?.data ?? {});

            if (res.status === 200) {
              setSuccess(true);
              setError("movie not found..");
              //  console.log(error);
            }
          });
      } else {
        axios
          .get("http://www.omdbapi.com", {
            params: {
              apikey: token,
              i: text,
            },
          })
          .then((res) => {
            setResources(res?.data ?? {});
            if (res.status === 200) {
              setSuccess(false);
              setError("Movie Not Found..");
              //  console.log(error);
            }
          });
      }
    } else {
      alert("something went wrong!");
    }

    setTimeout(() => {
      setLoader(false);
    }, 2000);
    setShowCard(true);

    setSearchText("");
  };

  // when user click on enter button then this function will call..!

  const handleKeyDown = (event) => {
    event.preventDefault();

    if (event.keyCode === 13) {
      clickHandler(searchText);
    }
  };

  return (
    <div>
      {/* Navbar */}
    <div>
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
              value={searchText}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <span>
              <ion-icon
                name="search-outline"
                onClick={() => clickHandler(searchText)}
              ></ion-icon>
            </span>
          </div>
          <ol>
            <li>
              <a href="#"><b>IMDBPro</b></a>
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

      <div className="label">
        <input
          type="radio"
          name="title"
          value="t"
          checked={searchMethod === "t"}
          //defaultChecked
          onChange={(e) => setSearchMethod(e.target.value)}
        />
        <label>Search By Title </label>
        <input
          type="radio"
          name="id"
          value="i"
          checked={searchMethod === "i"}
          onChange={(e) => setSearchMethod(e.target.value)}
        />
        <label>Search By Id</label>
      </div>

      <input
        className="input"
        type="text"
        name="movieName"
        placeholder="i.e. Jurassic Park"
        value={searchText}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <p style={{ color: "red" }}> {inputError} </p>

      {loader ? (
        <div className="loader">Loading...</div>
      ) : (
        <button className="button" onClick={() => clickHandler(searchText)}>
          Search
        </button>
      )}

      {loader ? (
        <div className="loader">Loading</div>
      ) : (
        <>
          {showCard ? (
            <div>
              {" "}
              {success ? (
                <Resources resources={resources} />
              ) : (
                <h2> {error} </h2>
              )}{" "}
            </div>
          ) : (
            <h2> search your movie </h2>
          )}
        </>
      )}
    </div>
  );
}

export default MovieSearch;
