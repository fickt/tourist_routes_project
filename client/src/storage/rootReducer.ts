import { combineReducers } from "redux";
import { spotReducer } from "modules/card-list/store/spots-reducer";
import { authReducer } from "modules/auth-form";

export const rootReducer = combineReducers({
    spots: spotReducer,
    auth: authReducer,
})

