import React from "react";

import './movieCard.css'

interface MovieCardProps {
    movieTitle: string;
    imgUrl: string;
} 

export default function MovieCard (props: MovieCardProps) {
    return (
        <div className="movieCard">
            <img
                src={props.imgUrl}
                alt={props.movieTitle}
                className="posterMovie"
            />
            <h2>{props.movieTitle}</h2>
        </div>
    )
};