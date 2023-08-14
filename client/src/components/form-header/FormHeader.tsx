import { useDispatch } from "react-redux";
import s from "./style.module.scss";
import { handleErrorMessage } from "modules/auth-form/store/authActions";
import { TFormHeaderProps } from "./types";
import { FormLink } from "modules/auth-form/components/form-link/FormLink";

export const FormHeader = ({ title, text, link, headerLink, textLink }: TFormHeaderProps) => {

    const dispatch = useDispatch();

    const resetErrorMessage = () => {
        dispatch(handleErrorMessage(""));
    };

    return (
        <div className={s.form__header}>
            <h2 className={s.header__title}>{title}</h2>
            {text && <p className={s.header__text}>{text}</p>}
            <p className={s.header__extra__text}>{headerLink}</p>
            <FormLink link={link} textLink={textLink} onClick={resetErrorMessage} />
        </div>
    )
}