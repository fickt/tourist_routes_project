import axios from "axios";
import Cookies from "js-cookie";

export const API_URL = `http://localhost:8080/api/auth`;
export const $api = axios.create({baseURL: API_URL})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
    return config;
})

export default $api;