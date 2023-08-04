import { GET_LOCAL_SPOTS, IS_SPOTS_LOADING, SPOTS_ERROR } from "../action-types";
import { TLocalSpotsDataAction, TSpotsDataError, TSpotsDataLoading } from "types/actions";
import { TMarker } from "components/ymap/markers";


export function getLocalSpotsAction(data:TMarker[]):TLocalSpotsDataAction {
    return {
        type: GET_LOCAL_SPOTS,
        payload: data, //получаем строку успешной авторизации
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