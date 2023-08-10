import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Alert, FormInstance } from "antd";
import s from "./style.module.scss";
import Cookies from "js-cookie";
import { RootState } from "storage/redux-types";
import AuthService from "modules/auth-form/api/AuthService";
import { handleErrorMessage, handleLoaderActive, handleSetUser, handleUserAuth, handleUserReg } from "modules/auth-form/store/actions";
import { UnderlineLink } from "ui/underline-link/UnderlineLink";
import { emailRules, FormButton, FormInput, nicknameRules, PasswordInput, TFormData } from "modules/auth-form";
import { Spinner } from "ui/spinner/Spinner";

type Props = {
    type: string;
}

export const AuthForm = ({ type }: Props) => {

    useEffect(() => {
        dispatch(handleErrorMessage(""));
    }, [])

    const dispatch = useDispatch();

    const userRegStatus = useSelector((state: RootState) => state.userStatus.user_reg);
    const errorMessage = useSelector((state: RootState) => state.errorMessage.error_message);
    const loader = useSelector((state: RootState) => state.isLoaderActive.is_loader_active);

    const [form] = Form.useForm<FormInstance>();
    const [formData, setFormData] = useState<TFormData | null>(null);

    const setUserAuth = (isRegistration: boolean) => {
        dispatch(isRegistration ? handleUserReg(true) : handleUserAuth(true))
    }

    const setSuccessMessage = (isRegistration: boolean, response: any) => {
        dispatch(
            isRegistration
                ? handleErrorMessage(`Пользователь ${response.data.user.email} зарегистрирован`)
                : handleErrorMessage(`Вы вошли как ${response.data.user.email}`)
        )
    }

    const performAuth = async (email: string, password: string, isRegistration: boolean) => {
        dispatch(handleLoaderActive(true));
        try {
            const response = isRegistration
                ? await AuthService.registration(email, password)
                : await AuthService.login(email, password);
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

    const handleFormChange = (changedFields: any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            ...changedFields,
        }));
    };

    const formValidation = async (values: any) => {
        console.log(formData)

        userRegStatus
            ? await performAuth(values.email, values.password, false)
            : await performAuth(values.email, values.password, true)
    }

    return (
        <Form
            form={form}
            name="basic"
            className={s.form}
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={formValidation}
            onValuesChange={handleFormChange}
        >
            <div className={s.form__inputs}>
                {type === "registration"
                    && <FormInput name="nickname" rules={nicknameRules} placeholder="Имя пользователя" />
                }
                <FormInput name="email" rules={emailRules} placeholder="E-mail" />
                <PasswordInput type={type} />
                <FormButton
                    value={type === "login" ? "Войти" : "Зарегистрироваться"}
                    onClick={form.submit}
                    disabled={!form.isFieldsTouched(true) || form.getFieldsError()
                        .filter(({errors}) => errors.length).length > 0
                    }
                />
            </div>
            {type === "login" && <UnderlineLink link="/forgotPassword" textLink="Забыли пароль?" onClick={null} />}
            {loader && <Spinner />}
            {!loader && (errorMessage && <Alert message={errorMessage} />)}
        </Form>
    )
}