import React from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.scss";
import { UnderlineLink } from "ui/underline-link/UnderlineLink";
import { handleErrorMessage } from "modules/auth-form/store/authActions";
import { TFormHeaderProps } from "./types";

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
            <UnderlineLink link={link} textLink={textLink} onClick={resetErrorMessage} />
        </div>
    )
}