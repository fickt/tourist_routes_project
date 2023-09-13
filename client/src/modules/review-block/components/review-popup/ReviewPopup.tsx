import React, {useState, ChangeEvent, useEffect, memo} from "react";
import {Form, Input, Rate} from "antd";
import {Button} from "ui/button/Button";
import {TReviewPopupProps} from "./types";
import classNames from "classnames";
import s from "./styles.module.scss";
import Cookies from "js-cookie";
import {handleAuthError} from "modules/auth-form/store/authActions";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {Link, useNavigate} from "react-router-dom";
import {sendReview} from "modules/review-block/api/reviewApi";
import {buttonText, elemName, popupTitle, reviewForm} from "modules/review-block/components/constants/constants";
import {RoutePath} from "pages/routeConfig";

export const ReviewPopup = memo(({spotId, closePopup}: TReviewPopupProps) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);
    const [form] = Form.useForm();
    const {TextArea} = Input;
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);

    useEffect(() => {
        dispatch(handleAuthError(null));
    }, [])

    const sendForm = () => {
        if (Cookies.get("token")) {
            const fetchData = async () => {
                await sendReview(dispatch, content, rating, spotId, form, setContent, setRating, closePopup);
                navigate(`/spots/${spotId}`);
            }
            fetchData();
        } else {
            navigate(RoutePath.auth_login);
        }
    }

    const rateOnChange = (value: number) => setRating(value);
    const textareaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

    return (
        <div className={s.reviewPopup}>
            <h2 className={s.reviewPopup__title}>{popupTitle}</h2>
            <Form
                name={elemName.form}
                className={s.reviewPopup__form}
                onFinish={sendForm}
                form={form}
            >
                <Form.Item name={elemName.rating} rules={[{required: true, message: reviewForm.ratingRule}]}>
                    <Rate allowClear={false} onChange={rateOnChange} value={rating} disabled={loader}/>
                </Form.Item>
                <Form.Item name={elemName.text} rules={[{required: true, message: reviewForm.textareaRule}]}>
                    <TextArea
                        className={s.reviewPopup__form__textarea}
                        placeholder={reviewForm.textareaText}
                        style={{resize: "none"}}
                        onChange={textareaOnChange}
                        disabled={loader}
                    />
                </Form.Item>
                <div className="buttons__wrapper">
                    <Button
                        action={() => form.submit()}
                        extraClass={classNames("button", s.reviewPopup__button_green)}
                        disabled={loader}
                    >
                        Сохранить
                    </Button>
                    <Link to={`/spots/${spotId}`} className="buttons__link">
                        <Button action={closePopup} extraClass="button" disabled={loader}>{buttonText}</Button>
                    </Link>
                </div>
            </Form>
            {loader && <PreloaderCar/>}
            {!loader && (error && <ErrorMessage errorText={error}/>)}
        </div>
    )
});