import {TProfileAction, TProfileState} from "modules/profile/store/types/profileTypes";
import {IS_INPUT_TOUCHED} from "modules/profile/store/profileActionsTypeNames";

const initialState: TProfileState = {
    input_touched: false,
}

export const profileReducer = (state = initialState, action: TProfileAction) => {
    switch (action.type) {
        case IS_INPUT_TOUCHED:
            return {
                ...state,
                input_touched: action.payload,
            }
        default:
            return state;
    }
}