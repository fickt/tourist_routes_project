import { TMarker } from "components/ymap/constants/markers";
import { TLocalRoute } from "utils/localRoutes";

export type TSpotsState = {
    data: TLocalRoute[],
    map_data: TMarker[],
    loading: boolean,
    error: boolean,
    total: number
}