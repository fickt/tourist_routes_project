import {RootState} from "storage/reduxTypes";

export const ratingSortSelectors = (state: RootState) => state.ratingSort.rating;
