import { AxiosResponse } from "axios";
import { RoutePath } from "pages/routeConfig";
import { api } from "utils/api";
import { TSpotRoutes } from "modules/card-list//types/spotRoutes";

export class SpotsService {

    fetchSpots(): Promise<AxiosResponse<TSpotRoutes>> {
        return api.get(RoutePath.spots);
    }

    fetchSpotFilter(difficulty:string, category:string): Promise<AxiosResponse<TSpotRoutes>> {

        const requestPath = (difficulty:string, category:string) => {
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

    fetchSearchRequest(searchValue: string): Promise<AxiosResponse<TSpotRoutes>> {
        
        const requestPath = `${RoutePath.spots}?search=${searchValue}`
        return api.get(requestPath);
    }
}

export const apiSpots = new SpotsService();