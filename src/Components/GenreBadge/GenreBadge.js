import React from 'react';
import classes from "./GenreBadge.module.css";


const GenreBadge = ({genre}) => {
const {id,name}=genre
    return (
        <div>
            <div className={classes.genre}>{name}</div>

        </div>
    );
};

export default GenreBadge;