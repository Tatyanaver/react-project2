import React, {useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import movieReducer from "../../store/movie.slice";
import {getAllMovies} from "../../store/movie.slice";


const MoviesList = () => {
const {movies,status,error} = useSelector(state=>state['movieReducer'])
 const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllMovies())},[])

    return (
        <div>
            {status==='pending' && <h3>Loading</h3>}
            {error&& <h3>{error}</h3>}
            {movies.map (movie => <MoviesListCard key={movie.id} movie = {movie}/>)}
        </div>
    );
};

export default MoviesList;