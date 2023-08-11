import React from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.scss";
import { UnderlineLink } from "ui/underline-link/UnderlineLink";
import { handleErrorMessage } from "modules/auth-form/store/authActions";

type Props = {
    title: string;
    text: string;
    link: string;
    headerLink: string;
    textLink: string;
}

export const FormHeader = ({ title, text, link, headerLink, textLink }: Props) => {

    const dispatch = useDispatch();

    const resetErrorMessage = () => {
        dispatch(handleErrorMessage(""));
    }

    return (
        <div className={s.form__header}>
            <h2 className={s.header__title}>{title}</h2>
            {text && <p className={s.header__text}>{text}</p>}
            <>
                <p className={s.header__extra__text}>{headerLink}</p>
                <UnderlineLink link={link} textLink={textLink} onClick={resetErrorMessage} />
            </>
        </div>
    )
}