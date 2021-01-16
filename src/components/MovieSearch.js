import React, { useState } from "react";
import axios from "axios";
import Resources from "./Resources";

function MovieSearch() {
  const [searchText, setSearchText] = useState("");
  const [searchMethod, setSearchMethod] = useState("");
  const [resources, setResources] = useState({});
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");
  const [card, setCard] = useState(false);
  const [loader, setLoader] = useState(false);

  const validate = () => {
    let method = searchMethod;
    let text = searchText;
    let isValid = true;
    let errors = "";
    if (!method) {
      isValid = false;
      errors = "pls select any searchMethod";
    }
    if (!text) {
      isValid = false;
      errors = "pls search your fav movie";
    }
    setInputError(errors);
    return isValid;
  };

  const clickHandler = (text) => {
    setLoader(true);
    const token = "114529ed";
    const key = searchMethod;
    if (validate()) {
      if (key == "i") {
        axios
          .get("http://www.omdbapi.com", {
            params: {
              apikey: token,
              i: text,
            },
          })
          .then((res) => {
            // console.log(res.data);
            setResources(res.data);
          })
          .catch((err) => {
            setError(err);
            //console.log(err)
          });
      } else {
        axios
          .get("http://www.omdbapi.com", {
            params: {
              apikey: token,
              t: text,
            },
          })
          .then((res) => {
            setResources(res.data);
          })
          .catch((err) => {
            setError(err);
            // console.log(err.Error);
          });
      }
    } else {
      alert("something went wrong!");
    }

    setLoader(false);
    setCard(true);
    setSearchText("");
  };

  return (
    <div className="root">
      <div className="label">
        <input
          type="radio"
          name="movie"
          value="i"
          onChange={(e) => setSearchMethod(e.target.value)}
        />
        <label>Search By Id</label>

        <input
          type="radio"
          name="movie"
          value="t"
          onChange={(e) => setSearchMethod(e.target.value)}
        />
        <label>Search By Title </label>

        <p style={{ color: "red" }}> {inputError} </p>
      </div>

      <input
        className="input"
        type="text"
        name="movieName"
        placeholder="i.e. Jurassic Park"
        value={searchText}
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
        <div className="loader">Loading...</div>
      ) : (
        <>
          {card ? (
            <Resources resources={resources} error={error} />
          ) : (
            <h2>Search Your fav movie...</h2>
          )}
        </>
      )}
    </div>
  );
}

export default MovieSearch;
