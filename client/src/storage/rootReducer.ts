import {combineReducers} from "redux";
import {spotsReducer} from "modules/card-list"
import {authReducer} from "modules/auth-form";
import {questionsReducer} from "modules/questions/store/questionsReducer";
import {filtersReducer} from "modules/filters/store/filtersReducer";
import {spotItemReducer} from "modules/spot-item/store/spotItemReducer";
import {reviewReducer} from "modules/review-block/store/reviewReducer";
import {favoriteReducer} from "modules/favorites/store/favoriteReducer";
import {popupReducer} from "ui/popup/store/popupReducer";
import {routesPassReducer} from "modules/my-spots/store/routesPassReducer";
import {loaderErrorReducer} from "components/loader-error/store/loaderErrorReducer";

export const rootReducer = combineReducers({
    spots: spotsReducer,
    map_spots: spotsReducer,
    spotId: spotItemReducer,
    chosen_spot: spotsReducer,
    chosen_map_spot: spotsReducer,
    auth: authReducer,
    loaderError: loaderErrorReducer,
    questions: questionsReducer,
    filters: filtersReducer,
    comments: reviewReducer,
    favorites: favoriteReducer,
    popup: popupReducer,
    routesPass: routesPassReducer,
})

