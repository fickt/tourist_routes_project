import {TMarker} from "components/ymap/constants/markers";
import {TLocalRoute} from "utils/localRoutes";

export type TSpotsState = {
    data: TLocalRoute[],
    map_data: TMarker[],
    chosen_spot: TLocalRoute | null,
    chosen_map_spot: TMarker | null,
    loading: boolean,
    error: boolean,
    total: number,
}