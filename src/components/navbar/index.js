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
                    type="radio"
                    name="title"
                    value="t" // this is the value which will be picked up after radio button change
                    checked={selectedValue === 't'} // when this is true it show the title radio button in checked
                    defaultChecked
                    onChange={(event) => handleRedioChange(event.target.value)} // this function is called whenever you change the radion button
                />
                <span>Search By Title </span>
                <input
                    type="radio"
                    name="id"
                    value="i"
                    checked={selectedValue === 'i'}
                    onChange={(event) => handleRedioChange(event.target.value)}
                />
                <span>Search By Id</span>
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
