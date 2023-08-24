import s from "./styles.module.scss";
import { FormLink } from "modules/auth-form/components/form-link/FormLink";
import { getAuthPageTextContent } from "pages/auth-page/constants/authPageTextContent";
import { handleAuthError } from "modules/auth-form/store/authActions";
import { useDispatch } from "react-redux";
import { TFormHeaderProps } from "modules/auth-form/components/form-header/types";

export const FormHeader = ({ isRegister }: TFormHeaderProps) => {

    const dispatch = useDispatch();
    const { title, text, link, headerLink, textLink } = getAuthPageTextContent(isRegister);

    const resetErrorMessage = () => {
        dispatch(handleAuthError(null));
    };

    return (
        <div className={s.form__header}>
            <h2 className={s.form__header__title}>{title}</h2>
            {text && <p className={s.form__header__text}>{text}</p>}
            <p className={s.form__header__text_extra}>{headerLink}</p>
            <FormLink link={link} textLink={textLink} onClick={resetErrorMessage} />
        </div>
    )
}