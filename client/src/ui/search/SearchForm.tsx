import React, { ChangeEvent } from "react";
import s from "./styles.module.scss";
import SearchIcon from "./assets/search-icon.svg";
import classNames from "classnames";
import { TSearchProps } from "./types";

export const SearchForm = ({ handleFormSubmit, handleInputChange, placeholder, searchValue }: TSearchProps) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e.target.value);
    }

    return (
        <form className={s.search} onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={searchValue}
                className={s.search_input}
                onChange={onChange}
                placeholder={placeholder}
            />
            <button onClick={handleFormSubmit} className={classNames(s.search__btn, s.search__magnifier_btn)}><SearchIcon /></button>
        </form>
    )
}