import {TAuthFormProps} from "./types";
import {FormElem} from "components/form-elem/components/form-elem/FormElem";
import s from "./styles.module.scss";
import {ChangeFormButton} from "modules/auth-form/components/change-form-button/ChangeFormButton";
import {authMessages} from "modules/auth-form/constants/constants";
import {Link} from "react-router-dom";
import {RoutePath} from "pages/routeConfig";
import {messages} from "components/form-elem/constants/constants";

export const AuthForm = ({isRegister}: TAuthFormProps) => {

    return (
        <div className={s.auth}>
            <h2 className={s.auth__title}>{isRegister ? authMessages.register : authMessages.login}</h2>
            <FormElem isAuthForm isRegister={isRegister}/>
            {!isRegister && <ChangeFormButton/>}
            {!isRegister
                && <Link className={s.forgotPassword} to={RoutePath.auth_register}>
                    {messages.forgotPassword}
                </Link>
            }
            {isRegister && <p className={s.auth__text}>{authMessages.registerText}</p>}
        </div>
    )
}