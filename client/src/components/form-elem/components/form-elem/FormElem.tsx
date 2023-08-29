import React, { MouseEvent, useEffect } from "react";
import s from "./styles.module.scss";
import { PreloaderCar } from "ui/preloader/PreloaderCar";
import { ErrorMessage } from "ui/error-message/ErrorMessage";
import { Form, FormInstance } from "antd";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { authError, authLoader } from "modules/auth-form/store/authSelectors";
import { useAuth } from "modules/auth-form/api/useAuth";
import { handleAuthError } from "modules/auth-form/store/authActions";
import { TFormData, TFormProps } from "components/form-elem/types";
import { FormInput } from "components/form-elem/components/form-input/FormInput";
import { emailRules, nicknameRules, passwordRules } from "components/form-elem/constants/formRules";
import { PasswordInput } from "components/form-elem/components/form-input/PasswordInput";
import { FormButton } from "components/form-elem/components/form-button/FormButton";
import { RememberMe } from "components/form-elem/components/remember-me/RememberMe";
import { TServerResponse } from "modules/auth-form/store/types/authTypes";

export const FormElem = ({ isAuthForm, isRegister, isInfoChange, isPasswordChange }: TFormProps) => {

    const dispatch = useAppDispatch();
    const [form] = Form.useForm<FormInstance>();
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);
    const { authenticate  } = useAuth();

    useEffect(() => {
        dispatch(handleAuthError(null));
        form.resetFields();
    }, [isRegister]);

    // отслеживание полей формы
    const handleFormChange = (changedFields: TFormData | null) => (prevFormData: TFormData | null) => ({
        ...prevFormData,
        ...changedFields
    });

    // запрос отправляется по кнопке, убрано задвоение запроса
    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        form.submit();
    }

    // отправка запроса (login или reg)
    const sendForm = async (formInstance: FormInstance) => {
        const values = formInstance.getFieldsValue();
        isRegister
            ? await authenticate(values.nickname, values.email, values.password, true)
            : await authenticate(values.nickname, values.email, values.password, false)
    }

    const handleFormSubmit = async () => {
        try {
            await form.validateFields();
            sendForm(form);
        } catch (error: Error | TServerResponse) {
            dispatch(handleAuthError(error.response.data.error))
        }
    };

    const renderFormInputs = () => {
        return (
            <div className={s.form__inputs}>
                {isInfoChange
                    ? <FormInput name="nickname" title="Никнейм" rules={nicknameRules} placeholder="Никнейм" />
                    : isRegister && <FormInput name="nickname" title="Никнейм" rules={nicknameRules} placeholder="Имя пользователя" />
                }
                {!isPasswordChange && <FormInput name="email" title="E-mail" rules={emailRules} placeholder={isInfoChange ? "nik@vk.com" : "Введите e-mail"} />}
                {isPasswordChange && <FormInput name="password_old" title="Прошлый пароль" rules={passwordRules} placeholder="Введите прошлый пароль" />}
                {(!isInfoChange || isPasswordChange)
                    && <PasswordInput
                        title={isPasswordChange ? "Новый пароль" : "Пароль"}
                        isAuthForm={isAuthForm}
                        isRegister={isRegister}
                        isPasswordChange={isPasswordChange}
                    />
                }
            </div>
        );
    };

    return (
        <Form
            className={s.form}
            form={form}
            name="basic"
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={handleFormSubmit}
            onValuesChange={handleFormChange}
        >
            <div className={s.form__inputs}>
                {renderFormInputs()}
                {!isRegister && <RememberMe />}
            </div>
            <FormButton
                value={(isInfoChange || isPasswordChange) ? "Сохранить" : (isRegister ? "Зарегистрироваться" : "Войти")}
                onClick={handleButtonClick}
                loader={loader as boolean}
            />
            {loader && <PreloaderCar />}
            {!loader && (error && <ErrorMessage errorText={error} />)}
        </Form>
    )
}