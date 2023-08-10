import { combineReducers } from "redux";
import { spotReducer } from "modules/card-list/store/spots-reducer";
import { errorMessageReducer, loaderReducer, setUserReducer, userStatusReducer } from "modules/auth-form";

export const rootReducer = combineReducers({
    spots: spotReducer,
    userStatus: userStatusReducer,
    setUser: setUserReducer,
    errorMessage: errorMessageReducer,
    isLoaderActive: loaderReducer,
})

