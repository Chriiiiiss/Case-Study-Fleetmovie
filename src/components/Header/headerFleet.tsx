import React from "react";

import './headerFleet.css';
import Logo from '../../assets/fleetLogo.svg';

import SearchBarMovie from "./searchBar/searchBar";

function HeaderFleetMovie() {
    return (
        <div className="headerFleet">
            <a className="logoWrapper" href="#">
                <img 
                    src={Logo}
                    alt="fleetMovie logo"
                    className="fleetMovieLogo"/>
            </a>
            <SearchBarMovie/>
        </div>
    )
}

export default HeaderFleetMovie;