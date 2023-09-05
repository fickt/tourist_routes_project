import {SET_REVIEWS, ADD_REVIEW} from "modules/review-block/store/reviewActionsTypeNames";
import {TReview} from "utils/localRoutes";

export type TReviewsState = {
    comments: TReview[] | null,
}

export type TReviewsAction =
    | { type: typeof SET_REVIEWS, payload: TReview[] }
    | { type: typeof ADD_REVIEW, payload: TReview }
