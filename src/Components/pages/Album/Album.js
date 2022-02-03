import React from 'react';
import {Link, Outlet} from "react-router-dom";

import classes from './Album.module.css';

const Album = ({album}) => {
    const {id,userId,title}=album
    return (
        <div className={classes.album}>
            <div>
                <p>id: {id}</p>
                <p>userId: {userId}</p>
                <p>title: {title}</p>
            </div>
            <Link to={`${id.toString()}/photos`}><button className={classes.photo_btn}>Photos</button>
                </Link>
            <div><Outlet/></div>
        </div>

    );
};

export default Album;