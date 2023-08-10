import React from "react";
import s from "./style.module.scss";
import { Spinner } from "ui/spinner/Spinner";

const ForgotPasswordPage = () => {

    return (
        <div className={s.wrapper}>
            <Spinner />
            <h2>Упс, тут пока ничего нет :(</h2>
        </div>
    );
}

export default ForgotPasswordPage;