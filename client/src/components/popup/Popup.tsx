import React, {useCallback, useEffect, useRef} from "react";
import s from "./styles.module.scss";
import {useOnClickOutside} from "hooks/useOnclickOutside";
import {ImageSearchPopup} from "modules/image-search-popup";
import {ReviewPopup} from "modules/review-block";
import {TPopupProps} from "components/popup/types";

export const Popup = ({spotId, review, image, popup, closePopup}: TPopupProps) => {
    const imagePopupRef = useRef(null);

    const handleKeyPress = useCallback((e: KeyboardEvent) => {
        e.keyCode === 27 && popup && closePopup();
    }, [popup]);

    useEffect(() => {
        popup && document.addEventListener("keydown", handleKeyPress);
        return () => {
            popup && document.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress, popup]);

    useOnClickOutside(imagePopupRef, () => {
        image && closePopup();
        review && closePopup();
    });

    return (
        <div className={s.container}>
            <div className={s.popup} ref={imagePopupRef}>
                {image && <ImageSearchPopup closePopup={closePopup}/>}
                {review && <ReviewPopup spotId={spotId} closePopup={closePopup}/>}
            </div>
        </div>
    );
};