import { AxiosResponse } from "axios";
import { RoutePath } from "pages/routeConfig";
import { TSpotsState } from "modules/card-list/store/types/spotsReducerTypes";
import { $apiRoutes } from ".";

export default class SpotsService {
    static fetchSpots(): Promise<AxiosResponse<TSpotsState>> {
        return $apiRoutes.get<TSpotsState>(RoutePath.spots);
    }
}