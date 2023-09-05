import {AxiosResponse} from "axios";
import {RoutePath} from "pages/routeConfig";
import {api} from "utils/api";
import {TLocalRoute} from "utils/localRoutes";

export class reviewService {

    static async sendReview(content: string, rating: number, routeId: number): Promise<AxiosResponse<TLocalRoute>> {
        return api.post(`${RoutePath.spots}/${routeId}/comment`, {content, rating});
    }
}