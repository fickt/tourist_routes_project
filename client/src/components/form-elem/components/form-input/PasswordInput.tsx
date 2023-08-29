import s from "./styles.module.scss";
import { Form, Input } from "antd";
import { TPasswordInputProps } from "./types";
import { passwordRules } from "components/form-elem/constants/formRules";

export const PasswordInput = ({ title, isAuthForm, isRegister, isPasswordChange }: TPasswordInputProps) => {

    const placeholderText = isPasswordChange ? "Придумайте новый пароль"
        : isRegister ? "Придумайте пароль" : "Введите пароль";

    return (
        <>
            <Form.Item className="custom__antd__item" name="password" rules={passwordRules} validateStatus={""} hasFeedback>
                <div className={s.field}>
                    <span className={s.field__title}>{title}</span>
                    <Input.Password
                        type="password"
                        placeholder={placeholderText}
                        className={s.field__input}
                    />
                </div>
            </Form.Item>
            {/*confirm password появляется на страницах: "Регистрация" и "Изменить пароль"*/}
            {((isAuthForm && isRegister) || isPasswordChange) && (
                <Form.Item
                    className="custom__antd__item"
                    name="confirm"
                    hasFeedback
                    dependencies={["password"]}
                    validateStatus={""}
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
                    <div className={s.field}>
                        <span className={s.field__title}>Подтверждение пароля</span>
                        <Input.Password
                            placeholder={isPasswordChange ? "Повторите новый пароль" : "Повторите пароль"}
                            className={s.field__input}
                        />
                    </div>
                </Form.Item>
            )}
        </>
    )
}