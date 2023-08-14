import React from "react";
import s from "./styles.module.scss";
import { AuthForm } from "modules/auth-form/components/auth-form/AuthForm";
import { FormHeader } from "components/form-header/FormHeader";

const RegistrationPage = () => {

    return (
        <div className={s.auth}>
            <FormHeader
                title="Регистрация"
                link="/login"
                headerLink="Уже зарегистрированы?"
                textLink="Войдите в аккаунт."
            />
            <AuthForm type="registration" />
        </div>
    );
}

export default RegistrationPage;