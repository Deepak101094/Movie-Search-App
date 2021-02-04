import React, { useState } from "react";
//? library import
import axios from "axios";
//?own components
import Resources from "./resources";
import Navbar from "./navbar/index";
import Navbar2 from "./navbar/Navbar2";
import "../App.css";

function MovieSearch() {
  const [searchText, setSearchText] = useState("");
  const [searchMethod, setSearchMethod] = useState("t");
  const [resources, setResources] = useState({});
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [loader, setLoader] = useState(false);

  // this function will be called when user click on search icon or click on enter button.
  //  in this function we make api request to imdb sever and conditionly send params based on radio button,

  const movieSearchHandler = () => {
    if (!searchText || !searchMethod) {
      alert("Please enter Search Text and/or Select Radio button!");
      return;
    }

    setLoader(true);
    setShowCard(false);

    const url = "https://www.omdbapi.com";
    const params = {
      apikey: localStorage.getItem("apiKey"),
      [searchMethod]: searchText,
    };

    axios
      .get(url, {
        params,
      })
      .then((res) => {
        setResources(res?.data ?? {});

        if (res?.data?.Response === "False") {
          setError(res?.data?.Error);
          setLoader(false);
        } else {
          setLoader(false);
          setShowCard(true);
        }
      });
  };

  // this function will be called whenever user click on the enter
  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) movieSearchHandler(searchText);
  };

  return (
    <div>
      <Navbar
        handleInputChange={(value) => setSearchText(value)}
        value={searchText}
        handleKeyDown={handleKeyDown}
        handleClick={movieSearchHandler}
        handleRadioChange={setSearchMethod}
        selectedValue={searchMethod}
      />
      <Navbar2 />

      {loader ? <div className="loader" /> : null}
      {showCard ? <Resources resources={resources} /> : null}
      {error ? <p className="error">{error}</p> : null}
    </div>
  );
}

export default MovieSearch;
