import { TQuestionsAction, TRecommended } from "modules/questions/store/types/questionsTypes";
import { IS_RECOMMENDED } from "modules/questions/store/questionsActionsTypeNames";

const initialState: TRecommended = {
    isRecommended: false,
}

export const questionsReducer = (state = initialState, action: TQuestionsAction) => {
    switch(action.type) {
        case IS_RECOMMENDED:
            return {
                ...state,
                isRecommended: action.payload,
            }
        default:
            return state;
    }
}