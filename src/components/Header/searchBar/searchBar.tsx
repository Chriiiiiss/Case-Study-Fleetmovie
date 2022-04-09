import React, {useState} from "react";
import './searchBar.css';

import SearchIcon from '../../../assets/searchIcon.svg';
import SearchResults from "../../SearchResults/searchResults";


function SearchBarMovie () {
    const [isActive, setActive] = useState(false);
    const [searchInput, setSearchInput] = useState("");


    const handleSearchBar = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchInput(event.currentTarget.value);
    }

    const toggleHandler = () => {
        setActive(!isActive);
    }

    return (
        <div className={isActive ? "active searchBar" : "searchBar"}>
            <div className="searchIconButton" onClick={toggleHandler}>
                <img src={SearchIcon} alt="search icon" />
            </div>
            <div className="inputContainer">
                <input 
                type="text"
                placeholder="Search a movie"
                value={searchInput}
                onChange={handleSearchBar}
                />
            </div>
            <SearchResults searchString={searchInput} />
        </div>
    )
}

export default SearchBarMovie;