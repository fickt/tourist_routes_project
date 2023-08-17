import React, { MouseEvent, useEffect } from "react";
import { Form, FormInstance } from "antd";
import s from "./style.module.scss";
import Cookies from "js-cookie";
import { PreloaderCar } from "ui/spinner/PreloaderCar";
import { FormInput } from "modules/auth-form/components/form-input/FormInput";
import { emailRules, nicknameRules } from "modules/auth-form/constants/formRules";
import { PasswordInput } from "modules/auth-form/components/form-input/PasswordInput";
import { FormButton } from "modules/auth-form/components/form-button/FormButton";
import { TFormData } from "modules/auth-form/store/types/authTypes";
import { ErrorMessage } from "ui/error-message/ErrorMessage";
import { TAuthFormProps } from "./types";
import { FormLink } from "modules/auth-form/components/form-link/FormLink";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";
import { handleErrorMessage } from "modules/auth-form/store/authActions";
import { useAuthentication  } from "modules/auth-form/api/useAuthHook";
import { authError } from "modules/auth-form/store/authSelectors";

export const AuthForm = ({ isRegister }: TAuthFormProps) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [form] = Form.useForm<FormInstance>();
    const token = Cookies.get("token");
    const error = useAppSelector(authError);
    const { loader, authenticate  } = useAuthentication();

    useEffect(() => {
        dispatch(handleErrorMessage(null)); // затирает ошибку
        if (token) {
            isRegister
                ? navigate(RoutePath.spots)
                : navigate(RoutePath.favorites)
        }
    }, [token]);

    useEffect(() => {
        form.resetFields(["email", "password"]); // При переключении окна логин-регистрация, inputs зачищаются
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
                    loader={loader as boolean}
                />
            </div>
            {!isRegister && <FormLink link="/forgotPassword" textLink="Забыли пароль?" onClick={null} />}
            {loader && <PreloaderCar />}
            {!loader && (error && <ErrorMessage errorText={error} />)}
        </Form>
    )
}