import { MouseEvent } from "react";

export type TFormButtonProps = {
    value: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    loader: boolean;
}