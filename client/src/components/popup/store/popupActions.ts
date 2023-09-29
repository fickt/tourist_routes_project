import {TOGGLE_REVIEW_POPUP, TOGGLE_IMG_POPUP} from "components/popup/store/popupActionsTypeNames";

export const toggleReviewPopup = (payload: boolean) => ({
    type: TOGGLE_REVIEW_POPUP,
    payload: payload,
});

export const toggleImgPopup = (payload: boolean) => ({
    type: TOGGLE_IMG_POPUP,
    payload: payload,
});