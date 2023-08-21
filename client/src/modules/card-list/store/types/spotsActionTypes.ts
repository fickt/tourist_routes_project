import { TMarker } from "components/ymap/constants/markers";
import { SPOTS_ERROR, IS_SPOTS_LOADING, GET_LOCAL_SPOTS, GET_SPOT_ROUTES } from "modules/card-list/store/spotsActionTypeNames";
import { TSpotRoutes } from "modules/card-list/types/spotRoutes";

//spots-data actions
export type TSpotsActions =  TSpotsDataLoading | TSpotsDataError | TLocalSpotsDataAction | TGetRoutesAction;

export type TLocalSpotsDataAction = {
    type: typeof GET_LOCAL_SPOTS,
    payload: TMarker[]   
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
    type: typeof GET_SPOT_ROUTES,
    payload: TSpotRoutes
}

