import React from "react";
import HomeCarousel from "../Carousel/HomeCarousel/homeCarousel";

import './fleetAppContainer.css'

export default function FleetAppContainer () {
    return (
        <div className="appContainer">
            <h1>Films</h1>
            <HomeCarousel/>
        </div>
    )
}