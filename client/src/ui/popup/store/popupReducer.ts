import {TPopupAction, TPopupState} from "ui/popup/store/types/popupTypes";
import {TOGGLE_IMG_POPUP, TOGGLE_REVIEW_POPUP} from "ui/popup/store/popupActionsTypeNames";

const initialState: TPopupState = {
    is_review_popup_open: false,
    is_img_popup_open: false,
}

export const popupReducer = (state = initialState, action: TPopupAction) => {
    switch (action.type) {
        case TOGGLE_REVIEW_POPUP:
            return {
                ...state,
                is_review_popup_open: action.payload
            }
        case TOGGLE_IMG_POPUP:
            return {
                ...state,
                is_img_popup_open: action.payload
            }
        default:
            return state;
    }
}