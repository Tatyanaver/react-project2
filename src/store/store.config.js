import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movie.slice";



const store = configureStore({
    reducer:{
        movieReducer: movieReducer,
        // genreReducer: genreReducer,
    }
})
export default store