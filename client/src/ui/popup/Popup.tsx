import React, {useCallback, useEffect, useRef} from "react";
import s from "./styles.module.scss";
import {TPopupProps} from "./types";
import {useOnClickOutside} from "hooks/useOnclickOutside";
import {ImageRecommendPopup} from "modules/image-recommend-popup/ImageRecommendPopup";
import {ReviewPopup} from "modules/review-block/components/review-popup/ReviewPopup";

export const Popup = ({spotId, review, image, isPopupOpen, setIsPopupOpen, closePopup}: TPopupProps) => {

    const handleClickOutside = () => setIsPopupOpen(false);
    const modalRef = useRef(null);
    useOnClickOutside(modalRef, handleClickOutside);

    const handleKeyPress = useCallback((e: KeyboardEvent) => {
        e.key === "Escape" && setIsPopupOpen(false);
    }, [setIsPopupOpen])


    useEffect(() => {
        if (isPopupOpen) {
            document.addEventListener("keydown", handleKeyPress);
        }

        return () => {
            if (isPopupOpen) {
                document.removeEventListener("keydown", handleKeyPress);
            }
        };
    }, [handleKeyPress, isPopupOpen]);

    const imagePopup = image && (
        <ImageRecommendPopup
            title="Поиск по фото"
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
            closePopup={closePopup}
        />
    );

    const reviewPopup = review && (
        <ReviewPopup
            title="Оставить отзыв"
            spotId={spotId}
            closePopup={closePopup}
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
        />
    );

    return (
        <div className={s.container}>
            <div className={s.popup} ref={modalRef}>
                {imagePopup}
                {reviewPopup}
            </div>
        </div>
    );
};
