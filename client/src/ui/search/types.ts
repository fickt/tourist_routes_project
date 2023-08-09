import { FormEvent } from "react";

export type  ISearchProps = {
    handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void, 
    handleInputChange: (value: string) => void, 
    placeholder: string
  }