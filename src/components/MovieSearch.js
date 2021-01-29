import React, { useState } from "react";
import axios from "axios";
import Resources from "./resources";
import Navbar from "./navbar/index";
import Navbar2 from "./navbar/Navbar2";

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
            setResources(res?.data ?? {});

            if (res.status === 200) {
              setSuccess(true);
              setError("movie not found..");
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
    if (event.keyCode === 13) {
      clickHandler(searchText);
    }
  };

  return (
    <div>
      <Navbar
        handleInputChange={(value) => setSearchText(value)}
        value={searchText}
        handleKeyDown={(event) => handleKeyDown(event)}
        handleClick={() => clickHandler(searchText)}
        handleRedioChange={(value) => setSearchMethod(value)}
        selectedValue={searchMethod}
      />
      <Navbar2 />

      <p style={{ color: "red" }}> {inputError} </p>

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
