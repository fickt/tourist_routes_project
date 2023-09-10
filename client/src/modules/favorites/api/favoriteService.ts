import {AxiosResponse} from "axios";
import {RoutePath} from "pages/routeConfig";
import {api} from "utils/api";
import {TLocalRoutes} from "utils/localRoutes";
import {fav} from "modules/favorites/constants/constants";

export class favoriteService {

    static async getUserFavorites(): Promise<AxiosResponse<TLocalRoutes>> {
        return api.get(`${RoutePath.spots}/${fav}`);
    }

    static async addToFavorites(routeId: number): Promise<AxiosResponse<TLocalRoutes>> {
        return api.patch(`${RoutePath.spots}/${fav}/${routeId}`);
    }
}