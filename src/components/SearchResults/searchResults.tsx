import React, { useEffect } from "react";
import HomeCarousel from "../Carousel/HomeCarousel/homeCarousel";



import './searchResults.css'

interface ISearchResults {
    searchString: string
}

export default function SearchResults (props : ISearchResults) {

    if(props.searchString) {
        return(
            <div className="bgSearchResults">
                <h1>Films</h1>
                <HomeCarousel search={true} sortBy={props.searchString}/>
            </div>

        )
    } else {
        return(null);
    }
}