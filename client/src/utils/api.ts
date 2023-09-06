import axios from "axios";
import Cookies from "js-cookie";

export const AUTH_TOKEN = Cookies.get("token") || null;
export const api = axios.create();

api.defaults.baseURL = "http://app.localhost/api/";
api.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
