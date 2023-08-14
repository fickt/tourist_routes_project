import React, { MouseEvent, useEffect, useState } from "react";
import { Form, FormInstance } from "antd";
import s from "./style.module.scss";
import Cookies from "js-cookie";
import AuthService from "modules/auth-form/api/AuthService";
import { PreloaderCar } from "ui/spinner/PreloaderCar";
import { FormInput } from "modules/auth-form/components/form-input/FormInput";
import { emailRules, nicknameRules } from "modules/auth-form/constants/formRules";
import { PasswordInput } from "modules/auth-form/components/form-input/PasswordInput";
import { FormButton } from "modules/auth-form/components/form-button/FormButton";
import { handleErrorMessage, handleLoaderActive, handleSetUser, handleUserAuth, handleUserReg } from "modules/auth-form/store/authActions";
import { useAppDispatch, useAppSelector } from "storage/hook-types";
import { TFormData } from "modules/auth-form/store/types/authTypes";
import { authError, authLoader, isUserReg } from "modules/auth-form/store/authSelectors";
import { ErrorMessage } from "ui/error-message/ErrorMessage";
import { TAuthFormProps } from "./types";
import { FormLink } from "modules/auth-form/components/form-link/FormLink";
import { AppRoutes, RoutePath } from "pages/routeConfig";

export const AuthForm = ({ type }: TAuthFormProps) => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);
    const userReg= useAppSelector(isUserReg);

    useEffect(() => {
        dispatch(handleErrorMessage(null));
    }, [])

    const [form] = Form.useForm<FormInstance>();

    // собрана информация из инпутов, которую ввёл user
    const [formData, setFormData] = useState<TFormData | null>(null);

    // отслеживание полей формы
    const handleFormChange = (changedFields: any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            ...changedFields,
        }));
    };

    // запрос отправляется по кнопке, убрано задвоение запроса
    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        form.submit();
    }

    // отправка запроса (login или reg)
    const sendForm = async (values: any) => {
        userReg
            ? await performAuth(values.email, values.password, false)
            : await performAuth(values.email, values.password, true)
    }

    // структура запроса (login или reg)
    const performAuth = async (email: string, password: string, isRegistration: boolean) => {
        dispatch(handleLoaderActive(true));
        try {
            const response = isRegistration
                ? await AuthService.registration(email, password) //reg
                : await AuthService.login(email, password); // login
            Cookies.set("token", response.data.accessToken);
            Cookies.set("login", response.data.user.email);
            setUserAuth(isRegistration);
            setSuccessMessage(isRegistration, response);
            dispatch(handleSetUser(response.data.user));
        } catch (e) {
            dispatch(handleErrorMessage("Произошла ошибка"));
        } finally {
            dispatch(handleLoaderActive(false));
        }
    }

    // сообщение об успешной авторизации (login или reg)
    const setSuccessMessage = (isRegistration: boolean, response: any) => {
        dispatch(
            isRegistration
                ? handleErrorMessage(`Пользователь ${response.data.user.email} зарегистрирован`)
                : handleErrorMessage(`Вы вошли как ${response.data.user.email}`)
        )
    }

    // пользователь авторизован (login или reg)
    const setUserAuth = (isRegistration: boolean) => {
        dispatch(isRegistration ? handleUserReg(true) : handleUserAuth(true))
    }

    return (
        <Form
            form={form}
            name="basic"
            className={s.form}
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={sendForm}
            onValuesChange={handleFormChange}
        >
            <div className={s.form__inputs}>
                {type === RoutePath[AppRoutes.REGISTRATION] && <FormInput name="name" rules={nicknameRules} placeholder="Имя пользователя" />}
                <FormInput name="email" rules={emailRules} placeholder="E-mail" />
                <PasswordInput type={type} />
                <FormButton
                    value={type === RoutePath[AppRoutes.LOGIN] ? "Войти" : "Зарегистрироваться"}
                    onClick={handleButtonClick}
                    disabled={!form.isFieldsTouched(true) || form.getFieldsError()
                        .filter(({errors}) => errors.length).length > 0
                    }
                />
            </div>
            {type === RoutePath[AppRoutes.LOGIN] && <FormLink link="/forgotPassword" textLink="Забыли пароль?" onClick={null} />}
            {loader && <PreloaderCar />}
            {!loader && (error && <ErrorMessage errorText="Ошибка авторизации" />)}
        </Form>
    )
}