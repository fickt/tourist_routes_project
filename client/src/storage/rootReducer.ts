import { combineReducers } from "redux";
import { spotsReducer } from "modules/card-list"
import { authReducer } from "modules/auth-form";
import { questionsReducer } from "modules/questions/store/questionsReducer";
import { filtersReducer } from "modules/filters/store/filtersReducer";
import { spotItemReducer } from "modules/spot-item/store/spotItemReducer";

export const rootReducer = combineReducers({
    spots: spotsReducer,
    map_spots: spotsReducer,
    spotId: spotItemReducer,
    auth: authReducer,
    questions: questionsReducer,
    filters: filtersReducer
})

