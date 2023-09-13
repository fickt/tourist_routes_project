import React, {useCallback, useEffect, useRef} from "react";
import s from "./styles.module.scss";
import {TPopupProps} from "./types";
import {useOnClickOutside} from "hooks/useOnclickOutside";
import {ImageRecommendPopup} from "modules/image-recommend-popup/ImageRecommendPopup";
import {ReviewPopup} from "modules/review-block/components/review-popup/ReviewPopup";

export const Popup = ({spotId, review, image, popup, closePopup}: TPopupProps) => {

    const handleKeyPress = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            popup && closePopup();
        }
    }, [popup]);

    useEffect(() => {
        popup && document.addEventListener("keydown", handleKeyPress);

        return () => {
            popup && document.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress, popup]);

    const imagePopupRef = useRef(null);
    useOnClickOutside(imagePopupRef, () => {
        image && closePopup();
        review && closePopup();
    });

    return (
        <div className={s.container}>
            <div className={s.popup} ref={imagePopupRef}>
                {image && <ImageRecommendPopup closePopup={closePopup}/>}
                {review && <ReviewPopup spotId={spotId} closePopup={closePopup}/>}
            </div>
        </div>
    );
};