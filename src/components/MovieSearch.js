import React, { useState } from "react";
//? library impot
import axios from "axios";
//?own components
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
      errors = "Please enter search text";
    }
    setInputError(errors);
    return isValid;
  };

// this function will be called when user click on search icon or click on enter button.
//  in this function we make api request to imdb sever and conditionly send params based on radio button,

  const clickHandler = (text) => {
    setLoader(true);
    setShowCard(false);
    const token = "114529ed";
    const key = searchMethod;
    if (validate()) {
      if (key === "t") {
        axios
          .get("https://www.omdbapi.com", {
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
          .get("https://www.omdbapi.com", {
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
    }

    setTimeout(() => {
      setLoader(false);
    }, 2000);
    setShowCard(true);
  };

  // this function will be called whenever user click on the enter
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
  {/* show loader when fetching */}
      {loader ? (
        <div className="loader">Loading</div>
      ) : (
        <>
          {showCard ? (
            <div>
              {" "}
              {/* shows content when loader is stopped and success is true */}
              {success ? (
                <Resources resources={resources} />
              ) : (
                <h2 style={{color:"red"}}> {error} </h2>
              )}{" "}
            </div>
          ) : (
            null
          )}
        </>
      )}
    </div>
  );
}

export default MovieSearch;
