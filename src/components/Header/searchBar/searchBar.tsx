import React, {useState} from "react";
import './searchBar.css';

import SearchIcon from '../../../assets/searchIcon.svg';


function SearchBarMovie () {
    const [isActive, setActive] = useState(false);

    const toggleHandler = () => {
        setActive(!isActive);
    }

    return (
        <div className={isActive ? "active searchBar" : "searchBar"}>
            <div className="searchIconButton" onClick={toggleHandler}>
                <img src={SearchIcon} alt="search icon" />
            </div>
            <input type="text" placeholder="Hello World" />
        </div>
    )
}

export default SearchBarMovie;