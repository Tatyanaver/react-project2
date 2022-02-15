import {axiosService} from "./axios.service";
import {urls} from "../config";
import {apiKey} from "../config";


export const moviesService = {
    getAllMovies: ()=> axiosService.get(`${urls.movies}?api_key=${apiKey}`).then(value=>value.data),
    getMovieById: (id)=>axiosService.get(`${urls.movies}/${id}`).then(value => value.data),}