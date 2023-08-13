import $api from "../api/index";
import { AxiosResponse } from "axios";
import { API_URL} from "../api/index";
import { AuthResponse } from "modules/auth-form/types/authTypes";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/login", { email, password });
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/registration", { email, password })
    }

    static async logout(): Promise<void> {
        return $api.post("/logout");
    }

    static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
        return $api.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
    }
}