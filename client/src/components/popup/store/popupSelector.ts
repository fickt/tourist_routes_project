import {RootState} from "storage/reduxTypes";

export const reviewPopupState = (state: RootState) => state.popup.is_review_popup_open;
export const imgPopupState = (state: RootState) => state.popup.is_img_popup_open;