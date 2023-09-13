import {AxiosResponse} from "axios";
import {RoutePath} from "pages/routeConfig";
import {api} from "utils/api";
import {TLocalRoute} from "utils/localRoutes";

export class imageSearchService {

    static async sendImageSearch(content: string): Promise<AxiosResponse<TLocalRoute[]>> {
        return api.post(`${RoutePath.spots}/find-by-image`, {content});
    }
}