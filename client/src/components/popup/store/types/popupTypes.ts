import {TOGGLE_IMG_POPUP, TOGGLE_REVIEW_POPUP} from "components/popup/store/popupActionsTypeNames";

export type TPopupState = {
    is_review_popup_open: boolean,
    is_img_popup_open: boolean
}

export type TPopupAction =
    { type: typeof TOGGLE_REVIEW_POPUP, payload: boolean }
    | { type: typeof TOGGLE_IMG_POPUP, payload: boolean };
