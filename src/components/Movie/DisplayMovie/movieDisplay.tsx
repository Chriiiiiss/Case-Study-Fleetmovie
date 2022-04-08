import React from "react";
import HeaderFleetMovie from "../../Header/headerFleet";

import './movieDisplay.css'

interface MovieDisplayProps{
    bgMovieUrl: string;
    movieTitle: string;
    movieGenre: string;
    movieVoteAverage: string;
    movieReleaseDate: string;
    movieRuntime: string;
    movieOverview: string;
    moviePosterUrl: string;
}

export default function MovieDisplay (props: MovieDisplayProps) {

    const bgMovieUrl = "https://image.tmdb.org/t/p/original" + props.bgMovieUrl
    const bgMoviePoster = "https://image.tmdb.org/t/p/original/" + props.moviePosterUrl
    return (
        <div className="movieDisplayApp">
            <HeaderFleetMovie darkMode={true}/>
            <img className="bgImg" src={bgMovieUrl} alt="Background Movie Image" />
            <div className="movieContainer">
                <div className="movieDisplay">
                    <h1>{props.movieTitle}</h1>
                    <div className="movieInfo">
                        <p className="movieType">{props.movieGenre}</p>
                        <p className="movieRate">{props.movieVoteAverage}/10</p>
                    </div>
                    <div className="dateAndTime">
                        <p>{props.movieReleaseDate}</p>
                        <p>{props.movieRuntime} minutes</p>
                    </div>
                    <p className="movieDesc">{props.movieOverview}</p>
                </div>
                <img className="imgPoster" src={bgMoviePoster} alt="Movie Poster" />
            </div>
        </div>
    )
}