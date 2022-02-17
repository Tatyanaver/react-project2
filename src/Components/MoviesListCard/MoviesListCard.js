import React from 'react';
import classes from "./MoviesListCard.module.css";

const MoviesListCard = ({movie:{original_title,id,overview, vote_count, release_date, poster_path}}) => {
    return (
        <div className={classes.movie}>
            <div>
                <img src= {`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="poster"></img>

                    <h3>Original title: {original_title}</h3>
                    <p>Overview: {overview} </p>
                    <p>Release date: {release_date} </p>
                    <p>Vote count: {vote_count} </p>

            </div>

        </div>
    );
};

export default MoviesListCard;