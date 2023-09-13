import {RootState} from "storage/reduxTypes";

export const authUser = (state: RootState) => state.auth.user;
export const isUserReg = (state: RootState) => state.auth.user_reg;
export const isUserAuth = (state: RootState) => state.auth.user_auth;