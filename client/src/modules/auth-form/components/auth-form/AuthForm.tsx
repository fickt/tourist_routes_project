import { TAuthFormProps } from "./types";
import { FormElem } from "ui/form-elem/FormElem";
import s from "./style.module.scss";
import { FormLink } from "modules/auth-form/components/form-link/FormLink";
import { useDispatch } from "react-redux";
import { handleAuthError } from "modules/auth-form/store/authActions";
import { getAuthPageTextContent } from "pages/auth-page/constants/authPageTextContent";

export const AuthForm = ({ isRegister }: TAuthFormProps) => {

    const { title, text, link, headerLink, textLink } = getAuthPageTextContent(isRegister);
    const dispatch = useDispatch();

    const resetErrorMessage = () => {
        dispatch(handleAuthError(null));
    };

    return (

        <div className={s.auth}>
            <div className={s.form__header}>
                <h2 className={s.form__header__title}>{title}</h2>
                {text && <p className={s.form__header__text}>{text}</p>}
                <p className={s.form__header__text_extra}>{headerLink}</p>
                <FormLink link={link} textLink={textLink} onClick={resetErrorMessage} />
            </div>
            <FormElem isRegister={isRegister} isSettings={false} />
        </div>
    )
}