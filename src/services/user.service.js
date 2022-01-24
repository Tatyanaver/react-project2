import {axiosServ} from "./axios.service";
import {urls} from "../config/urls";

export const userService = {
    getAll:()=> axiosServ.get(urls.users).then(value => value.data)
}