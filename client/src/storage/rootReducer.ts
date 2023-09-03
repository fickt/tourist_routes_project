import {combineReducers} from "redux";
import {spotsReducer} from "modules/card-list"
import {authReducer} from "modules/auth-form";
import {questionsReducer} from "modules/questions/store/questionsReducer";
import {filtersReducer} from "modules/filters/store/filtersReducer";
import {spotItemReducer} from "modules/spot-item/store/spotItemReducer";
import {reviewReducer} from "modules/review-block/store/reviewReducer";

export const rootReducer = combineReducers({
    spots: spotsReducer,
    map_spots: spotsReducer,
    spotId: spotItemReducer,
    chosen_spot: spotsReducer,
    chosen_map_spot: spotsReducer,
    auth: authReducer,
    questions: questionsReducer,
    filters: filtersReducer,
    comments: reviewReducer
})

