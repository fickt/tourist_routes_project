import { Rule } from "antd/lib/form";
import { ReactNode } from "react";

export type TFormInputProps = {
    name: string,
    title: string,
    rules: Rule[],
    placeholder: string,
}

export type TPasswordInputProps = {
    title: string,
    isAuthForm?: boolean,
    isRegister?: boolean,
    isPasswordChange?: boolean,

}

interface CustomPasswordInputProps extends TPasswordInputProps {
    iconRender: (visible: boolean) => ReactNode;
}