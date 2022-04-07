import React from "react";
import './headerFleet.css'

import SearchBarMovie from "./searchBar/searchBar";

function HeaderFleetMovie() {
    return (
        <div className="headerFleet">
            <a className="logoWrapper" href="#">
                <img 
                    src={process.env.PUBLIC_URL + "fleetLogo.svg"}
                    alt="fleetMovie logo"
                    className="fleetMovieLogo"/>
            </a>
            <SearchBarMovie/>
        </div>
    )
}

export default HeaderFleetMovie;