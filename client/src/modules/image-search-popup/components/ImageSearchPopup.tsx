import React, {ChangeEvent} from "react";
import s from "./styles.module.scss";
import ImgPopupIcon from "modules/image-search-popup/assets/popupIcon.svg";
import {Button} from "ui/button/Button";
import classNames from "classnames";
import {TImageSearchPopupProps} from "./types";
import {imgLoadError, imgSearch} from "modules/image-search-popup/constants/constants";
import {sendImage} from "modules/image-search-popup/api/imageSearchApi";
import {Dispatch} from "redux";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {isError, isLoader, setError} from "components/loader-error";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {setFile} from "modules/image-search-popup/store/imageSearchActions";
import {userFile} from "modules/image-search-popup/store/imageSearchSelectors";
import {RoutePath} from "pages/routeConfig";
import {Link} from "react-router-dom";

export const ImageSearchPopup = ({closePopup}: TImageSearchPopupProps) => {
    const dispatch = useAppDispatch();
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const file = useAppSelector(userFile);
    const MAX_IMAGE_SIZE_MB = 10;

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setError(""));
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            file.size <= MAX_IMAGE_SIZE_MB * 1920 * 1080
                ? dispatch(setFile(file))
                : dispatch(setError(imgLoadError));
        }
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
                    : <ImgPopupIcon/>
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
                        extraClass={classNames("button", s.imagePopup__button_green)}
                        >
                            {imgSearch.btnSearch}
                        </Button>
                    : uploadImageInput()
                }
                <Link to={`${RoutePath.home}`} className="buttons__link">
                    <Button action={closePopup} extraClass="button" disabled={loader}>
                        {imgSearch.btnCancel}
                    </Button>
                </Link>
            </div>
        </div>
    );
};
