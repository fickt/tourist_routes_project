import { Rule } from "antd/lib/form";

export type TFormInputProps = {
    name: string;
    rules: Rule[];
    placeholder: string;
}

export type TPasswordInputProps = {
    isRegister: boolean;
}