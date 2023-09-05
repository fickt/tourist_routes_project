import {TLocalRoute} from "utils/localRoutes";
import {TMarker} from "utils/serverRoutes";

export type TSpotsState = {
    data: TLocalRoute[],
    map_data: TMarker[],
    chosen_spot: TLocalRoute | null,
    chosen_map_spot: TMarker | null,
    loading: boolean,
    error: boolean,
    total: number,
}