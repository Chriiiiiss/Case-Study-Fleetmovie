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
                onError={(img) => {
                    img.currentTarget.onerror = null;

                    // On met une petite image de chat quand l'api ne renvoi pas d'image
                    img.currentTarget.src = 'http://placekitten.com/g/200/300'
                }}
            />
            <h2>{props.movieTitle}</h2>
        </div>
    )
};