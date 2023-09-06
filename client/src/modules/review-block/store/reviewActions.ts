import {SET_REVIEWS, ADD_REVIEW} from "modules/review-block/store/reviewActionsTypeNames";
import {TReview} from "modules/review-block/store/types/reviewTypes";

export const setReviews = (payload: TReview[]) => ({
    type: SET_REVIEWS,
    payload: payload,
});

export const addReview = (payload: TReview) => ({
    type: ADD_REVIEW,
    payload: payload,
});