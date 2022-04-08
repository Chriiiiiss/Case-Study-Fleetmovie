import React from "react";
import HeaderFleetMovie from "../components/Header/headerFleet";
import FleetAppContainer from "../components/AppContainer/fleetAppContainer";

export default function AppHome () {
    return (
        <div>
            <HeaderFleetMovie darkMode={false}/>
            <FleetAppContainer/>
        </div>
    )
}