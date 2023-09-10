import {SET_REVIEWS} from "modules/review-block/store/reviewActionsTypeNames";
import {TReview} from "utils/localRoutes";

export const setReviews = (payload: TReview[]) => ({
    type: SET_REVIEWS,
    payload: payload,
});