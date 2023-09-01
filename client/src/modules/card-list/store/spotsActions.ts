import { GET_LOCAL_SPOTS, GET_SPOT_ROUTES, IS_SPOTS_LOADING, SPOTS_ERROR } from "./spotsActionTypeNames";
import { TLocalSpotsDataAction, TSpotsDataError, TSpotsDataLoading } from "modules/card-list/store/types/spotsActionTypes";
import { TSpotRoutes } from "modules/card-list/types/spotRoutes";
import { TLocalRoute } from "utils/localRoutes";

export const getLocalSpotsAction = (data: TLocalRoute[]): TLocalSpotsDataAction => {
    return {
        type: GET_LOCAL_SPOTS,
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

export const getSpotRoutes = (data: TSpotRoutes) => {
    return {
        type: GET_SPOT_ROUTES,
        payload: data
    }
}