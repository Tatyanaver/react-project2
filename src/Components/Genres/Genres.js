import React from 'react';
import {useState,useEffect} from "react";
import {genresService} from "../../services/genres.service";
import GenreBadge from "../GenreBadge/GenreBadge";
import classes from "./Genres.modulle.css";


const Genres = () => {
    const [genres,setGenres] = useState([])
    useEffect(()=> {
        genresService.getAllGenres().then(value => setGenres([...value]))},[])
    return (
        <div className={classes.genres}>

            {genres.map (genre => <GenreBadge key={genre.id} genre = {genre}/>)}
        </div>
    );
};

export default Genres;