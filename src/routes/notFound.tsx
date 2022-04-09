import React from "react";

import Logo from "../assets/logoGray.svg"
import './style/notFound.css'

export default function NotFound () {
    return (
        <div className="notFoundContainer">
            <img src={Logo} alt="logo gray" />
            <h1>404 Not Found...</h1>
        </div>
    )
}