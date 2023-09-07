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
import Cookies from "js-cookie";
import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";
import {apiSpots} from "modules/card-list/api/SpotsServise";
import {handleSpots} from "modules/card-list/store/spotsActions";
import {Link} from "react-router-dom";

export const ReviewPopup = ({spotId, title}: TReviewPopupProps) => {

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
            const spot = await reviewService.sendReview(content, rating, spotId);
            const comments = spot.data.comments;
            comments.length > 0 && dispatch(addReview(comments[comments.length - 1]));
            if (spot) {
                const spots: AxiosResponse<TLocalRoute[]> = await apiSpots.fetchSpots();
                dispatch(handleSpots(spots.data));
            }
            form.resetFields();
            setContent(null);
            setRating(0);
            goBack();
        } catch (e: Error | TServerResponse) {
            if (Cookies.get("token")) {
                Object.keys(Cookies.get()).forEach(cookieName => {
                    Cookies.remove(cookieName);
                });
                // костыль, чтобы пользователь перелогинился, по хорошему надо делать refresh token
                window.location.reload();
            }
            dispatch(handleAuthError(e.response.data.error));
        } finally {
            dispatch(handleAuthLoader(false)); // выключить loader
        }
    };

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
                    <Link to={`/spots/${spotId}`} className="buttons__link">
                        <Button extraClass={"button"} disabled={loader}>Позже</Button>
                    </Link>
                </div>
            </Form>
            {loader && <PreloaderCar/>}
            {!loader && (error && <ErrorMessage errorText={error}/>)}
        </div>
    )
}