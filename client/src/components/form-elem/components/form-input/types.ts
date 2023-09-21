import {Rule} from "antd/lib/form";

export type TFormInputProps = {
    name: string,
    title: string,
    rules: Rule[],
    placeholder: string,
    onChange?: () => void,
}

export type TPasswordInputProps = {
    title: string,
    isAuthForm?: boolean,
    isRegister?: boolean,
    isPasswordChange?: boolean,
}