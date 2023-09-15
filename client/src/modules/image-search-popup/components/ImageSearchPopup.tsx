import React, {ChangeEvent, useEffect} from "react";
import s from "./styles.module.scss";
import ImgPopupIcon from "modules/image-search-popup/assets/popupIcon.svg";
import {Button} from "ui/button/Button";
import classNames from "classnames";
import {TImageSearchPopupProps} from "./types";
import {imgSearch} from "modules/image-search-popup/constants/constants";
import {sendImage} from "modules/image-search-popup/api/imageSearchApi";
import {Dispatch} from "redux";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {isError, isLoader} from "components/loader-error";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {setFile} from "modules/image-search-popup/store/imageSearchActions";
import {userFile} from "modules/image-search-popup/store/imageSearchSelectors";

export const ImageSearchPopup = ({closePopup}: TImageSearchPopupProps) => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const file = useAppSelector(userFile);

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        files && files.length > 0 && dispatch(setFile(files[0]));
    };

    const uploadImageInput = () => {
        return (
            <>
                <label className={s.imagePopup__button} htmlFor="fileInput">{imgSearch.choosePhoto}</label>
                <input
                    type="file"
                    id="fileInput"
                    accept=".jpg, .bmp, .png"
                    style={{display: "none"}}
                    onChange={handleFileInputChange}
                />
            </>
        )
    }

    const startImgSearch = (dispatch: Dispatch, file: File | null, closePopup: () => void) => {
        file && sendImage(dispatch, file, closePopup);
    }

    const handleClick = () => startImgSearch(dispatch, file, closePopup);

    return (
        <div className={s.imagePopup}>
            <h2 className={s.imagePopup__title}>{imgSearch.popupTitle}</h2>
            <div className={s.imagePopup__image}>
                {file
                    ? <img
                        className={s.imagePopup__image__userImage}
                        src={URL.createObjectURL(file as Blob)}
                        alt={imgSearch.yourImg}
                    />
                    : loader ? <PreloaderCar/> : <ImgPopupIcon/>
                }
            </div>
            {loader && <PreloaderCar/>
                || error && <ErrorMessage errorText={error}/>
                || <p className={s.imagePopup__text}>{imgSearch.formats}</p>
            }
            <div className="buttons__wrapper">
                {file
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
