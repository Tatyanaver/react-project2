import {axiosService} from "./axios.service";
import {urls} from "../config";
import {apiKey} from "../config";


export const genresService = {
    getAllGenres: ()=> axiosService.get(`${urls.genres}?api_key=${apiKey}&language=en-US`).then(value=>value.data.genres)}