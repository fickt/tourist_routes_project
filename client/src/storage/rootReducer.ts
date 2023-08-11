import { combineReducers } from "redux";
import { spotsReducer } from "modules/card-list"
import { errorMessageReducer, loaderReducer, setUserReducer, userStatusReducer } from "modules/auth-form";

export const rootReducer = combineReducers({
    spots: spotsReducer,
    userStatus: userStatusReducer,
    setUser: setUserReducer,
    errorMessage: errorMessageReducer,
    isLoaderActive: loaderReducer,
})

