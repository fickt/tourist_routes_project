import {
    SET_CHOSEN_MAP_SPOT,
    SET_CHOSEN_SPOT,
    SPOTS_ERROR,
    IS_SPOTS_LOADING,
    SET_SPOTS,
    SET_MAP_SPOTS
} from "modules/card-list/store/spotsActionTypeNames";
import {TLocalRoute} from "utils/localRoutes";
import {TMarker} from "utils/serverRoutes";

//spots-data actions
export type TSpotsActions =
    TSpotsDataLoading
    | TSpotsDataError
    | TLocalSpotsDataAction
    | TGetRoutesAction
    | TChosenSpotAction
    | TChosenMapSpotAction;

export type TLocalSpotsDataAction = {
    type: typeof SET_SPOTS,
    payload: TLocalRoute[]
}

export type TSpotsDataError = {
    type: typeof SPOTS_ERROR,
    payload: string
}

export type TSpotsDataLoading = {
    type: typeof IS_SPOTS_LOADING,
    payload: boolean
}

export type TGetRoutesAction = {
    type: typeof SET_MAP_SPOTS,
    payload: TLocalRoute[]
}

export type TChosenSpotAction = {
    type: typeof SET_CHOSEN_SPOT,
    payload: TLocalRoute | null
}

export type TChosenMapSpotAction = {
    type: typeof SET_CHOSEN_MAP_SPOT,
    payload: TMarker | null
}