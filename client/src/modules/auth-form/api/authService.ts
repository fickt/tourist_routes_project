import {AxiosResponse} from "axios";
import {RoutePath} from "pages/routeConfig";
import {TAuthResponse, TLogoutResponse} from "modules/auth-form/store/types/authTypes";
import {api} from "utils/api";

export class authService {
    static async login(email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        return api.post(RoutePath.auth_login, {email, password});
    }

    static async register(nickname: string, email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        return api.post(RoutePath.auth_register, {nickname, email, password});
    }

    static async logout(): Promise<AxiosResponse<TLogoutResponse>> {
        return api.post(RoutePath.auth_logout);
    }
}