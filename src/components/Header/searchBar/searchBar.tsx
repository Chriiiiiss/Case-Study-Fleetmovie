import React, {useState} from "react";
import './searchBar.css';

function SearchBarMovie () {
    const [isActive, setActive] = useState(false);

    const toggleHandler = () => {
        setActive(!isActive);
    }

    return (
        <div className={isActive ? "active searchBar" : "searchBar"}>
            <div className="searchIconButton" onClick={toggleHandler}>
                <img src={process.env.PUBLIC_URL + "searchIcon.svg"} alt="search icon" />
            </div>
            <input type="text" placeholder="Hello World" />
        </div>
    )
}

export default SearchBarMovie;