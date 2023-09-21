import {combineReducers} from "redux";
import {spotsReducer} from "modules/card-list"
import {authReducer} from "modules/auth-form";
import {popupReducer} from "components/popup/store/popupReducer";
import {questionsReducer} from "modules/questions";
import {filtersReducer} from "modules/filters";
import {spotItemReducer} from "modules/spot-item";
import {reviewReducer} from "modules/review-block";
import {favoriteReducer} from "modules/favorites";
import {routesPassReducer} from "modules/my-spots";
import {imageSearchReducer} from "modules/image-search-popup";
import {loaderErrorReducer} from "components/loader-error";
import {profileReducer} from "modules/profile/store/profileReducer";

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
    imgSearchRoutes: imageSearchReducer,
    profile: profileReducer,
})

