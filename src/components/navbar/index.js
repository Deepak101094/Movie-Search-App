import React from 'react';
import './Navbar.css';

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
            <div className="radio-button">
                <input
                    id="title"
                    type="radio"
                    name="title"
                    value="t" // this is the value which will be picked up after radio button change
                    checked={selectedValue === 't'} // when this is true it show the title radio button in checked
                    defaultChecked
                    onChange={(event) => handleRedioChange(event.target.value)} // this function is called whenever you change the radion button
                />
                <label for="title">Search By Title </label>
                <input
                    id="id"
                    type="radio"
                    name="id"
                    value="i" // this is the value which will be picked up after radio button change
                    checked={selectedValue === 'i'} // when this is true it show the id radio button in checked
                    onChange={(event) => handleRedioChange(event.target.value)}  // this function is called whenever you change the radion button
                />
                <label for="id">Search By Id</label>
            </div>
            <nav>
                <div className="navbar-inner">
                    <div className="menu">
                        <div className="imdb-logo">IMDb</div>
                        <div className="menu-icon">
                        <ion-icon name="menu-outline" style={{fontSize: "25px"}}></ion-icon>
                        <div className="menu-text">Menu</div>
                        </div>
                    </div>

                    <div className="searchBox">
                        <input
                            type="text"
                            name="movieName"
                            placeholder="Search IDBM"
                            value={value}
                            onKeyDown={(event) => handleKeyDown(event)}
                            onChange={(event) =>
                                handleInputChange(event.target.value)
                            }
                        />
                        <span>
                            <ion-icon
                                name="search-outline"
                                onClick={handleClick}
                            ></ion-icon>
                        </span>
                    </div>
                    <ol>
                        <li>
                            <a href="#">
                                <b>IMDBPro</b>
                            </a>
                        </li>
                        <li style={{ textAlign: 'center' }}>
                            <a href="#">
                                <ion-icon name="add-outline"></ion-icon>{' '}
                                Watchlist
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
