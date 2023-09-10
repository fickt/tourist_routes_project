import {SET_REVIEWS} from "modules/review-block/store/reviewActionsTypeNames";
import {TReview} from "utils/localRoutes";

export type TReviewsState = {
    comments: TReview[] | null,
}

export type TReviewsAction =
    | { type: typeof SET_REVIEWS, payload: TReview[] }
