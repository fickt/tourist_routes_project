import {RootState} from "storage/reduxTypes";

export const getReviews = (state: RootState) => state.comments.comments;