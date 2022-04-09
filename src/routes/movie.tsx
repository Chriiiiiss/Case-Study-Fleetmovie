import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieDisplay from "../components/Movie/DisplayMovie/movieDisplay";

import './style/movie.css'
import Logo from '../assets/fleetLogo.svg'


export default function Movie () {
    let params  = useParams();

    const [movieData, setMovieData] = useState({
        backdrop_path: "",
        title: "",
        genres: "",
        vote_average: "",
        release_date: "",
        runtime: "",
        overview: "",
        poster_path: "",
    });

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const apiUrl = "https://api.themoviedb.org/3/movie/" + params.id;

        const fetchMovie = async () => {
            try {
                const res = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
                        "Content-Type": "application/json;charset=utf-8",
                    }
                });

                const resJson = await res.json();
                setMovieData({
                    backdrop_path: resJson["backdrop_path"],
                    title: resJson["title"],
                    genres: resJson["genres"][0]["name"],
                    vote_average: resJson["vote_average"],
                    release_date: resJson["release_date"].split("-")[0],
                    runtime: resJson["runtime"],
                    overview: resJson["overview"],
                    poster_path: resJson["poster_path"],
                });
            } catch (e) {
                console.error("error : ", e);
            }
        }
        fetchMovie();
        setIsLoading(false);


    }, [])


    if(isLoading) {
        return (
            <div className="loadingScreen">
                <div className="logoContainer">
                    <img src={Logo}/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <MovieDisplay 
                    bgMovieUrl={movieData["backdrop_path"]} 
                    movieTitle={movieData["title"]} 
                    movieGenre={movieData["genres"]} 
                    movieVoteAverage={movieData["vote_average"]} 
                    movieReleaseDate={movieData["release_date"].split("-")[0]} 
                    movieRuntime={movieData["runtime"]} 
                    movieOverview={movieData["overview"]} 
                    moviePosterUrl={movieData["poster_path"]}/>
            </div>
        )
    }

}