import {FormEvent} from "react";

export type TSearchProps = {
    handleFormSubmit: (e: FormEvent) => void,
    handleInputChange: (value: string) => void,
    placeholder: string,
    searchValue: string
}