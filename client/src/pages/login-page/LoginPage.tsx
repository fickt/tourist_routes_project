import React from "react";
import "../../app/styles/index.scss";
import { AuthForm } from "modules/auth-form/components/form-auth/AuthForm";
import { HeaderForm } from "components/header-form/HeaderForm";

const LoginPage = () => {

    return (
        <div className="auth">
            <HeaderForm
                title="Добро пожаловать"
                text="Чтобы продолжить, пожалуйста, войдите в аккаунт"
                link="/registration"
                headerLink="Ещё не зарегистрированы?"
                textLink="Зарегистрируйтесь здесь."
            />
            <AuthForm type="login" />
        </div>
    );
}

export default LoginPage;