import {TReviewsState, TReviewsAction} from "./types/reviewTypes";
import {SET_REVIEWS, ADD_REVIEW} from "modules/review-block/store/reviewActionsTypeNames";

const initialState: TReviewsState = {
    comments: null,
}

export const reviewReducer = (state = initialState, action: TReviewsAction) => {
    switch (action.type) {
        case SET_REVIEWS:
            return {
                ...state,
                comments: action.payload
            }
        case ADD_REVIEW:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        default:
            return state;
    }
}