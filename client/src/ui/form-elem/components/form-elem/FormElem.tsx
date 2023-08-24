import React, { MouseEvent, useEffect } from "react";
import s from "./styles.module.scss";
import { PreloaderCar } from "ui/preloader/PreloaderCar";
import { ErrorMessage } from "ui/error-message/ErrorMessage";
import { Form, FormInstance } from "antd";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { authError, authLoader } from "modules/auth-form/store/authSelectors";
import { PasswordInput } from "ui/form-elem/components/form-input/PasswordInput";
import { useAuth } from "modules/auth-form/api/useAuth";
import { handleAuthError } from "modules/auth-form/store/authActions";
import { emailRules, nicknameRules } from "ui/form-elem/constants/formRules";
import { FormInput } from "ui/form-elem/components/form-input/FormInput";
import { FormButton } from "ui/form-elem/components/form-button/FormButton";
import { TFormData, TFormProps } from "ui/form-elem/types";

export const FormElem = ({ isRegister, isSettings }: TFormProps) => {

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

    const onFinish = () => {
        sendForm(form);
    }

    return (
        <Form
            form={form}
            name="basic"
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={onFinish}
            onValuesChange={handleFormChange}
        >
            <div className={s.form__inputs}>
                {isSettings
                    ? <FormInput name="nickname" rules={nicknameRules} placeholder="Никнейм" />
                    : isRegister && <FormInput name="nickname" rules={nicknameRules} placeholder="Имя пользователя" />
                }
                <FormInput name="email" rules={emailRules} placeholder={isSettings ? "nik@vk.com" : "E-mail"} />
                {!isSettings && <PasswordInput isRegister={isRegister} />}
                <FormButton
                    value={isSettings ? "Сохранить" : (isRegister ? "Зарегистрироваться" : "Войти")}
                    onClick={handleButtonClick}
                    loader={loader as boolean}
                />
            </div>
            {loader && <PreloaderCar />}
            {!loader && (error && <ErrorMessage errorText={error} />)}
        </Form>
    )
}