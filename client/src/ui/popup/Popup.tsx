import React, {useCallback, useEffect, useRef} from "react";
import s from "./styles.module.scss";
import {TPopupProps} from "./types";
import {useOnClickOutside} from "hooks/useOnclickOutside";
import {ImageRecommendPopup} from "modules/image-recommend-popup/ImageRecommendPopup";
import {ReviewPopup} from "modules/review-block/components/review-popup/ReviewPopup";

export const Popup = ({spotId, review, image, isPopupOpen, setIsPopupOpen, closePopup}: TPopupProps) => {

    const handleKeyPress = useCallback((e: KeyboardEvent) => {
        e.key === "Escape" && setIsPopupOpen(false);
    }, [setIsPopupOpen]);

    useEffect(() => {
        isPopupOpen && document.addEventListener("keydown", handleKeyPress);

        return () => {
            isPopupOpen && document.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress, isPopupOpen]);

    const imagePopupRef = useRef(null);
    useOnClickOutside(imagePopupRef, () => {
        image && setIsPopupOpen(false);
    });

        return (
            <div className={s.container}>
                <div className={s.popup} ref={imagePopupRef}>
                    {image && (
                        <ImageRecommendPopup
                            title="Поиск по фото"
                            isPopupOpen={isPopupOpen}
                            setIsPopupOpen={setIsPopupOpen}
                            closePopup={closePopup}
                        />
                    )}
                </div>
                <div className={s.popup}>
                    {review && <ReviewPopup title="Оставить отзыв" spotId={spotId} />}
                </div>
            </div>
        );
    };