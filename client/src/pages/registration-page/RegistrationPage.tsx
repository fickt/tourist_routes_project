import React from "react";
import "../../app/styles/index.scss";
import { AuthForm } from "modules/auth-form/components/auth-form/AuthForm";
import { FormHeader } from "components/form-header/FormHeader";

const RegistrationPage = () => {

    return (
        <div className="auth">
            <FormHeader
                title="Регистрация"
                text=""
                link="/login"
                headerLink="Уже зарегистрированы?"
                textLink="Войдите в аккаунт."
            />
            <AuthForm type="registration" />
        </div>
    );
}

export default RegistrationPage;