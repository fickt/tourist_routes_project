import React from "react";
import s from "./style.module.scss";
import { Form, Input } from "antd";
import { FormInput, passwordRules } from "modules/auth-form";

type Props = {
    type: string;
}

export const PasswordInput = ({ type }: Props) => {

    return (
        <>
            <FormInput name="password" rules={passwordRules} placeholder="Пароль"/>
            {type === "registration" && (
                <Form.Item
                    name="confirm"
                    hasFeedback
                    dependencies={["password"]}
                    rules={[
                        {required: true, message: "Повторите пароль!"},
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error("Пароли не совпадают!"));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Повторите пароль" className={s.form__input} />
                </Form.Item>
            )}
        </>
    )
}