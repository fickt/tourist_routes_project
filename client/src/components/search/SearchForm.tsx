import React, { ChangeEvent } from "react";
import s from "./styles.module.scss";
import SearchIcon from "./assets/search-icon.svg";
import classNames from "classnames";
import { TSearchProps } from "./types";
import { Input } from "ui/input/Input";

export const SearchForm = ({ handleFormSubmit, handleInputChange, placeholder, searchValue }: TSearchProps) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e.target.value);
    }

    return (
        <form className={s.search} onSubmit={handleFormSubmit}>
            <Input                
                value={searchValue}
                className={s.search__input}
                onChange={onChange}
                placeholder={placeholder} 
            />
            <button onClick={handleFormSubmit} className={classNames(s.search__btn, s.search__magnifier_btn)}><SearchIcon /></button>
        </form>
    )
}