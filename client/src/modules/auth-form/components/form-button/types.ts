import { MouseEvent } from "react";
import { FormInstance } from "antd";

export type TFormButtonProps = {
    value: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    form: FormInstance;
    loader: string;
}