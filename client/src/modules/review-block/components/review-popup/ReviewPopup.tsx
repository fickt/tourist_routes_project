import React, {useState, ChangeEvent} from "react";
import {Form, Input, Rate} from "antd";
import {Button} from "ui/button/Button";
import {TReviewPopupProps} from "./types";
import classNames from "classnames";
import s from "./styles.module.scss";
import {useAppSelector} from "storage/hookTypes";
import {authUser} from "modules/auth-form";

export const ReviewPopup = ({spotId, title, closePopup}: TReviewPopupProps) => {

    const [form] = Form.useForm();
    const {TextArea} = Input;
    const [textValue, setTextValue] = useState(null);
    const [ratingValue, setRatingValue] = useState(0);
    const user = useAppSelector(authUser);

    const onFinish = () => {
        //dataToSend будет отправляться на сервер
        const dataToSend = {
            spotId: spotId,
            user: user,
            text: textValue,
            rating: ratingValue,
        };
        form.resetFields();
        setTextValue(null);
        setRatingValue(0);
        closePopup();
    }

    const rateOnChange = (value: number) => setRatingValue(value);
    const textareaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextValue(e.target.value);

    return (
        <div className={s.reviewPopup}>
            <h2 className={s.reviewPopup__title}>{title}</h2>
            <Form className={s.reviewPopup__form} onFinish={onFinish} form={form}>
                <Form.Item name="rating" rules={[{required: true, message: "Укажите рейтинг!"}]}>
                    <Rate allowClear={false} onChange={rateOnChange} value={ratingValue}/>
                </Form.Item>
                <Form.Item name="text" rules={[{required: true, message: "Напишите отзыв!"}]}>
                    <TextArea
                        className={s.reviewPopup__form__textarea}
                        placeholder="Напишите свой отзыв"
                        style={{resize: "none"}}
                        onChange={textareaOnChange}
                    />
                </Form.Item>
                <div className="buttons__wrapper">
                    <Button action={onFinish} extraClass={classNames("button", s.reviewPopup__button_green)}>Сохранить</Button>
                    <Button action={closePopup} extraClass={"button"}>Позже</Button>
                </div>
            </Form>
        </div>
    )
}