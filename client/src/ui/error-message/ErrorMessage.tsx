import s from "./style.module.scss";
import {Alert} from "antd";
import {TErrorMessageProps} from "./types";

export const ErrorMessage = ({errorText}: TErrorMessageProps) => {

    return (
        <Alert message={errorText} className={s.error}/>
    )
}