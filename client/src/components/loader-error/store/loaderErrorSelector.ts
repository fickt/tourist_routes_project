import {RootState} from "storage/reduxTypes";

export const isLoader = (state: RootState) => state.loaderError.is_loader_active;
export const isError = (state: RootState) => state.loaderError.is_error_message;