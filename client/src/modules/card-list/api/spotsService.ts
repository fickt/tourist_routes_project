import {AxiosResponse} from "axios";
import {RoutePath} from "pages/routeConfig";
import {api} from "utils/api";
import {TLocalRoute} from "utils/localRoutes";

export class spotsService {

    fetchSpots(): Promise<AxiosResponse<TLocalRoute[]>> {
        return api.get(RoutePath.spots);
    }

    fetchSpotFilter(difficulty: string, category: string): Promise<AxiosResponse<TLocalRoute[]>> {
        const requestPath = (difficulty: string, category: string) => {
            if (difficulty && category)
                return `${RoutePath.spots}?difficulty=${difficulty}&category=${category}`
            if (!difficulty && category)
                return `${RoutePath.spots}?category=${category}`
            if (difficulty && !category)
                return `${RoutePath.spots}?difficulty=${difficulty}`
            return RoutePath.spots
        }
        return api.get(requestPath(difficulty, category));
    }

    fetchSearchRequest(searchValue: string): Promise<AxiosResponse<TLocalRoute[]>> {
        const requestPath = `${RoutePath.spots}?search=${searchValue}`
        return api.get(requestPath);
    }
}
export const apiSpots = new spotsService();