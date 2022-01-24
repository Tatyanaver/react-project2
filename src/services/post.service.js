import {axiosServ} from "./axios.service";
import {urls} from "../config/urls";

export const postService = {
    getByUserId: (id)=> axiosServ.get(`${urls.posts}?userId=${id}`).then(value => value.data)
}
