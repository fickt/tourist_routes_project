import React, { useCallback, useEffect, useRef, useState } from "react";
import s from "./styles.module.scss";
import PopupIcon from "./assets/popupIcon.svg";
import { Button } from "ui/button/Button";
import { ImageRecommendPopupProps } from "./types";
import { useOnClickOutside } from "./hook/useOnclickOutside";
import classNames from "classnames";

export const ImageRecommendPopup = ({ isPopupOpen, setIsPopupOpen, closePopup }: ImageRecommendPopupProps ) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleKeyPress = useCallback((e: KeyboardEvent) => {
        e.key === "Escape" && setIsPopupOpen(false);
    }, [setIsPopupOpen])

    useEffect(() => {
        if (isPopupOpen) {
            document.addEventListener("keydown", handleKeyPress);

            return () => {
                document.removeEventListener("keydown", handleKeyPress);
            }
        }
    }, [handleKeyPress, isPopupOpen])

    const handleClickOutside = () => setIsPopupOpen(false);
    const modalRef = useRef(null);
    useOnClickOutside(modalRef, handleClickOutside);
    if (!isPopupOpen) return null;

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    };

    const uploadImageInput = () => {
        return (
            <>
                <label className={s.popup__button} htmlFor="fileInput">Выбрать фото</label>
                <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                />
            </>
        )
    }

    return (
        <div className={s.container}>
            <div className={s.popup} ref={modalRef}>
                <h2 className={s.popup__title}>Поиск по фото</h2>
                <div className={s.popup__image}>
                    {selectedFile
                        ? <img className={s.userImage} src={URL.createObjectURL(selectedFile)} alt="Ваше изображение" width={256} height={256} />
                        : <PopupIcon />
                    }
                </div>
                <p className={s.popup__text}>Информация о том, какие форматы фото можно загружать</p>
                <div className="buttons__wrapper">
                    {selectedFile
                        ? <Button extraClass={classNames(`button, ${s.popup__button_green}`)}>Искать</Button>
                        : uploadImageInput()}
                    <Button action={closePopup} extraClass={"button"}>Отмена</Button>
                </div>
            </div>
        </div>
    );
};
