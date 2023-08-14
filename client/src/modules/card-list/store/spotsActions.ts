import { TMarker } from "components/ymap/constants/markers";
import { GET_LOCAL_SPOTS, IS_SPOTS_LOADING, SPOTS_ERROR } from "./spotsActionTypeNames";
import { TLocalSpotsDataAction, TSpotsDataError, TSpotsDataLoading } from "modules/card-list/store/types/spotsActionTypes";


export function getLocalSpotsAction(data:TMarker[]):TLocalSpotsDataAction {
    return {
        type: GET_LOCAL_SPOTS,
        payload: data,
    }
}

export function spotsError(error: string): TSpotsDataError{
    return {
        type: SPOTS_ERROR,
        payload: error        
    }
}

export function isSpotsLoading(isLoading: boolean): TSpotsDataLoading{
    return {
        type: IS_SPOTS_LOADING,
        payload: isLoading        
    }
}