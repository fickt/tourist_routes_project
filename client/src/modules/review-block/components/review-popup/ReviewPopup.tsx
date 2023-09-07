import React, {useState, ChangeEvent, useEffect, memo} from "react";
import {Form, Input, Rate} from "antd";
import {Button} from "ui/button/Button";
import {TReviewPopupProps} from "./types";
import classNames from "classnames";
import s from "./styles.module.scss";
import {handleAuthError} from "modules/auth-form/store/authActions";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {Link} from "react-router-dom";
import {sendReview} from "modules/review-block/api/reviewApi";

export const ReviewPopup = memo(({spotId, title}: TReviewPopupProps) => {

    const dispatch = useAppDispatch();
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
        const fetchData = async () => {
            await sendReview(dispatch, content, rating, spotId, form, setContent, setRating);
        }
        fetchData();
    }

    const rateOnChange = (value: number) => {
        setRating(value);
    }

    const textareaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }

    return (
        <div className={s.reviewPopup}>
            <h2 className={s.reviewPopup__title}>{title}</h2>
            <Form
                name="form"
                className={s.reviewPopup__form}
                onFinish={sendForm}
                form={form}
            >
                <Form.Item name="rating" rules={[{required: true, message: "Укажите рейтинг!"}]}>
                    <Rate allowClear={false} onChange={rateOnChange} value={rating} disabled={loader}/>
                </Form.Item>
                <Form.Item name="text" rules={[{required: true, message: "Напишите отзыв!"}]}>
                    <TextArea
                        className={s.reviewPopup__form__textarea}
                        placeholder="Напишите свой отзыв"
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
                        <Button extraClass={"button"} disabled={loader}>Позже</Button>
                    </Link>
                </div>
            </Form>
            {loader && <PreloaderCar/>}
            {!loader && (error && <ErrorMessage errorText={error}/>)}
        </div>
    )
});