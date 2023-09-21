import {IS_INPUT_TOUCHED} from "modules/profile/store/profileActionsTypeNames";

export const setInputTouched = (payload: boolean) => ({
    type: IS_INPUT_TOUCHED,
    payload: payload,
});