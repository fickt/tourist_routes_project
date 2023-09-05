import {TAuthFormProps} from "./types";
import {FormElem} from "components/form-elem/components/form-elem/FormElem";
import s from "./styles.module.scss";
import {ChangeFormButton} from "modules/auth-form/components/change-form-button/ChangeFormButton";
import {authMessages} from "modules/auth-form/constants/constants";

export const AuthForm = ({isRegister}: TAuthFormProps) => {

    return (
        <div className={s.auth}>
            <h2 className={s.auth__title}>
                {isRegister ? authMessages.register : authMessages.login}
            </h2>
            <FormElem isAuthForm isRegister={isRegister}/>
            {!isRegister && <ChangeFormButton/>}
            <p className={s.auth__text}>
                {isRegister ? authMessages.registerText : authMessages.loginText}
            </p>
        </div>
    )
}