import React from "react";
import s from "./style.module.scss";
import { Alert } from "antd";

type Props = {
    errorText: string;
}

export const ErrorMessage = ({ errorText }: Props) => {

    return (
        <Alert message={ errorText } className={s.error} />
    )
}