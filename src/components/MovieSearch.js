import React, { useState } from "react";
import axios from "axios";
import Resources from "./Resources";

function MovieSearch() {
  const [searchText, setSearchText] = useState("");
  const [searchMethod, setSearchMethod] = useState("");
  const [resources, setResources] = useState({});
  const [error,setError] = useState("");
  const [inputError, setInputError] = useState("");

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
          .catch(err => {
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
          .catch(err => {
            setError(err);
          // console.log(err.Error);
          });

      }
    } else {
      alert("something went wrong!");
    }
  };

  return (
    <div className="root">
      <div className="label">
        <label>Search By Id</label>
        <input
          type="radio"
          name="movie"
          value="i"
          onChange={(e) => setSearchMethod(e.target.value)}
        />

        <label>Search By Title </label>
        <input
          type="radio"
          name="movie"
          value="t"
          onChange={(e) => setSearchMethod(e.target.value)}
        />
        <p style={{color:"red"}}> {inputError} </p>
      </div>

      <input
        className="input"
        type="text"
        name="movieName"
        placeholder="i.e. Jurassic Park"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <p style={{color:"red"}}> {inputError} </p>

      <button className="button" onClick={() => clickHandler(searchText)}>
        Search
      </button>

      <Resources resources={resources} error={error} />
    </div>
  );
}

export default MovieSearch;
