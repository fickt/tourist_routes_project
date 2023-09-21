import {IS_INPUT_TOUCHED} from "modules/profile/store/profileActionsTypeNames";

export type TProfileState = {input_touched: boolean}
export type TProfileAction = {type: typeof IS_INPUT_TOUCHED, payload: boolean};