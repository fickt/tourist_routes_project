import { TMarker } from "components/ymap/constants/markers"
import { TSpotRoutes } from "modules/card-list/types/spotRoutes"

export type TSpotsState = {
    data: TMarker[],
    dataDb: TSpotRoutes,
    loading: boolean,
    error: boolean,
    total: number
}