import React, {useState, ChangeEvent} from "react";
import s from "./styles.module.scss";
import ImgPopupIcon from "modules/image-search-popup/assets/popupIcon.svg"
import {Button} from "ui/button/Button";
import classNames from "classnames";
import {TImageSearchPopupProps} from "./types";
import {imgSearch} from "modules/image-search-popup/constants/constants";
import {sendImage} from "modules/image-search-popup/api/imageSearchApi";
import {Dispatch} from "redux";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {authLoader} from "modules/auth-form/store/authSelectors";
import {PreloaderCar} from "ui/preloader/PreloaderCar";

export const ImageSearchPopup = ({closePopup}: TImageSearchPopupProps) => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        files && files.length > 0 && setSelectedFile(files[0]);
    };

    const uploadImageInput = () => {
        return (
            <>
                <label className={s.imagePopup__button} htmlFor="fileInput">{imgSearch.choosePhoto}</label>
                <input
                    type="file"
                    id="fileInput"
                    accept=".jpg, .jpeg, .png, .bmp, .ppm, .tif, .tiff"
                    style={{display: "none"}}
                    onChange={handleFileInputChange}
                />
            </>
        )
    }

    const startImgSearch = (dispatch: Dispatch, selectedFile: string) => {
        const sendData = async () => {
            await sendImage(dispatch, selectedFile);
        }
        selectedFile && sendData();
    }

    const handleClick = () => {
        startImgSearch(dispatch, selectedFile)
    }

    return (
        <div className={s.imagePopup}>
            <h2 className={s.imagePopup__title}>{imgSearch.popupTitle}</h2>
            <div className={s.imagePopup__image}>
                {selectedFile
                    ? <img
                        className={s.imagePopup__image__userImage}
                        src={URL.createObjectURL(selectedFile)}
                        alt={imgSearch.yourImg}
                    />
                    : loader ? <PreloaderCar/> : <ImgPopupIcon/>
                }
            </div>
            <p className={s.imagePopup__text}>{imgSearch.formats}</p>
            <div className="buttons__wrapper">
                {selectedFile
                    ? <Button
                        action={handleClick}
                        disabled={loader}
                        extraClass={classNames(`button, ${s.imagePopup__button_green}`)}
                    >
                        {imgSearch.btnSearch}
                    </Button>
                    : uploadImageInput()}
                <Button action={closePopup} extraClass={"button"} disabled={loader}>
                    {imgSearch.btnCancel}
                </Button>
            </div>
        </div>
    );
};
