import React, { useEffect, useRef, useState } from "react";
import FleetCarousel from "../Carousel/carousel";
import MovieCard from "../../Movie/MovieCard/movieCard";

import './homeCarousel.css'
import { Link } from "react-router-dom";

interface HomeCarouselProps {
    sortBy: string;
}

interface MovieCarousel {
    movieId: string;
    movieTitle: string;
    moviePosterUrl: string;
}

export default function HomeCarousel (props: HomeCarouselProps) {
    const [movieList, setMovieList] = useState([]);
    const baseImgUrl = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        const apiUrl = "https://api.themoviedb.org/3/movie/" + props.sortBy;

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
    }, []);

    return (
        <div className="homeCarousel">
            {/* <div className="ArrowLeftImg">
                <img src={process.env.PUBLIC_URL + 'arrowIcon.svg'} alt="Left Arrow" />
            </div> */}
            <FleetCarousel>
                {movieList.map((elem) => {
                    console.log(elem);
                    return (
                        <Link to={"/movie/" + elem["id"]}>
                            <MovieCard movieTitle={elem["title"]} imgUrl={baseImgUrl + elem["poster_path"]}/>
                        </Link>
                    )
                })}
                {/* <Link to="/movie/">
                    <MovieCard movieTitle={"Aladeux"} imgUrl={"https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg"}/>
                </Link> */}
            </FleetCarousel>
            {/* <div className="ArrowRightImg">
                <img src={process.env.PUBLIC_URL + 'arrowIcon.svg'} alt="Left Arrow" />
            </div> */}
        </div>
    )
}