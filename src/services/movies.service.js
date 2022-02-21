import {axiosService} from "./axios.service";
import {urls} from "../config";
import {apiKey} from "../config";


export const moviesService = {

    getAllMovies: (page)=> axiosService.get(`${urls.movies}?api_key=${apiKey}&page=${page}`).then(value=>value.data),
    getMovieById: (id)=>axiosService.get(`${urls.movie}/${id}`).then(value => value.data),


}

