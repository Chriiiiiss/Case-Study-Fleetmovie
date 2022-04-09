import React, { useEffect, useRef, useState } from "react";
import FleetCarousel from "../Carousel/carousel";
import MovieCard from "../../Movie/MovieCard/movieCard";

import './homeCarousel.css'
import { Link } from "react-router-dom";

interface HomeCarouselProps {
    sortBy?: string;
    search?: Boolean;
}

export default function HomeCarousel (props: HomeCarouselProps) {
    const [movieList, setMovieList] = useState([]);
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
            } catch(e) {
                console.error("error: ", e);
            }
        }
        fetchApi();
    }, [props.sortBy]);

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