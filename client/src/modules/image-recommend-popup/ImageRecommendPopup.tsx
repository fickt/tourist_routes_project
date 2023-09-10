import React, {useState, ChangeEvent} from "react";
import s from "./styles.module.scss";
import PopupIcon from "./assets/popupIcon.svg";
import {Button} from "ui/button/Button";
import {TImageRecommendPopupProps} from "./types";
import classNames from "classnames";
import {popupTitle} from "./constants/constants";

export const ImageRecommendPopup = ({closePopup}: TImageRecommendPopupProps) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    };

    const uploadImageInput = () => {
        return (
            <>
                <label className={s.imagePopup__button} htmlFor="fileInput">Выбрать фото</label>
                <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{display: "none"}}
                    onChange={handleFileInputChange}
                />
            </>
        )
    }

    return (
        <div className={s.imagePopup}>
            <h2 className={s.imagePopup__title}>{popupTitle}</h2>
            <div className={s.imagePopup__image}>
                {selectedFile
                    ? <img
                        className={s.imagePopup__image__userImage}
                        src={URL.createObjectURL(selectedFile)}
                        alt="Ваше изображение"
                    />
                    : <PopupIcon/>
                }
            </div>
            <p className={s.imagePopup__text}>Информация о том, какие форматы фото можно загружать</p>
            <div className="buttons__wrapper">
                {selectedFile
                    ? <Button extraClass={classNames(`button, ${s.imagePopup__button_green}`)}>Искать</Button>
                    : uploadImageInput()}
                <Button action={closePopup} extraClass={"button"}>Отмена</Button>
            </div>
        </div>
    );
};
