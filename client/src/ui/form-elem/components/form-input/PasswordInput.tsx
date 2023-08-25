import s from "./style.module.scss";
import { Form, Input } from "antd";
import { TPasswordInputProps } from "./types";
import { passwordRules } from "ui/form-elem/constants/formRules";

export const PasswordInput = ({ isRegister }: TPasswordInputProps) => {

    return (
        <>
            <Form.Item name="password" rules={passwordRules} hasFeedback>
                <Input.Password
                    type="password"
                    placeholder="Введите пароль"
                    className={s.form__input}
                />
            </Form.Item>
            {isRegister && (
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