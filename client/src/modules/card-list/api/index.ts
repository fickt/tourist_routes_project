import axios from "axios";
// import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
// import { TAuthResponse } from "modules/auth-form/store/types/authTypes";
// import { handleErrorMessage } from "modules/auth-form/store/authActions";

export const API_URL = `http://localhost:8080/api/`;
export const $apiRoutes = axios.create({baseURL: API_URL})

$apiRoutes.interceptors.request.use((config) => {
    return config;
})


