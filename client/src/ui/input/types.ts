import { ChangeEvent, HTMLProps } from "react";

export interface IFormInputProps extends HTMLProps<HTMLInputElement> {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}