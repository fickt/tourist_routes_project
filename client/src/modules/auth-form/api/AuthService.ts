import { AxiosResponse } from "axios";
import { AppRoutes, RoutePath } from "pages/routeConfig";
import { TAuthResponse } from "modules/auth-form/store/types/authTypes";
import $api from "modules/auth-form/api/index";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        return $api.post<TAuthResponse>(RoutePath[AppRoutes.LOGIN], { email, password });
    }

    static async register(nickname: string, email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        const requestData = { nickname, email, password };
        console.log('Register Request:', requestData);
        return $api.post<TAuthResponse>(RoutePath[AppRoutes.REGISTRATION], { nickname, email, password })
    }

    static async logout(): Promise<void> {
        return $api.post(RoutePath[AppRoutes.LOGOUT]);
    }
}