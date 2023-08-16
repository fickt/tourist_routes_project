import { RootState } from "storage/reduxTypes";

export const authLoader = (state:RootState) => state.auth.is_loader_active;
export const authError = (state:RootState) => state.auth.error_message;
export const authUser = (state:RootState) => state.auth.user;
export const isUserReg = (state:RootState) => state.auth.user_reg;
export const isUserAuth = (state:RootState) => state.auth.user_auth;