import React from 'react';
import {useState,useEffect} from "react";
import {genresService} from "../../services/genres.service";
import GenreBadge from "../GenreBadge/GenreBadge";
import MoviesListCard from "../MoviesListCard/MoviesListCard";


const Genres = () => {
    const [genres,setGenres] = useState([])
    useEffect(()=> {
        genresService.getAllGenres().then(value => setGenres([...value]))},[])
    return (
        <div>
            {genres.map (genre => <GenreBadge key={genre.id} genre = {genre}/>)}
        </div>
    );
};

export default Genres;