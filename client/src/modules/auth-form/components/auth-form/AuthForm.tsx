import { TAuthFormProps } from "./types";
import { FormElem } from "ui/form-elem/components/form-elem/FormElem";
import s from "./styles.module.scss";
import { FormHeader } from "modules/auth-form/components/form-header/FormHeader";

export const AuthForm = ({ isRegister }: TAuthFormProps) => {

    return (
        <div className={s.auth}>
            <FormHeader isRegister={isRegister} />
            <FormElem isAuthForm={true} isRegister={isRegister} />
        </div>
    )
}