import {AxiosResponse} from "axios";
import {RoutePath} from "pages/routeConfig";
import {api} from "utils/api";
import {TLocalRoute} from "utils/localRoutes";
import {spots} from "modules/card-list/constants/constants";

export class spotsService {
    fetchSpots(): Promise<AxiosResponse<TLocalRoute[]>> {
        return api.get(RoutePath.routes);
    }

    fetchSpotFilter(difficulty: string, category: string): Promise<AxiosResponse<TLocalRoute[]>> {
        const requestPath = (difficulty: string, category: string) => {
            if (difficulty && category)
                return `${RoutePath.routes}?difficulty=${difficulty}&category=${category}`
            if (!difficulty && category)
                return `${RoutePath.routes}?category=${category}`
            if (difficulty && !category)
                return `${RoutePath.routes}?difficulty=${difficulty}`
            return spots;
        }
        return api.get(requestPath(difficulty, category));
    }

    fetchSearchRequest(searchValue: string): Promise<AxiosResponse<TLocalRoute[]>> {
        const requestPath = `${RoutePath.routes}?search=${searchValue}`
        return api.get(requestPath);
    }
}
export const apiSpots = new spotsService();