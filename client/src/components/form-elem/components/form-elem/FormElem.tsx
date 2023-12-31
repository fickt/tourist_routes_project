import React, {MouseEvent, useEffect} from "react";
import s from "./styles.module.scss";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {Form, FormInstance} from "antd";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {useAuth} from "hooks/useAuth";
import {TFormData, TFormProps} from "components/form-elem/types";
import {FormInput} from "components/form-elem/components/form-input/FormInput";
import {emailRules, nicknameRules} from "components/form-elem/constants/formRules";
import {PasswordInput} from "components/form-elem/components/form-input/PasswordInput";
import {FormButton} from "components/form-elem/components/form-button/FormButton";
import {authMessages, authUser, TServerResponse} from "modules/auth-form";
import {messages} from "components/form-elem/constants/constants";
import {isError, isLoader, setError} from "components/loader-error";
import {setInputTouched} from "modules/profile";

export const FormElem = ({isAuthForm, isRegister, isInfoChange, isPasswordChange, restorePassword}: TFormProps) => {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm<FormInstance>();
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const {authenticate} = useAuth();
    const user = useAppSelector(authUser);

    useEffect(() => {
        dispatch(setError(null));
        form.resetFields();
    }, [isRegister]);

    const inputTouched = () => dispatch(setInputTouched(true));

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
            dispatch(setError(error.response.data.error));
        }
    };

    const renderFormInputs = (loader: boolean) => {
        return (
            <div className={s.form__inputs}>
                {isInfoChange
                    ? <FormInput
                        name={messages.nickNameEng}
                        title={messages.nickNameRu}
                        rules={nicknameRules}
                        placeholder={user.nickname}
                        onChange={inputTouched}
                        loader={loader as boolean}
                    />
                    : isRegister && <FormInput
                        name={messages.nickNameEng}
                        title={messages.nickNameRu}
                        rules={nicknameRules}
                        placeholder={messages.userName}
                        loader={loader as boolean}
                    />
                }
                {!isPasswordChange
                    && <FormInput
                        name={messages.email} title={messages.emailSpecial}
                        rules={emailRules}
                        placeholder={isInfoChange ? user.email : messages.passEmail}
                        onChange={inputTouched}
                        loader={loader as boolean}
                    />
                }
                {(!restorePassword && !isInfoChange || isPasswordChange)
                    && <PasswordInput
                        title={isPasswordChange ? messages.newPassword : messages.password}
                        isAuthForm={isAuthForm}
                        isRegister={isRegister}
                        isPasswordChange={isPasswordChange}
                        loader={loader as boolean}
                    />
                }
            </div>
        );
    };

    const renderFormButtons = (loader: boolean) => {
        return (
            <div className={s.form__button}>
                {restorePassword
                    ? <FormButton value={authMessages.send} onClick={handleButtonClick} loader={loader as boolean}/>
                    : <FormButton
                        value={isRegister ? authMessages.register : authMessages.login}
                        onClick={handleButtonClick}
                        loader={loader as boolean}
                    />
                }
            </div>
        );
    }

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
            <div className={s.form__inputs}>{renderFormInputs(loader)}</div>
            <div className={s.form__button}>{renderFormButtons(loader)}</div>
            {loader && <PreloaderCar/>}
            {!loader && (error && <ErrorMessage errorText={error}/>)}
        </Form>
    )
}