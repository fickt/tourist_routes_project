import { TQuestionsAction, TQuestions } from "./types/questionsTypes";
import { IS_RECOMMENDED, START_PASS_QUESTIONS } from "./questionsActionsTypeNames";

const initialState: TQuestions = {
    isRecommended: false,
    startPassQuestions: false,
}

export const questionsReducer = (state = initialState, action: TQuestionsAction) => {
    switch(action.type) {
        case IS_RECOMMENDED:
            return {
                ...state,
                isRecommended: action.payload,
            }
        case START_PASS_QUESTIONS:
            return {
                ...state,
                startPassQuestions: action.payload,
            }
        default:
            return state;
    }
}