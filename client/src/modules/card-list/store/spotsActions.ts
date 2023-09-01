import { SET_SPOTS, SET_MAP_SPOTS, IS_SPOTS_LOADING, SPOTS_ERROR } from "./spotsActionTypeNames";
import { TSpotsDataError, TSpotsDataLoading } from "modules/card-list/store/types/spotsActionTypes";
import { TMarker } from "components/ymap/constants/markers";
import { TLocalRoute } from "utils/localRoutes";

export const handleSpots = (data: TLocalRoute[]) => {
    return {
        type: SET_SPOTS,
        payload: data
    }
}

export const handleMapSpots = (data: TMarker[]) => {
    return {
        type: SET_MAP_SPOTS,
        payload: data,
    }
}

export const spotsError = (error: string): TSpotsDataError => {
    return {
        type: SPOTS_ERROR,
        payload: error
    }
}

export const isSpotsLoading = (isLoading: boolean): TSpotsDataLoading => {
    return {
        type: IS_SPOTS_LOADING,
        payload: isLoading
    }
}