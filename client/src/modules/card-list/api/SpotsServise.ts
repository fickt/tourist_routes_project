import { AxiosResponse } from "axios";
import { RoutePath } from "pages/routeConfig";
import { TSpotsState } from "modules/card-list/store/types/spotsReducerTypes";
import { api } from "utils/api";

export class SpotsService {
    
    fetchSpots(): Promise<AxiosResponse<TSpotsState>> {
        return api.get<TSpotsState>(RoutePath.spots);
    }
}

export const apiSpots = new SpotsService();