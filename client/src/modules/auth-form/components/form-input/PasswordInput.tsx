import React from "react";
import s from "./style.module.scss";
import { Form, Input } from "antd";
import { passwordRules } from "modules/auth-form/constants/formRules";
import { TPasswordInputProps } from "./types";

export const PasswordInput = ({ type }: TPasswordInputProps) => {

    return (
        <>
            <Form.Item name="password" rules={passwordRules} hasFeedback>
                <Input.Password
                    type="password"
                    placeholder="Пароль"
                    className={s.form__input}
                />
            </Form.Item>
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