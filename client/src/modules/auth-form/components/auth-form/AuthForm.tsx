import React, { MouseEvent, useEffect } from "react";
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
import { TFormData } from "modules/auth-form/store/types/authTypes";
import { authError, authLoader, authUser, isUserAuth } from "modules/auth-form/store/authSelectors";
import { ErrorMessage } from "ui/error-message/ErrorMessage";
import { TAuthFormProps } from "./types";
import { FormLink } from "modules/auth-form/components/form-link/FormLink";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { useNavigate } from "react-router-dom";
import { AppRoutes, RoutePath } from "pages/routeConfig";

export const AuthForm = ({ isRegister }: TAuthFormProps) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);
    const isUserReg= useAppSelector(authUser);
    const [form] = Form.useForm<FormInstance>();
    const token = Cookies.get("token");

    useEffect(() => {
        dispatch(handleErrorMessage(null)); // затирает ошибку
        if (token) {
            isUserReg && navigate(RoutePath[AppRoutes.SPOTS]) // перенаправляет на страницу мест
            isUserAuth && navigate(RoutePath[AppRoutes.FAVORITES]) // перенаправляет на страницу избранного
        }
    }, [token])

    useEffect(() => {
        form.resetFields(["email", "password"]); // При переключении окна логин-регистрация, inputs зачищаются
    }, [isRegister])

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
            ? await performAuth(values.nickname, values.email, values.password, true)
            : await performAuth(values.nickname, values.email, values.password, false)
    }

    // запрос (login или reg)
    const performAuth = async (nickname: string, email: string, password: string, isRegistration: boolean) => {
        dispatch(handleLoaderActive("true")); // включение лоадера
        try {
            const response = isRegistration
                ? await AuthService.register(nickname, email, password) // запрос reg
                : await AuthService.login(email, password); // запрос login
            Cookies.set("token", response.data.access_token); // установка токена в куки
            isRegistration ? handleUserReg(true) : handleUserAuth(true) // установка флага что произошла регистрация или логин
            dispatch(handleSetUser(response.data.user)); // установка пользователя
        } catch (e) {
            dispatch(handleErrorMessage(e.response.data.error)) // установка ошибки
        } finally {
            dispatch(handleLoaderActive("false")); // выключение лоадера
        }
    }

    return (
        <Form
            form={form}
            name="basic"
            className={s.form}
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={() => sendForm(form)}
            onValuesChange={handleFormChange}
        >
            <div className={s.form__inputs}>
                {isRegister && <FormInput name="nickname" rules={nicknameRules} placeholder="Имя пользователя" />}
                <FormInput name="email" rules={emailRules} placeholder="E-mail" />
                <PasswordInput isRegister={isRegister} />
                <FormButton
                    value={isRegister ? "Зарегистрироваться" : "Войти"}
                    onClick={handleButtonClick}
                    loader={loader}
                />
            </div>
            {!isRegister && <FormLink link="/forgotPassword" textLink="Забыли пароль?" onClick={null} />}
            {loader === "true" && <PreloaderCar />}
            {loader === "false" && (error && <ErrorMessage errorText={error} />)}
        </Form>
    )
}