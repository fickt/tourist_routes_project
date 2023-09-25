import {Rule} from "antd/lib/form";

export type TFormInputProps = {
    name: string,
    title: string,
    rules: Rule[],
    placeholder: string,
    onChange?: () => void,
    loader: boolean,
}

export type TPasswordInputProps = {
    title: string,
    isAuthForm?: boolean,
    isRegister?: boolean,
    isPasswordChange?: boolean,
    loader: boolean,
}