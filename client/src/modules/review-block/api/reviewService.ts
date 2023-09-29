import {AxiosResponse} from "axios";
import {api} from "utils/api";
import {TLocalRoute} from "utils/localRoutes";
import {RoutePath} from "pages/routeConfig";

export class reviewService {

    static async sendReview(content: string, rating: number, routeId: number): Promise<AxiosResponse<TLocalRoute>> {
        return api.post(`${RoutePath.routes}/${routeId}/comment`, {content, rating});
    }
}