import React, { useRef } from "react";
import FleetCarousel from "../Carousel/carousel";
import MovieCard from "../../Movie/MovieCard/movieCard";

import './homeCarousel.css'
import { Link } from "react-router-dom";

export default function HomeCarousel () {
    return (
        <div className="homeCarousel">
            {/* <div className="ArrowLeftImg">
                <img src={process.env.PUBLIC_URL + 'arrowIcon.svg'} alt="Left Arrow" />
            </div> */}
            <FleetCarousel>
                <Link to="/movie">
                    <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
                </Link>
                <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
                <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
                <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
                <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
                <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
                <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
                <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
                <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
            </FleetCarousel>
            {/* <div className="ArrowRightImg">
                <img src={process.env.PUBLIC_URL + 'arrowIcon.svg'} alt="Left Arrow" />
            </div> */}
        </div>
    )
}