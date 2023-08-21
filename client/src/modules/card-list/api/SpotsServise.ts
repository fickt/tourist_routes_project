import { AxiosResponse } from "axios";
import { RoutePath } from "pages/routeConfig";
import { TSpotsState } from "modules/card-list/store/types/spotsReducerTypes";
import { api } from "utils/api";
import { TSpotRoutes } from "modules/card-list//types/spotRoutes";

export class SpotsService {
    
    fetchSpots(): Promise<AxiosResponse<TSpotRoutes>> {
        return api.get<TSpotsState>(RoutePath.spots);
    }
}

export const apiSpots = new SpotsService();