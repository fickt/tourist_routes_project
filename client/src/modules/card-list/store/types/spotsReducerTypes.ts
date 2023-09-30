import {TLocalRoute} from "utils/localRoutes";
import {TMarker} from "utils/serverRoutes";

export type TSpotsState = {
    data: TLocalRoute[],
    map_data: TMarker[],
    loading: boolean,
    error: boolean,
    total: number,
}