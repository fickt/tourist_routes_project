import {IS_ERROR_ACTIVE, IS_LOADER_ACTIVE} from "components/loader-error/store/loaderErrorActionsTypeNames";

export const setError = (payload: string | null) => ({
    type: IS_ERROR_ACTIVE,
    payload: payload,
});

export const setLoader = (payload: boolean) => ({
    type: IS_LOADER_ACTIVE,
    payload: payload,
});