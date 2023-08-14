import React from "react";
import s from "./styles.module.scss";
import { AuthForm } from "modules/auth-form/components/auth-form/AuthForm";
import { FormHeader } from "components/form-header/FormHeader";

const LoginPage = () => {

    return (
        <div className={s.auth}>
            <FormHeader
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