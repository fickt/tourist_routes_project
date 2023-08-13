import { combineReducers } from "redux";
import { spotsReducer } from "modules/card-list"
import { authReducer } from "modules/auth-form";

export const rootReducer = combineReducers({
    spots: spotsReducer,
    auth: authReducer,
})

