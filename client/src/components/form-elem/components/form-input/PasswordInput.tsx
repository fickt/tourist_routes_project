import s from "./styles.module.scss";
import {Form, Input} from "antd";
import {TPasswordInputProps} from "./types";
import {passwordRules} from "components/form-elem/constants/formRules";
import {messages} from "components/form-elem/constants/constants";

export const PasswordInput = ({title, isAuthForm, isRegister, isPasswordChange}: TPasswordInputProps) => {
    const placeholderText = isPasswordChange ? messages.imagineNewPassword : isRegister
        ? messages.imaginePassword
        : messages.passPassword;

    return (
        <>
            {isPasswordChange && (<>
                <Form.Item className="custom__antd__item" name={messages.passwordOld} rules={passwordRules} validateStatus={""} hasFeedback>
                    <div className={s.field}>
                        <span className={s.field__title}>{messages.lastPassword}</span>
                        <Input.Password type="password" placeholder={messages.passLastPassword} className={s.field__input}/>
                    </div>
                </Form.Item>
            </>)}
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
                        {required: true, message: messages.repeatPassword},
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(messages.passwordMissMatch));
                            },
                        }),
                    ]}
                >
                    <div className={s.field}>
                        <span className={s.field__title}>Подтверждение пароля</span>
                        <Input.Password
                            placeholder={isPasswordChange ? messages.repeatNewPassword : messages.repeatPassword}
                            className={s.field__input}
                        />
                    </div>
                </Form.Item>
            )}
        </>
    )
}