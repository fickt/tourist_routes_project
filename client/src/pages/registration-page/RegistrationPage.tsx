import React from "react";
import "../../app/styles/index.scss";
import { AuthForm } from "modules/auth-form/components/form-auth/AuthForm";
import { HeaderForm } from "components/header-form/HeaderForm";

const RegistrationPage = () => {

    return (
        <div className="auth">
            <HeaderForm
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