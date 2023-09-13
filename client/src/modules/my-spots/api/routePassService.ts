import {AxiosResponse} from "axios";
import {api} from "utils/api";
import {TLocalRoute, TLocalRoutes} from "utils/localRoutes";
import {RoutePath} from "pages/routeConfig";

export class routePassService {

    static async setRoutePass(routeId: number): Promise<AxiosResponse<TLocalRoute>> {
        return api.patch(`${RoutePath.spots}/completed/${routeId}`);
    }

    static async getRoutesPass(): Promise<AxiosResponse<TLocalRoutes>> {
        return api.get(`${RoutePath.spots}/completed`);
    }
}