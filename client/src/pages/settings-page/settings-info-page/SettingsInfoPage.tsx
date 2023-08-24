// import { FormInput } from "modules/auth-form-elem/components/form-elem-input/FormInput";
// import { emailRules, nicknameRules } from "modules/auth-form-elem/constants/formRules";
// import { FormButton } from "modules/auth-form-elem/components/form-elem-button/FormButton";
// import { Form, FormInstance } from "antd";
// import { useAuth } from "modules/auth-form-elem/api/useAuth";
// import { TFormData } from "./types";
// import { PreloaderCar } from "ui/preloader/PreloaderCar";
// import { ErrorMessage } from "ui/error-message/ErrorMessage";
// import { useAppSelector } from "storage/hookTypes";
// import { authError } from "modules/auth-form-elem/store/authSelectors";
// import React, { MouseEvent } from "react";

import {FormElem} from "ui/form-elem/FormElem";

export const SettingsInfoPage = () => {

    // const [form-elem] = FormElem.useForm<FormInstance>();
    // const { loader } = useAuth();
    // const error = useAppSelector(authError);
    //
    // const handleFormChange = (changedFields: TFormData | null) => (prevFormData: TFormData | null) => ({
    //     ...prevFormData,
    //     ...changedFields
    // });
    //
    // const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     form-elem.submit();
    // }
    //
    // const sendForm = (formInstance: FormInstance) => {
    //     console.log(formInstance);
    // }

    return (
        <FormElem isSettings={true} />
        // <Form
        //     form-elem={form-elem}
        //     name="basic"
        //     initialValues={{remember: true}}
        //     autoComplete="off"
        //     onFinish={sendForm}
        //     onValuesChange={handleFormChange}
        // >
        //     <div>
        //         <FormInput name="nickname" rules={nicknameRules} placeholder="Никнейм" />
        //         <FormInput name="email" rules={emailRules} placeholder="nik@vk.com" />
        //         <FormButton
        //             value="Сохранить"
        //             onClick={handleButtonClick}
        //             loader={loader as boolean}
        //         />
        //     </div>
        //     {loader && <PreloaderCar />}
        //     {!loader && (error && <ErrorMessage errorText={error} />)}
        // </Form>
    )
}