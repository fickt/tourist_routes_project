import React, {useState, ChangeEvent, useEffect, memo} from "react";
import {Form, Input, Rate} from "antd";
import {Button} from "ui/button/Button";
import {TReviewPopupProps} from "./types";
import classNames from "classnames";
import s from "./styles.module.scss";
import Cookies from "js-cookie";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {Link, useNavigate} from "react-router-dom";
import {sendReview} from "modules/review-block/api/reviewApi";
import {constants} from "modules/review-block/components/constants/constants";
import {RoutePath} from "pages/routeConfig";
import {isError, isLoader, setError} from "components/loader-error";
import {imageSearchRoutes} from "modules/image-search-popup";

export const ReviewPopup = memo(({spotId, closePopup}: TReviewPopupProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const searchRoutesByImage = useAppSelector(imageSearchRoutes);
    const [form] = Form.useForm();
    const {TextArea} = Input;
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);
    const [isNotTrim, setIsNotTrim] = useState(false);

    useEffect(() => {
        dispatch(setError(null));
    }, [])

    const sendForm = () => {
        if (Cookies.get("token") ) {
            const fetchData = async () => {
                const trimmedContent = content.trim();
                if (trimmedContent.length) {
                    await sendReview(dispatch, trimmedContent, rating, spotId, form, setContent, setRating, closePopup, searchRoutesByImage, redirectToSpotPage);
                }
                setIsNotTrim(true);
            }
            fetchData();
        } else {
            navigate(RoutePath.auth_login);
        }
    }

    const rateOnChange = (value: number) => setRating(value);
    const textareaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
    const redirectToSpotPage = () => navigate(RoutePath.spotId);

    return (
        <div className={s.reviewPopup}>
            <h2 className={s.reviewPopup__title}>{constants.popupTitle}</h2>
            <Form name={constants.form} className={s.reviewPopup__form} onFinish={sendForm} form={form}>
                <Form.Item name={constants.rating} rules={[{required: true, message: constants.ratingRule}]}>
                    <Rate allowClear={false} onChange={rateOnChange} value={rating} disabled={loader}/>
                </Form.Item>
                <Form.Item name={constants.text} rules={[{
                    required: true,
                    message: isNotTrim ? constants.textareaTrimText : constants.textareaRule
                }]}>
                    <TextArea
                        maxLength={5000}
                        className={s.reviewPopup__form__textarea}
                        placeholder={constants.textareaText}
                        style={{resize: "none"}}
                        onChange={textareaOnChange}
                        disabled={loader}
                    />
                </Form.Item>
                <div className="buttons__wrapper">
                    <div className="buttons__link">
                        <Button
                            action={() => form.submit()}
                            extraClass={classNames("button", "button_green")}
                            disabled={loader}
                        >
                            {constants.save}
                        </Button>
                    </div>
                    <Link to={`${constants.spots}:${spotId}`} className="buttons__link">
                        <Button action={closePopup} extraClass="button" disabled={loader}>
                            {constants.later}
                        </Button>
                    </Link>
                </div>
            </Form>
            {loader && <PreloaderCar/>}
            {!loader && (error && <ErrorMessage errorText={error}/>)}
        </div>
    )
});