import { TAuthFormProps } from "./types";
import { FormElem } from "components/form-elem/components/form-elem/FormElem";
import s from "./styles.module.scss";
import { ChangeFormButton } from "modules/auth-form/components/change-form-button/ChangeFormButton";

export const AuthForm = ({ isRegister }: TAuthFormProps) => {

    const title = isRegister ? "Регистрация" : "Войти";
    const text = isRegister
        ? "Нажимая «Зарегистрироваться», я соглашаюсь с политикой конфиденциальности"
        : "После регистрации вы получите доступ ко всем возможностям сервиса";

    return (
        <div className={s.auth}>
            <h2 className={s.auth__title}>{title}</h2>
            <FormElem isAuthForm isRegister={isRegister} />
            {!isRegister && <ChangeFormButton />}
            <p className={s.auth__text}>{text}</p>
        </div>
    )
}