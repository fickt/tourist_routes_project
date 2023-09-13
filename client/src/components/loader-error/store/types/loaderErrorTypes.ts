import {IS_ERROR_ACTIVE, IS_LOADER_ACTIVE} from "components/loader-error/store/loaderErrorActionsTypeNames";

export type TLoaderErrorState = {
    is_error_message: string | null,
    is_loader_active: boolean,
}

export type TLoaderErrorAction =
    | { type: typeof IS_ERROR_ACTIVE, payload: string | null }
    | { type: typeof IS_LOADER_ACTIVE, payload: boolean }