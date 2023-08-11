import { FormEvent } from "react";

export type  ISearchProps = {
    handleFormSubmit: (e: FormEvent) => void, 
    handleInputChange: (value: string) => void, 
    placeholder: string,
    searchValue: string
  }