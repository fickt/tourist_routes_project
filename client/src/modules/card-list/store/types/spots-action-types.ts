import { TMarker } from "modules/ymap/constants/markers";
import { SPOTS_ERROR, IS_SPOTS_LOADING, GET_LOCAL_SPOTS } from "modules/card-list/store/spots-action-type-names";

//spots-data
export type TSpotsActions =  TSpotsDataLoading | TSpotsDataError | TLocalSpotsDataAction;


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
