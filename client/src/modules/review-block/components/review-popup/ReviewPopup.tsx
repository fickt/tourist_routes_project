import React, {useState, ChangeEvent, useEffect} from "react";
import {Form, Input, Rate} from "antd";
import {Button} from "ui/button/Button";
import {TReviewPopupProps} from "./types";
import classNames from "classnames";
import s from "./styles.module.scss";
import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {TServerResponse} from "modules/auth-form/store/types/authTypes";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import {reviewService} from "modules/review-block/api/reviewService";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {addReview} from "modules/review-block/store/reviewActions";

export const ReviewPopup = ({spotId, title, closePopup}: TReviewPopupProps) => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);
    const [form] = Form.useForm();
    const {TextArea} = Input;
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);
    const goBack = () => window.history.back();

    useEffect(() => {
        dispatch(handleAuthError(null));
    }, [])

    const sendForm = (content: string, rating: number, spotId: number) => {
        sendReview(content, rating, spotId);
    }

    const sendReview = async (content: string, rating: number, spotId: number): Promise<void> => {
        dispatch(handleAuthLoader(true)); // включить loader
        try {
            const response = await reviewService.sendReview(content, rating, spotId);
            dispatch(addReview(response.data.comments[0]));
            form.resetFields();
            setContent(null);
            setRating(0);
            goBack();
        } catch (e: Error | TServerResponse) {
            setError(e);
        } finally {
            dispatch(handleAuthLoader(false)); // выключить loader
        }
    };

    const setError = (e: Error | TServerResponse) => {
        e.response
            ? dispatch(handleAuthError(e.response.data.error))
            : dispatch(handleAuthError("Мы не смогли учесть Ваш отзыв:(")); // ошибка 504 (отвалились докер-контейнеры)
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
                className={s.reviewPopup__form}
                onFinish={() => sendForm(content, rating, spotId)}
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
                    <Button action={closePopup} extraClass={"button"} disabled={loader}>Позже</Button>
                </div>
            </Form>
            {loader && <PreloaderCar/>}
            {!loader && (error && <ErrorMessage errorText={error}/>)}
        </div>
    )
}