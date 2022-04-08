import React from "react";

import './headerFleet.css';
import Logo from '../../assets/fleetLogo.svg';
import LogoWhite from '../../assets/fleetLogoWhite.svg';

import SearchBarMovie from "./searchBar/searchBar";
import { Link } from "react-router-dom";

interface HeaderTheme {
    darkMode: Boolean;
}

function HeaderFleetMovie(props: HeaderTheme) {

    const darkMode = props.darkMode;

    function renderDarkMode() {
        return (
            <div className="headerDarkFleet">
                <Link to="/">
                    <img 
                        src={LogoWhite}
                        alt="fleetMovie logo"
                        className="fleetMovieLogo"/>
                </Link>
            </div>
        );
    }

    function renderWhiteMode() {
        return (
            <div className="headerFleet">
                <Link to="/">
                    <img 
                        src={Logo}
                        alt="fleetMovie logo"
                        className="fleetMovieLogo"/>
                </Link>
                <SearchBarMovie/>
            </div>
        );
    }

    if(!darkMode) {
        return renderWhiteMode();
    } else {
        return renderDarkMode();
    }
}

export default HeaderFleetMovie;