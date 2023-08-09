import { GET_LOCAL_SPOTS, IS_SPOTS_LOADING, SPOTS_ERROR } from "./spots-action-type-names";
import { TLocalSpotsDataAction, TSpotsDataError, TSpotsDataLoading } from "modules/card-list/store/types/spots-action-types";
import { TMarker } from "modules/ymap/constants/markers";


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