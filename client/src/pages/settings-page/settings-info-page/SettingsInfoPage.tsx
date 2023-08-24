import { FormInput } from "modules/auth-form/components/form-input/FormInput";
import { emailRules, nicknameRules } from "modules/auth-form/constants/formRules";
import { FormButton } from "modules/auth-form/components/form-button/FormButton";
import { Form, FormInstance } from "antd";
import { useAuth } from "modules/auth-form/api/useAuth";
import { TFormData } from "./types";
import { PreloaderCar } from "ui/preloader/PreloaderCar";
import { ErrorMessage } from "ui/error-message/ErrorMessage";
import { useAppSelector } from "storage/hookTypes";
import { authError } from "modules/auth-form/store/authSelectors";
import { MouseEvent } from "react";

export const SettingsInfoPage = () => {

    const [form] = Form.useForm<FormInstance>();
    const { loader } = useAuth();
    const error = useAppSelector(authError);

    const handleFormChange = (changedFields: TFormData | null) => (prevFormData: TFormData | null) => ({
        ...prevFormData,
        ...changedFields
    });

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        form.submit();
    }

    const sendForm = (formInstance: FormInstance) => {
        console.log(formInstance);
    }

    return (
        <>
            <Form
                form={form}
                name="basic"
                initialValues={{remember: true}}
                autoComplete="off"
                onFinish={sendForm}
                onValuesChange={handleFormChange}
            >
                <div>
                    <FormInput name="nickname" rules={nicknameRules} placeholder="Никнейм" />
                    <FormInput name="email" rules={emailRules} placeholder="nik@vk.com" />
                    <FormButton
                        value="Сохранить"
                        onClick={handleButtonClick}
                        loader={loader as boolean}
                    />
                </div>
            </Form>
            {loader && <PreloaderCar />}
            {!loader && (error && <ErrorMessage errorText={error} />)}
        </>
    )
}