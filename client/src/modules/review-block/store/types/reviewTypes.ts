import {SET_REVIEWS, ADD_REVIEW} from "modules/review-block/store/reviewActionsTypeNames";
import {TUser} from "modules/auth-form";

export type TReviewsState = {
    comments: TReview[] | null,
}

export type TReviewsAction =
    | { type: typeof SET_REVIEWS, payload: TReview[] }
    | { type: typeof ADD_REVIEW, payload: TReview }

export type TReview = {
    id?: number,
    content: string,
    rating: number,
    user?: TUser,
    date?: Date,
}