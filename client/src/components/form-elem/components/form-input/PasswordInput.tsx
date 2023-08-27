import s from "./styles.module.scss";
import { Form, Input } from "antd";
import { TPasswordInputProps } from "./types";
import { passwordRules } from "components/form-elem/constants/formRules";

export const PasswordInput = ({ isAuthForm, isRegister, isPasswordChange }: TPasswordInputProps) => {

    return (
        <>
            <Form.Item name="password" rules={passwordRules} hasFeedback>
                <Input.Password
                    type="password"
                    placeholder={isPasswordChange ? "Придумайте новый пароль" : "Введите пароль"}
                    className={s.form__input}
                />
            </Form.Item>
            {/*confirm password появляется на страницах: "Регистрация" и "Изменить пароль"*/}
            {((isAuthForm && isRegister) || isPasswordChange) && (
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
                    <Input.Password
                        placeholder={isPasswordChange ? "Повторите новый пароль" : "Повторите пароль"}
                        className={s.form__input}
                    />
                </Form.Item>
            )}
        </>
    )
}