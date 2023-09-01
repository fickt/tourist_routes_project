import { SPOTS_ERROR, IS_SPOTS_LOADING, SET_SPOTS, SET_MAP_SPOTS } from "modules/card-list/store/spotsActionTypeNames";
import { TLocalRoute } from "utils/localRoutes";

//spots-data actions
export type TSpotsActions =  TSpotsDataLoading | TSpotsDataError | TLocalSpotsDataAction | TGetRoutesAction;

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