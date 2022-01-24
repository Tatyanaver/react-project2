import axios from "axios";
import baseUrl from "../config/urls";

export const axiosServ = axios.create({
    baseURL:baseUrl
});