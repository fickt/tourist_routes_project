import { combineReducers } from "redux";
import { spotsReducer } from "modules/card-list"
import { authReducer } from "modules/auth-form";
import { questionsReducer } from "modules/questions/store/questionsReducer";

export const rootReducer = combineReducers({
    spots: spotsReducer,
    auth: authReducer,
    questions: questionsReducer,
})

