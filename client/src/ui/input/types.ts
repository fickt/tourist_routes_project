import { ChangeEvent } from "react";

export interface IFormInputProps extends React.HTMLProps<HTMLInputElement> {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}