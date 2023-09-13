import {IS_ERROR_ACTIVE, IS_LOADER_ACTIVE} from "components/loader-error/store/loaderErrorActionsTypeNames";
import {TLoaderErrorAction, TLoaderErrorState} from "components/loader-error/store/types/loaderErrorTypes";

const initialState: TLoaderErrorState = {
    is_error_message: null,
    is_loader_active: false,
}

export const loaderErrorReducer = (state = initialState, action: TLoaderErrorAction) => {
    switch (action.type) {
        case IS_ERROR_ACTIVE:
            return {
                ...state,
                error_message: action.payload,
            }
        case IS_LOADER_ACTIVE:
            return {
                ...state,
                is_loader_active: action.payload,
            }
        default:
            return state;
    }
}