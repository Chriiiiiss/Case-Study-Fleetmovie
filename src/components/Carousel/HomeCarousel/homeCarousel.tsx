import React, { useEffect, useState } from "react";
import FleetCarousel from "../Carousel/carousel";
import MovieCard from "../../Movie/MovieCard/movieCard";
import { Link } from "react-router-dom";

import './homeCarousel.css'
import Logo from '../../../assets/fleetLogo.svg';

interface HomeCarouselProps {
    sortBy?: string;
    search?: Boolean;
}

export default function HomeCarousel (props: HomeCarouselProps) {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const baseImgUrl = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        let apiUrl = "";

        if(props.search) {
            apiUrl = "https://api.themoviedb.org/3/search/movie?&query=" + props.sortBy;
        } else {

            apiUrl = "https://api.themoviedb.org/3/movie/" + props.sortBy;
        }

        const fetchApi = async () => {
            try {
                const res = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
                        "Content-Type": "application/json;charset=utf-8", 
                    }
                });

                const json = await res.json();
                setMovieList(json.results);
                setIsLoading(false);
            } catch(e) {
                console.error("error: ", e);
            }
        }
        fetchApi();
    }, [props.sortBy]);




    if (isLoading) {
        return (
            <div className="homeCarousel loadingScreen">
                <img className="logoAnimation" src={Logo} alt="Logo" />
            </div>
        )
    } else {
        return (
            <div className="homeCarousel">
                <FleetCarousel>
                    {movieList.map((elem, index) => {
                        return (
                            <Link key={index} to={"/movie/" + elem["id"]}>
                                <MovieCard key={index} movieTitle={elem["title"]} imgUrl={baseImgUrl + elem["poster_path"]}/>
                            </Link>
                        )
                    })}
                </FleetCarousel>
            </div>
        )
    }

}