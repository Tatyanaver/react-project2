import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const photosService= {
    getPhotoById: (id)=>axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}