import React from 'react';

import classes from "./Photo.module.css";

const Photo = ({photo}) => {
    const {albumId,id,title,thumbnailUrl}=photo
    return (
        <div className={classes.photos}>
            <div className={classes.description}>
                <div>Album id:{albumId}</div>
                <div>id: {id}</div>
                <div>Title {title}</div>
            </div>

            <div>
                <img src={thumbnailUrl} className={classes.image}></img>
            </div>


        </div>
    );
};

export default Photo;