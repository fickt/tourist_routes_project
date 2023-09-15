import {AxiosResponse} from "axios";
import {RoutePath} from "pages/routeConfig";
import {api} from "utils/api";
import {TLocalRoute} from "utils/localRoutes";

export class imageSearchService {

    static async sendImageSearch(file: File): Promise<AxiosResponse<TLocalRoute[]>> {
        const formData = new FormData();
        formData.append("image", file);

        return api.post(`${RoutePath.spots}/find-by-image`, formData);
    }
}